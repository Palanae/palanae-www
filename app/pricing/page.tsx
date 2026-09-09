import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose Palanae modules for your business. Compare Base and +AI options for CRM and spend, and talk with us about a tailored quote.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing — Palanae", description: "Start with the modules you need. Add AI where it helps. Explore Palanae’s modular pricing.", url: "https://www.palanae.com/pricing", type: "website", siteName: "Palanae" },
};

// Public amounts deliberately omitted pending approval of the current commercial offer.
// Module/tier structure: ../palanae/MODULE-RAILS-SPEC.md, ratified 2026-08-22.
const MODULES = [
  { name: "CRM", eyebrow: "RELATIONSHIPS & PIPELINE", description: "Keep the people, opportunities, and conversations behind your business connected.", features: ["Relationship and contact context", "Opportunities and pipeline stages", "Proposals, briefs, and knowledge"], ai: "AI-assisted imports turn source material into proposed facts for your team to review." },
  { name: "Spend", eyebrow: "REQUESTS & APPROVALS", description: "Give spend requests a clear home, with the context needed to review and approve them.", features: ["Spend requests and approvals", "Approval thresholds and allocations", "Connected company records"], ai: "AI-assisted parsing helps turn request details into structured information for review." },
];
const COMPARISON = [
  ["Manual entry and core module workflows", "Included", "Included"],
  ["Shared company records and contacts", "Included", "Included"],
  ["Roles and permissions", "Included", "Included"],
  ["Module-specific AI import and parsing", "—", "Included where supported"],
  ["Review of AI-proposed updates", "—", "Included"],
  ["Source information on AI-derived facts", "—", "Included"],
  ["Monthly AI allowance", "—", "Specified in your quote"],
];
const FAQS = [
  ["How is my price determined?", "Your quote reflects the modules you choose, the people using them, and whether you select Base or +AI. We’ll confirm the recurring price, included seats, AI allowance, and any setup scope before you commit."],
  ["What is the difference between Base and +AI?", "Base gives you the module’s manual-entry workflows. +AI adds the import and parsing features supported by that module, with a monthly allowance. AI-derived updates are reviewed before they become part of your records."],
  ["Do I need both modules?", "No. Start with the module that fits your immediate needs. CRM and Spend use a shared foundation of company records, contacts, and context."],
  ["Is AI usage unlimited?", "+AI includes an allowance defined in your quote. We’ll discuss your expected usage and confirm suitable options, limits, and terms before you choose a plan."],
  ["Can I sign up right away?", "Every new workspace starts with a discovery conversation. We’ll discuss your team, modules, vocabulary, and processes before setting up your workspace. Existing clients can sign in from the navigation."],
  ["Does Palanae replace my accounting software?", "No. Palanae connects business knowledge and operational work. Your payroll and general ledger stay with the systems that own those records."],
];

export default function PricingPage() {
  return <><SiteHeader active="pricing" /><main id="main">
    <section className="pricing-hero"><Container><p className="eyebrow"><span className="accent-dot" /> SIMPLE START. ROOM TO GROW.</p><h1>Your business.<br /><span>Your combination.</span></h1><p className="hero-description">Choose the modules you need. Add AI where it helps.<br className="desktop-nav" /> Keep everything connected in one workspace.</p><div className="pricing-process"><span><b>01</b> Choose your modules</span><span><b>02</b> Base or +AI</span><span><b>03</b> Fit it to your team</span></div></Container></section>
    <section className="pricing-modules" aria-label="Module pricing"><Container><div className="module-grid">{MODULES.map(module => <article className="module-card" key={module.name}><p className="eyebrow">{module.eyebrow}</p><h2>{module.name}</h2><p className="module-description">{module.description}</p><div className="quote-price">Let’s find your fit.<span>Tailored pricing · Talk to us for a quote</span></div><ButtonLink href="/#contact" variant={module.name === "CRM" ? "primary" : "secondary"} className="w-full">Discuss {module.name} pricing <span aria-hidden="true">↗</span></ButtonLink><div className="module-includes"><h3>BASE INCLUDES</h3><ul>{module.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul></div><div className="ai-option"><span className="ai-badge">+AI</span><div><h3>Add intelligence to the workflow.</h3><p>{module.ai}</p></div></div></article>)}</div><p className="pricing-note">Module pricing, included seats, and AI allowances are confirmed in your quote.</p><div className="shared-foundation"><div><span className="mini-label">THE SHARED FOUNDATION</span><h3>One workspace. Connected from the start.</h3></div><p>Company records & contacts <span>·</span> Notes & action items <span>·</span> Roles & permissions</p></div></Container></section>
    <section className="marketing-section" id="compare"><Container><div className="section-heading"><div><p className="eyebrow">CHOOSE HOW YOU WORK</p><h2>Start with Base.<br /><span>Bring in +AI.</span></h2></div><p>Choose the tier for each module. Keep the workflows your team needs and add AI-assisted capture where it is useful.</p></div><div className="comparison-wrap" role="region" aria-label="Base and AI feature comparison" tabIndex={0}><table className="comparison-table"><caption className="sr-only">Compare Base and +AI module tiers</caption><thead><tr><th scope="col">What’s included</th><th scope="col">Base</th><th scope="col">+AI <span>Base, plus AI features</span></th></tr></thead><tbody>{COMPARISON.map(([label, base, ai]) => <tr key={label}><th scope="row">{label}</th><td>{base === "—" ? <span aria-label="Not included">—</span> : base}</td><td>{ai}</td></tr>)}</tbody></table></div></Container></section>
    <section className="marketing-section faq-section"><Container><div className="faq-layout"><div><p className="eyebrow">A FEW MORE DETAILS</p><h2>Good questions.<br /><span>Clear answers.</span></h2></div><div className="faq-list">{FAQS.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></Container></section>
    <section className="pricing-final"><Container><p className="eyebrow">YOUR NEXT STEP</p><h2>Start with what<br />your business needs.</h2><p>Tell us about your team. We’ll help shape your workspace and quote.</p><ButtonLink href="/#contact">Let’s talk about Palanae <span aria-hidden="true">↗</span></ButtonLink></Container></section>
  </main><SiteFooter /></>;
}
