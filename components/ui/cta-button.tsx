import type { AnchorHTMLAttributes } from "react";
import {
  HERO_ACTION_PRIMARY,
  HERO_ACTION_SECONDARY,
  WHATSAPP_LINK,
} from "./site";

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  href?: string;
};

export function CtaButton({
  children,
  variant = "primary",
  href = WHATSAPP_LINK,
  className = "",
  ...props
}: CtaButtonProps) {
  const baseClassName =
    variant === "primary" ? HERO_ACTION_PRIMARY : HERO_ACTION_SECONDARY;

  return (
    <a href={href} className={`${baseClassName} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
