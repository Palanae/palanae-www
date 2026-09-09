import Link from "next/link";
import { BRAND, CONTACT_EMAIL } from "@/lib/brand";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div><Link href="/" className="wordmark">PALANAE</Link><p className="text-copy mt-4 text-text-secondary">The library your business already has.</p></div>
          <nav aria-label="Footer navigation"><Link href="/#platform">Platform</Link><Link href="/pricing">Pricing</Link><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></nav>
        </div>
        <div className="footer-bottom"><p>Built and operated by <a href={BRAND.operatorSite}>{BRAND.operator}</a></p><p>© {new Date().getFullYear()} {BRAND.operator}</p></div>
      </Container>
    </footer>
  );
}
