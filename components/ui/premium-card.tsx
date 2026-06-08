import type { HTMLAttributes, ReactNode } from "react";
import { SERVICE_CARD, SERVICE_CARD_ACCENT_BAR } from "./site";

type PremiumCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  withAccentBar?: boolean;
};

export function PremiumCard({
  children,
  withAccentBar = true,
  className = "",
  ...props
}: PremiumCardProps) {
  return (
    <article className={`${SERVICE_CARD} ${className}`.trim()} {...props}>
      {withAccentBar ? <div className={SERVICE_CARD_ACCENT_BAR} /> : null}
      {children}
    </article>
  );
}
