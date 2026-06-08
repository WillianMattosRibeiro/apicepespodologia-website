import type { ReactNode } from "react";
import { SECTION_CONTAINER, SECTION_WRAPPER } from "./site";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  children,
  className = "",
  containerClassName = "",
}: SectionShellProps) {
  return (
    <section className={`${SECTION_WRAPPER} ${className}`.trim()}>
      <div className={`${SECTION_CONTAINER} ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
}
