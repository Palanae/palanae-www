import { BRAND, CONTACT_EMAIL } from "@/lib/brand";
import { Container } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-14">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="text-[15px] font-bold tracking-[0.22em] text-text-primary">PALANAE</p>
          <p className="text-copy mt-3 text-text-muted">
            Built and operated by{" "}
            <a className="link-accent" href={BRAND.operatorSite}>
              {BRAND.operator}
            </a>
            . Delivered as a managed, multi-tenant cloud product — each client company gets its own
            isolated workspace.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a className="text-copy link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <p className="text-copy text-text-muted">
            © {year} {BRAND.operator}
          </p>
        </div>
      </Container>
    </footer>
  );
}
