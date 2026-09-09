import Link from "next/link";
import { BRAND, SIGN_IN_ENABLED, SIGN_IN_URL } from "@/lib/brand";
import { Container } from "./ui";

export function SiteHeader({ active = "home" }: { active?: "home" | "pricing" }) {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Skip to content</a>
      <Container className="header-inner">
        <Link href="/" className="wordmark" aria-label={`${BRAND.name} home`}>PALANAE</Link>
        <nav aria-label="Main navigation" className="main-nav">
          <Link href="/#platform" className="desktop-nav">Platform</Link>
          <Link href="/#capture" className="desktop-nav">How it works</Link>
          <Link href="/pricing" aria-current={active === "pricing" ? "page" : undefined}>Pricing</Link>
        </nav>
        <div className="header-actions">
          {SIGN_IN_ENABLED ? <a href={SIGN_IN_URL} className="sign-in">Sign in <span aria-hidden="true">↗</span></a> : <span className="sign-in">Client sign-in</span>}
          <Link href="/#contact" className="header-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
      </Container>
    </header>
  );
}
