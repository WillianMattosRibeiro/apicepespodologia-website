import type { ReactNode } from "react";
import {
  SECTION_DESCRIPTION,
  SECTION_EYEBROW,
  SECTION_HEADER_CONTAINER,
  SECTION_TITLE,
} from "./site";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`${SECTION_HEADER_CONTAINER} ${className}`.trim()}>
      <p className={`${SECTION_EYEBROW} ${eyebrowClassName}`.trim()}>{eyebrow}</p>
      <h2 className={`${SECTION_TITLE} ${titleClassName}`.trim()}>{title}</h2>
      {description ? (
        <p className={`${SECTION_DESCRIPTION} ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
