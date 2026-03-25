#!/bin/bash

set -e

# ==============================
# CONFIGURAÇÕES
# ==============================

DOMAIN="apicepespodologia.com.br"
EMAIL="seu-email@dominio.com"  # 🔴 ALTERE PARA SEU EMAIL REAL
APP_IMAGE="willianmribeiro/prototipos:apicepes"

echo "🔧 Atualizando sistema (Fedora/Amazon Linux)..."
sudo yum update -y || sudo dnf update -y

echo "🐳 Instalando Docker se necessário..."
if ! command -v docker &> /dev/null
then
    sudo yum install -y docker || sudo dnf install -y docker
    sudo systemctl enable docker
    sudo systemctl start docker
    sudo usermod -aG docker $USER
fi

echo "📦 Instalando Docker Compose plugin..."
if ! docker compose version &> /dev/null
then
    sudo mkdir -p /usr/libexec/docker/cli-plugins
    sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \
        -o /usr/libexec/docker/cli-plugins/docker-compose
    sudo chmod +x /usr/libexec/docker/cli-plugins/docker-compose
fi

echo "📁 Criando estrutura de diretórios..."
mkdir -p docker/conf.d
mkdir -p certbot/conf
mkdir -p certbot/www

echo "📝 Criando docker-compose.yml..."
cat > docker-compose.yml <<EOF
version: "3.9"

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

echo "📝 Criando configuração HTTP inicial..."
cat > docker/conf.d/apicepes.conf <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://app:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
    }
}
EOF

echo "🚀 Subindo containers..."
sudo docker compose up -d

sleep 5

echo "🔐 Gerando certificado SSL..."
sudo docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  -d ${DOMAIN} \
  -d www.${DOMAIN} \
  --email ${EMAIL} \
  --agree-tos \
  --no-eff-email

echo "📝 Atualizando Nginx para HTTPS..."

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
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://app:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
    }
}
EOF

echo "♻ Reiniciando Nginx..."
sudo docker compose restart nginx

echo "🔄 Configurando renovação automática..."
(crontab -l 2>/dev/null; echo "0 3 * * * docker compose run --rm certbot renew && docker compose restart nginx") | crontab -

echo ""
echo "✅ INSTALAÇÃO FINALIZADA COM SUCESSO!"
echo "🌍 Acesse: https://${DOMAIN}"
echo ""
echo "⚠ IMPORTANTE: Certifique-se que o DNS aponta para o IP da EC2."
