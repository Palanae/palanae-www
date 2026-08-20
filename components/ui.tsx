import type { ReactNode } from "react";

/**
 * The handful of layout primitives every section on the page is built from.
 * Kept deliberately small — this is one page, not a design system, and the
 * colour/type system it draws on already lives in app/globals.css.
 *
 * All server components. The page ships no client JavaScript except the
 * contact form, which needs it to submit.
 */

/** The single horizontal measure the whole page aligns to. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-overline text-accent">{children}</p>;
}

/**
 * A page section with its anchor id, vertical rhythm, and the fading hairline
 * that separates it from the one above. `id` matches SECTIONS in lib/brand.ts.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <div className="rule-fade mb-12" aria-hidden="true" />
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-headline mt-4 text-text-primary text-balance">{title}</h2>
          {lede ? <p className="text-lede mt-5 text-text-secondary">{lede}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

/** A bordered panel — the platform's flat elevation: border, no shadow. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 transition-colors duration-150 ease-standard hover:border-border-strong ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Primary call to action. Volt on ink is the loudest thing on the page, which
 * is why exactly two of these exist (hero and contact).
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "text-button inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 transition-colors duration-150 ease-standard";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:opacity-90"
      : "border border-border-strong text-text-primary hover:bg-surface";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
