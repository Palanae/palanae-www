import { BRAND, SECTIONS, SIGN_IN_ENABLED, SIGN_IN_URL } from "@/lib/brand";
import { Container } from "./ui";

/**
 * Sticky header. Text wordmark only — no commissioned mark until Class 9/42
 * clearance (PALANAE-LAUNCH-PLAN.md D4 holds logo spend, while publishing
 * establishes the common-law first-use date).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="text-[15px] font-bold tracking-[0.22em] text-text-primary"
          aria-label={`${BRAND.name} — back to top`}
        >
          PALANAE
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-button text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {SIGN_IN_ENABLED ? (
          <a
            href={SIGN_IN_URL}
            className="text-button rounded-lg border border-border-strong px-4 py-2 text-text-primary transition-colors duration-150 ease-standard hover:bg-surface"
          >
            Sign in
          </a>
        ) : (
          /*
           * The sign-in host is not publicly reachable yet (see SIGN_IN_ENABLED
           * in lib/brand.ts). Rendering a live button that lands on a
           * shared-secret prompt would read as a broken product to the exact
           * audience this page is for, so the slot holds a non-interactive note
           * instead — same footprint, so enabling it later shifts no layout.
           */
          <span className="text-button whitespace-nowrap rounded-lg border border-border px-4 py-2 text-text-muted">
            Client sign-in
          </span>
        )}
      </Container>
    </header>
  );
}
