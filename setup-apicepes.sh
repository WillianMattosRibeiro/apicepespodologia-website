#!/bin/bash
set -euo pipefail

DOMAIN="apicepespodologia.com.br"
EMAIL="admin@apicepespodologia.com.br"
APP_IMAGE="willianmribeiro/prototipos:apicepes"

OS_ID=""
OS_LIKE=""

load_os_info() {
    if [ -f /etc/os-release ]; then
        # shellcheck disable=SC1091
        . /etc/os-release
        OS_ID="${ID:-}"
        OS_LIKE="${ID_LIKE:-}"
    fi
}

is_ubuntu() {
    [ "${OS_ID}" = "ubuntu" ] || echo "${OS_LIKE}" | grep -Eq '(^|[[:space:]])debian($|[[:space:]])'
}

is_amazon_linux() {
    [ "${OS_ID}" = "amzn" ] || echo "${OS_LIKE}" | grep -Eq '(^|[[:space:]])fedora($|[[:space:]])'
}

package_update() {
    if command -v apt-get >/dev/null 2>&1; then
        sudo apt-get update
    elif command -v dnf >/dev/null 2>&1; then
        sudo dnf -y update --refresh || true
    else
        sudo yum -y update || true
    fi
}

package_install() {
    if command -v apt-get >/dev/null 2>&1; then
        sudo apt-get install -y "$@"
    elif command -v dnf >/dev/null 2>&1; then
        sudo dnf install -y "$@"
    else
        sudo yum install -y "$@"
    fi
}

ensure_service_started() {
    local service_name="$1"
    sudo systemctl enable "$service_name"
    sudo systemctl start "$service_name"
}

load_os_info

echo "🔧 Atualizando sistema (Ubuntu e Amazon Linux compatíveis)..."
package_update

echo "🐳 Instalando Docker se necessário..."
if ! command -v docker &> /dev/null; then
    if is_ubuntu; then
        package_install ca-certificates curl gnupg lsb-release docker.io docker-compose-plugin
        ensure_service_started docker
    elif is_amazon_linux; then
        package_install docker
        ensure_service_started docker
    else
        echo "❌ Sistema operacional não suportado: ${OS_ID:-desconhecido}"
        exit 1
    fi
    sudo usermod -aG docker $USER
fi

echo "📦 Instalando Docker Compose plugin..."
if ! docker compose version &> /dev/null; then
    if is_ubuntu; then
        package_install docker-compose-plugin
    else
        sudo mkdir -p /usr/libexec/docker/cli-plugins
        sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \
            -o /usr/libexec/docker/cli-plugins/docker-compose
        sudo chmod +x /usr/libexec/docker/cli-plugins/docker-compose
    fi
fi

echo "📁 Criando diretórios..."
mkdir -p docker/conf.d
mkdir -p certbot/conf
mkdir -p certbot/www

echo "📝 Criando docker-compose.yml..."
cat > docker-compose.yml <<EOF
services:
  app:
    image: ${APP_IMAGE}
    container_name: apicepes_app
    restart: unless-stopped
    expose:
      - "8080"

  nginx:
    image: nginx:latest
    container_name: apicepes_nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx.conf:/etc/nginx/nginx.conf
      - ./docker/conf.d:/etc/nginx/conf.d
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    depends_on:
      - app
    command: >
      /bin/sh -c "
      while [ ! -f /etc/letsencrypt/live/${DOMAIN}/fullchain.pem ]; do
        echo 'Waiting for certificate...';
        sleep 5;
      done;
      nginx -g 'daemon off;';
      "

  certbot:
    image: certbot/certbot
    container_name: apicepes_certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
EOF

echo "📝 Criando nginx.conf..."
cat > docker/nginx.conf <<EOF
events {}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    include /etc/nginx/conf.d/*.conf;
}
EOF

echo "📝 Criando configuração inicial HTTP..."
cat > docker/conf.d/apicepes.conf <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://app:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

echo "🚀 Subindo containers..."
sudo docker compose up -d

sleep 5

if [ ! -f "certbot/conf/live/${DOMAIN}/fullchain.pem" ]; then
    echo "🔐 Gerando certificado SSL..."
    sudo docker compose run --rm certbot certonly \
      --webroot \
      --webroot-path=/var/www/certbot \
      -d ${DOMAIN} \
      -d www.${DOMAIN} \
      --email ${EMAIL} \
      --agree-tos \
      --no-eff-email
fi

echo "📝 Atualizando configuração para HTTPS..."
cat > docker/conf.d/apicepes.conf <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${DOMAIN} www.${DOMAIN};

    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        proxy_pass http://app:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

echo "♻ Reiniciando Nginx..."
sudo docker compose restart nginx

echo "🔄 Configurando renovação automática..."
if ! command -v crontab &> /dev/null; then
    echo "📦 Instalando cron (cronie)..."
    if is_ubuntu; then
        package_install cron
        ensure_service_started cron
    elif command -v dnf &> /dev/null; then
        package_install cronie
        ensure_service_started crond
    else
        package_install cronie
        ensure_service_started crond
    fi
fi

TMP_CRON_FILE=$(mktemp)
crontab -l 2>/dev/null | grep -v "certbot renew" > "$TMP_CRON_FILE" || true
echo "0 3 * * * docker compose run --rm certbot renew && docker compose restart nginx" >> "$TMP_CRON_FILE"
crontab "$TMP_CRON_FILE"
rm -f "$TMP_CRON_FILE"

echo ""
echo "✅ INSTALAÇÃO FINALIZADA!"
echo "🌍 https://${DOMAIN}"
