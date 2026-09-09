/**
 * Every outward-facing string and URL the site depends on, in one place.
 *
 * Two of these are not yet true in production and are flagged as such. They
 * are constants rather than inline literals precisely so that turning them on
 * is a one-line, greppable change instead of a hunt through JSX.
 */

export const BRAND = {
  name: "Palanae",
  /** Shown in the hero. The name's `-ae` ending has four plausible English
   *  readings (larvae→vee, vertebrae→bray, formulae→lay), so the site states
   *  the pronunciation rather than hoping. */
  pronunciation: "pal-uh-NAY",
  operator: "StrAinge AI LLC",
  operatorSite: "https://www.straingebs.com",
  tagline: "The library your business already has.",
} as const;

/**
 * ✅ LIVE as of 2026-08-20. `palanae.com` is a secondary domain in the StrAinge
 * AI Google Workspace and this address is a Google Group (no license
 * consumed, no login), mirroring `info@strainge.org`.
 *
 * A Group, not an alias of `info@straingebs.com`, on purpose: Palanae
 * inquiries and consulting inquiries are different businesses with different
 * follow-up, and merging them into one inbox is not recoverable after the
 * fact.
 *
 * `send.palanae.com` is a DIFFERENT thing — outbound auth email only, and it
 * receives nothing. Never point a mailto: at it.
 */
export const CONTACT_EMAIL = "info@palanae.com";

/**
 * The tenant-facing application host.
 *
 * `www.palanae.ai`, NOT `app.palanae.com` (changed 2026-08-20, before anything
 * was live). Signed-in tenants spend their working day at this URL, so it is
 * the address the product is actually known by; the .com is the brand front
 * door. Worth doing precisely because a sign-in host is the hardest thing here
 * to change later — bookmarks, saved sessions, and in-flight magic links all
 * encode it — and it cost one API call while nothing pointed at it yet.
 *
 * Live since 2026-08-22. The host's shared-secret gate is disabled in
 * production only (`POC_ACCESS_DISABLED=true`; preview deploys stay gated —
 * they have no auth story), and a magic link was completed end-to-end on
 * `www.palanae.ai`: Palanae-branded, sent from send.palanae.com, callback on
 * this host.
 *
 * If sign-in ever has to be pulled again, flip SIGN_IN_ENABLED back to
 * `false`; the header falls back to a non-clickable "Client sign-in" note
 * rather than a dead button.
 */
export const SIGN_IN_ENABLED = true;
export const SIGN_IN_URL = "https://www.palanae.ai/login";

/** Homepage section targets. Navigation uses absolute homepage anchors across routes. */
export const SECTIONS = [
  { id: "platform", label: "Platform" },
  { id: "capture", label: "How it works" },
  { id: "trust", label: "Trust" },
  { id: "model", label: "Your workspace" },
  { id: "contact", label: "Contact" },
] as const;
