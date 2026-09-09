import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Palanae CRM starts at $350/month and Spend at $25/month. Compare included users, AI+ options, additional-user pricing, and Unlimited AI.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing — Palanae", description: "CRM from $350/month. Spend from $25/month. Choose your modules, add AI+, and grow with clear team pricing.", url: "https://www.palanae.com/pricing", type: "website", siteName: "Palanae" },
};

// Approved commercial baseline: ../palanae/PRICING-DECISION.md, 2026-09-09.
// This marketing offer does not configure platform billing or entitlements.
const PLANS = [
  { name: "CRM", eyebrow: "RELATIONSHIPS & PIPELINE", price: "$350", users: "5", description: "Keep the people, opportunities, and conversations behind your business connected.", features: ["Relationship and contact context", "Opportunities and pipeline stages", "Proposals, briefs, and knowledge"], aiPrice: "+$150", total: "$500", ai: "AI-assisted imports turn source material into proposed facts for your team to review." },
  { name: "Spend Simple", eyebrow: "REQUESTS & APPROVALS", price: "$25", users: "10", description: "Give everyday spend requests a clear path from submission to approval.", features: ["Spend requests and approvals", "Approval thresholds and allocations", "Connected company records"], aiPrice: "+$50", total: "$75", ai: "AI-assisted parsing helps turn request details into structured information for review." },
  { name: "Spend Enhanced", eyebrow: "SPEND & FINANCE HANDOFF", price: "$50", users: "10", description: "Carry approved spend through reconciliation and a clear handoff to finance.", features: ["Everything in Spend Simple", "Receipts and reconciliation", "Finance packets and handoff"], aiPrice: "+$50", total: "$100", ai: "Add AI-assisted capture and parsing to your spend workflow, with review before updates." },
];
const USER_RATES = [
  ["CRM Base", "5", "$40 each", "$30 each", "$20 each"],
  ["CRM AI+ add-on", "First 5", "+$30 each", "+$30 each", "+$30 each"],
];
const COMPARISON = [
  ["Manual entry and module workflows", "Included", "Included"],
  ["Shared company records and contacts", "Included", "Included"],
  ["Roles and permissions", "Included", "Included"],
  ["Module-specific AI import and parsing", "—", "Included where supported"],
  ["Review of AI-proposed updates", "—", "Included"],
  ["Source information on AI-derived facts", "—", "Included"],
  ["Monthly AI allowance", "—", "Confirmed before you subscribe"],
];
const FAQS = [
  ["What counts as a paid user?", "Users with working permissions in a module count toward that module’s subscription, whether or not they log in that month. View-only users are free. Someone working in both CRM and Spend can count in both modules."],
  ["How does AI+ pricing work?", "AI+ is an optional add-on for each module. CRM AI+ starts at $150/month for the first five users, plus $30 for each additional CRM user. Spend AI+ starts at $50/month for the first ten users, plus $5 for each additional Spend user. When enabled, AI+ pricing follows all working users in that module."],
  ["Do I pay for both Spend plans?", "No. Choose Spend Simple or Spend Enhanced. Enhanced includes the Simple workflows and adds reconciliation and finance handoff. You can add AI+ to either plan."],
  ["Do I need both CRM and Spend?", "No. Start with the module that fits your immediate needs. CRM and Spend share a foundation of company records, contacts, and context when used together."],
  ["Is AI usage unlimited?", "AI+ includes a monthly allowance confirmed before you subscribe. The optional Unlimited AI add-on covers standard everyday team use across your enabled AI+ modules. Bulk processing and specialist workloads are quoted separately. See the Unlimited section below for pricing and scope."],
  ["How do I get started?", "Start with a discovery conversation. We’ll confirm your modules, working users, recurring total, AI allowance, any setup scope, and subscription terms before you commit."],
  ["Does Palanae replace my accounting software?", "No. Palanae connects business knowledge and operational work. Your payroll and general ledger stay with the systems that own those records."],
];
const UNLIMITED_EXAMPLES = [
  ["CRM · 5 users", "$500", "+$150", "$650"],
  ["Spend Enhanced · 10 users", "$100", "+$300", "$400"],
  ["CRM · 5 + Spend Enhanced · 10 users", "$600", "+$350", "$950"],
];

export default function PricingPage() {
  return <><SiteHeader active="pricing" /><main id="main">
    <section className="pricing-hero"><Container>
      <p className="eyebrow"><span className="accent-dot" /> SIMPLE START. ROOM TO GROW.</p>
      <h1>Your business.<br /><span>Your combination.</span></h1>
      <p className="hero-description">Choose the modules you need. Add AI where it helps.<br className="desktop-nav" /> Keep everything connected in one workspace.</p>
      <div className="pricing-process"><span><b>01</b> Choose your modules</span><span><b>02</b> Add AI+</span><span><b>03</b> Grow with your team</span></div>
      <a className="pricing-jump" href="#unlimited">Explore the Unlimited AI add-on <span aria-hidden="true">↓</span></a>
    </Container></section>
    <section className="pricing-modules" aria-label="Module pricing"><Container>
      <div className="module-grid priced-modules">{PLANS.map(plan => <article className="module-card" key={plan.name}>
        <p className="eyebrow">{plan.eyebrow}</p><h2>{plan.name}</h2><p className="module-description">{plan.description}</p>
        <div className="plan-price"><strong>{plan.price}</strong><span>/month</span></div>
        <p className="plan-users">Includes {plan.users} working users</p>
        <ButtonLink href="/#contact" variant={plan.name === "CRM" ? "primary" : "secondary"} className="w-full">Discuss {plan.name} <span aria-hidden="true">↗</span></ButtonLink>
        <div className="module-includes"><h3>INCLUDED IN YOUR MODULE</h3><ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul></div>
        <div className="ai-option"><span className="ai-badge">AI+</span><div><h3>{plan.aiPrice}<span className="price-unit">/month</span></h3><p>{plan.ai}</p><p className="ai-total">{plan.total}/month total with AI+<br />for the included {plan.users} users</p></div></div>
      </article>)}</div>
      <p className="pricing-note">All prices in USD per month, before applicable taxes. Additional users are priced below.<br />Choose one Spend plan. AI+ is optional; your allowance and subscription terms are confirmed before you commit.</p>
      <div className="shared-foundation"><div><span className="mini-label">THE SHARED FOUNDATION</span><h3>One workspace. Connected from the start.</h3></div><p>Company records & contacts <span>·</span> Notes & action items <span>·</span> Roles & permissions</p></div>
    </Container></section>
    <section className="marketing-section" id="team-pricing"><Container>
      <div className="section-heading"><div><p className="eyebrow">ROOM FOR YOUR TEAM</p><h2>Clear prices.<br /><span>As you grow.</span></h2></div><p>Pay for the people working in each module. View-only users are free. AI+ follows the working-user count of the module where it is enabled.</p></div>
      <h3 className="pricing-table-title">CRM additional users · per month</h3>
      <div className="comparison-wrap" role="region" aria-label="CRM additional-user pricing" tabIndex={0}><table className="comparison-table"><caption className="sr-only">Monthly CRM rates for each additional user, by graduated user band</caption><thead><tr><th scope="col">Component</th><th scope="col">Included users</th><th scope="col">Users 6–20</th><th scope="col">Users 21–50</th><th scope="col">Users 51+</th></tr></thead><tbody>{USER_RATES.map(([name, ...rates]) => <tr key={name}><th scope="row">{name}</th>{rates.map((rate, i) => <td key={i}>{rate}</td>)}</tr>)}</tbody></table></div>
      <p className="table-note">CRM Base rates are graduated: each price applies only to users in that band. For example, 20 CRM users cost $950/month for Base, or $1,550/month with AI+.</p>
      <h3 className="pricing-table-title">Spend additional users · per month</h3>
      <div className="comparison-wrap" role="region" aria-label="Spend additional-user pricing" tabIndex={0}><table className="comparison-table"><caption className="sr-only">Monthly Spend prices and additional users</caption><thead><tr><th scope="col">Component</th><th scope="col">Includes 10 users</th><th scope="col">Each user after 10</th></tr></thead><tbody><tr><th scope="row">Spend Simple</th><td>$25/month</td><td>$5/month</td></tr><tr><th scope="row">Spend Enhanced</th><td>$50/month</td><td>$5/month</td></tr><tr><th scope="row">Spend AI+ add-on</th><td>+$50/month</td><td>+$5/month</td></tr></tbody></table></div>
      <p className="table-note">With AI+, each additional Spend user adds $10/month in total: $5 for the module and $5 for AI+. At 20 users, Spend Enhanced is $100/month, or $200/month with AI+.</p>
    </Container></section>
    <section className="marketing-section pricing-compare" id="compare"><Container>
      <div className="section-heading"><div><p className="eyebrow">CHOOSE HOW YOU WORK</p><h2>Start with your module.<br /><span>Bring in AI+.</span></h2></div><p>Keep the workflows your team needs and add AI-assisted capture where it is useful. Your team reviews proposed updates before they become part of your records.</p></div>
      <div className="comparison-wrap" role="region" aria-label="Module and AI feature comparison" tabIndex={0}><table className="comparison-table"><caption className="sr-only">Compare your module with and without AI+</caption><thead><tr><th scope="col">What’s included</th><th scope="col">Your module</th><th scope="col">With AI+ <span>Module price + AI+ add-on</span></th></tr></thead><tbody>{COMPARISON.map(([label, base, ai]) => <tr key={label}><th scope="row">{label}</th><td>{base === "—" ? <span aria-label="Not included">—</span> : base}</td><td>{ai}</td></tr>)}</tbody></table></div>
    </Container></section>
    <section className="marketing-section faq-section"><Container><div className="faq-layout"><div><p className="eyebrow">A FEW MORE DETAILS</p><h2>Good questions.<br /><span>Clear answers.</span></h2></div><div className="faq-list">{FAQS.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></Container></section>
    <section className="marketing-section unlimited-section" id="unlimited" aria-labelledby="unlimited-title"><Container>
      <div className="unlimited-panel">
        <div className="unlimited-intro"><div><p className="eyebrow">THE OPTIONAL WORKSPACE ADD-ON</p><h2 id="unlimited-title">Everyday AI.<br /><span>A predictable price.</span></h2><p className="unlimited-description">Unlimited AI covers standard everyday team use across your enabled AI+ modules. Bring AI into more of your work with a recurring price based on your team.</p></div><div className="unlimited-start"><span className="ai-badge">Unlimited AI</span><p>From</p><div className="plan-price"><strong>+$150</strong><span>/month</span></div><p>Added to your module and AI+ subscriptions.</p></div></div>
        <div className="unlimited-rules"><div><h3>How the price works</h3><p>$30 per working user in your largest AI+ module, with a $150/month minimum for that module. Then add $10 per working user in each other AI+ module.</p><p>“Largest” means the module with the most working users. Someone working in multiple covered modules counts in each.</p></div><div><h3>What Unlimited covers</h3><p>Standard everyday AI use within the features supported by your enabled AI+ modules. Your team’s access permissions and review controls still apply.</p><p>Bulk processing, large backfills, and specialist or custom workloads are quoted separately. We’ll confirm usage scope and fair-use terms before you subscribe.</p></div></div>
        <div className="comparison-wrap" role="region" aria-label="Unlimited AI monthly pricing examples" tabIndex={0}><table className="comparison-table"><caption className="sr-only">Examples of the full monthly subscription with Unlimited AI</caption><thead><tr><th scope="col">Example workspace</th><th scope="col">Modules + AI+</th><th scope="col">Unlimited add-on</th><th scope="col">Monthly total</th></tr></thead><tbody>{UNLIMITED_EXAMPLES.map(([name, ...prices]) => <tr key={name}><th scope="row">{name}</th>{prices.map((price, i) => <td key={i}>{price}</td>)}</tr>)}</tbody></table></div>
        <div className="unlimited-cta"><p>Tell us how your team plans to use AI.<br />We’ll help you choose the right fit.</p><ButtonLink href="/#contact">Discuss Unlimited AI <span aria-hidden="true">↗</span></ButtonLink></div>
      </div>
    </Container></section>
  </main><SiteFooter /></>;
}
