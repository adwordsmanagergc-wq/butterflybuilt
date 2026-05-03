import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article" | "aside";
}) {
  return (
    <As id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container-prose">{children}</div>
    </As>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Heading({
  children,
  level = 2,
  className = "",
  id,
}: {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  id?: string;
}) {
  const sizes = {
    1: "text-4xl sm:text-5xl md:text-6xl",
    2: "text-3xl sm:text-4xl md:text-5xl",
    3: "text-2xl sm:text-3xl",
  } as const;
  const Tag = (`h${level}` as unknown) as "h1";
  return (
    <Tag id={id} className={`h-display ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}
