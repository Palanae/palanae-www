import { BRAND, CONTACT_EMAIL } from "@/lib/brand";
import { ContactForm } from "@/components/ContactForm";
import { ProductIllustration } from "@/components/ProductIllustration";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink, Container } from "@/components/ui";

// Claims draw on the existing approved site and MODULE-RAILS-SPEC.md.
// Illustrations use fictional data; no customer outcomes or roadmap promises.
const FEATURES = [
  { number: "01", title: "Relationships, with context.", body: "Keep companies, contacts, notes, and follow-ups together. Open a record and find the context your team has captured.", labels: ["Companies & contacts", "Notes & action items"], type: "relationships" },
  { number: "02", title: "A pipeline with a memory.", body: "Connect opportunities to the conversations behind them. Track what was discussed, what comes next, and how each deal is moving.", labels: ["Opportunities", "Pipeline stages", "Briefs"], type: "pipeline" },
  { number: "03", title: "Spend with a clear next step.", body: "Bring requests, approvals, and allocations into one place, connected to the same company records your team already uses.", labels: ["Spend requests", "Approvals", "Allocations"], type: "spend" },
];
const STEPS = [
  ["Bring the work you already have.", "Start with a meeting transcript, note, or document. +AI features turn the source into proposed updates."],
  ["Review the useful details.", "See the proposed facts alongside their source. Accept what belongs in the record and reject what doesn’t."],
  ["Keep the context connected.", "Approved facts sit beside your team’s entries, carrying their source, confidence, and timestamp."],
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="home-hero" id="top">
          <Container>
            <div className="hero-heading">
              <p className="eyebrow"><span className="accent-dot" /> YOUR BUSINESS. CONNECTED.</p>
              <h1>Good work deserves<br />a <span>better memory.</span></h1>
              <p className="hero-description">Turn meetings, notes, and documents into connected business knowledge. Keep relationships, opportunities, and decisions in view—with your team in control.</p>
              <div className="hero-actions"><ButtonLink href="#contact">Start a conversation <span aria-hidden="true">↗</span></ButtonLink><ButtonLink href="/pricing" variant="secondary">Explore pricing <span aria-hidden="true">→</span></ButtonLink></div>
              <p className="hero-note">{BRAND.name} <span>/{BRAND.pronunciation}/</span> · AI proposes. People approve.</p>
            </div>
            <ProductIllustration />
          </Container>
        </section>
        <div className="principle-strip"><Container><span>One connected workspace</span><span>Your vocabulary & processes</span><span>Source-backed knowledge</span><span>Human-approved AI</span></Container></div>
        <section id="platform" className="marketing-section">
          <Container>
            <div className="section-heading"><div><p className="eyebrow">THE PLATFORM</p><h2>More of the picture.<br /><span>Less piecing it together.</span></h2></div><p>Start with the tools your team needs. Each module works with the same underlying records, so context can travel with the work.</p></div>
            <div className="feature-grid">{FEATURES.map((feature) => <article key={feature.number} className={`feature-panel feature-${feature.type}`}>
              <div className="feature-visual" aria-hidden="true">
                {feature.type === "relationships" ? <><div className="record-avatar">AC</div><div><strong>Acme Company</strong><span>Company record</span></div><div className="record-tags"><span>Contacts</span><span>Notes</span><span>Follow-ups</span></div></> : feature.type === "pipeline" ? <div className="mini-pipeline">{["Discovery", "Proposal", "Decision"].map((stage, i) => <div key={stage}><span>{stage}</span><i /><i style={{ opacity: i === 1 ? 0.35 : 0.7 }} /></div>)}</div> : <div className="mini-spend"><span>Equipment request</span><div><i /> Submitted <b>→</b><i /> In review</div><span className="spend-owner">Next step · Approver review</span></div>}
              </div>
              <span className="mini-label">{feature.number} / {feature.type === "relationships" ? "SHARED FOUNDATION" : feature.type === "pipeline" ? "CRM" : "SPEND"}</span><h3>{feature.title}</h3><p>{feature.body}</p><ul className="feature-tags">{feature.labels.map(label => <li key={label}>{label}</li>)}</ul>
            </article>)}</div>
            <p className="illustration-disclaimer">Product illustrations use fictional records.</p>
          </Container>
        </section>
        <section id="capture" className="marketing-section capture-section">
          <Container>
            <div className="section-heading"><div><p className="eyebrow">FROM CONVERSATION TO CONTEXT</p><h2>The work happened.<br /><span>Make it useful again.</span></h2></div><p>With +AI, the material your team already produces becomes a starting point for structured, searchable knowledge.</p></div>
            <ol className="capture-steps">{STEPS.map(([title, body], i) => <li key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
          </Container>
        </section>
        <section id="trust" className="marketing-section">
          <Container><div className="trust-layout"><div><p className="eyebrow">BUILT FOR TRUST</p><h2>Useful AI.<br /><span>Human judgment.</span></h2><p className="text-lede mt-6 text-text-secondary">Know where a fact came from, who can see it, and what happens next.</p><div className="trust-seal"><span aria-hidden="true">✓</span> AI proposes. People approve.</div></div><div className="trust-list">
            <article><span>01</span><div><h3>You approve the change.</h3><p>AI-generated updates arrive as proposals. A person reviews them before the platform commits the change.</p></div></article>
            <article><span>02</span><div><h3>Every claim carries its source.</h3><p>AI-derived facts keep their source, confidence, and timestamp beside the entries your team makes.</p></div></article>
            <article><span>03</span><div><h3>Your permissions stay in place.</h3><p>AI works under your access permissions. Each company has an isolated workspace, with separation enforced in the application and database.</p></div></article>
          </div></div></Container>
        </section>
        <section id="model" className="marketing-section fit-section"><Container><div className="section-heading"><div><p className="eyebrow">FITS THE WAY YOU WORK</p><h2>Your language.<br /><span>Your starting point.</span></h2></div><p>Configure your vocabulary, pipeline stages, and roles. Begin with a discovery conversation and a workspace set up for your business.</p></div><div className="fit-grid"><article><h3>One foundation across modules.</h3><p>People, events, commitments, money, things, and work form a shared record. Each module brings the relevant parts into view.</p></article><article id="boundaries"><h3>Keep your accounting where it belongs.</h3><p>Palanae is a business knowledge and operations platform. Your payroll and general ledger remain with the systems that own them.</p></article><article className="pricing-callout"><h3>Build your starting point.</h3><p>Choose your modules, then decide where +AI makes sense.</p><a className="link-accent" href="/pricing">Explore pricing <span aria-hidden="true">↗</span></a></article></div></Container></section>
        <section id="contact" className="marketing-section contact-section"><Container><div className="contact-layout"><div><p className="eyebrow">LET’S TALK</p><h2>What could your<br />business <span>remember?</span></h2><p className="text-lede mt-6 text-text-secondary">Tell us how your team works today. We’ll explore the right modules, the right fit, and a clear starting point.</p><a className="link-accent mt-6 inline-block" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div><div className="contact-panel"><ContactForm /></div></div></Container></section>
      </main>
      <SiteFooter />
    </>
  );
}
