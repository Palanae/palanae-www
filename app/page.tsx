import { BRAND, CONTACT_EMAIL } from "@/lib/brand";
import { ContactForm } from "@/components/ContactForm";
import { ProposalMock } from "@/components/ProposalMock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink, Card, Container, Section } from "@/components/ui";

/**
 * www.palanae.com — the single scrolling brand page.
 *
 * COPY PROVENANCE: every product claim below is drawn from the approved
 * knowledge base (`verticals/StrAinge-AI/palanae-kb/`, v1.1 2026-08-20) —
 * chapters 1, 3, 4, 5, and 8. It is the one source that has already been
 * reviewed for accuracy, so the page tracks it rather than inventing
 * marketing language.
 *
 * THREE HARD GUARDRAILS, all upheld here:
 *   1. No customer or prospect is named — nor any anonymized stand-in
 *      specific enough to identify one. Naming an industry and a country
 *      together is usually already too specific.
 *   2. No delivered-outcome claim. Nothing on this page says a client got a
 *      result, because none has yet. Every claim is about how the software is
 *      built, which is demonstrable today.
 *   3. No counts or metrics. The case study's verified figures (2,067 tests,
 *      29/29 RLS tables, 53 migrations) are deliberately absent: they are
 *      true of a repo on a given date and go stale silently on a page nobody
 *      re-verifies. Architecture claims don't rot the same way.
 *
 * ALSO DELIBERATELY OMITTED — the knowledge base's "never audio, text
 * transcripts only" commitment (KB §8.3). It reads well and would strengthen
 * the trust section, but the same claim was cut from our published case study
 * as unverifiable against the code. Reinstate it here only with a citation,
 * not because it sounds good.
 */

const CAPTURE_STEPS = [
  {
    n: "01",
    title: "Paste what already happened",
    body: "A meeting transcript, a note, a document. No new habit to build, no form for anyone to fill in, no process for your team to adopt first.",
  },
  {
    n: "02",
    title: "Read a proposal, not a summary",
    body: "Palanae proposes structured facts — who decides, what was promised, when it lands — and cites the exact line each one came from. Click a claim, land on its source.",
  },
  {
    n: "03",
    title: "Approve, and the record grows",
    body: "You accept or reject. Approved facts sit beside your team's own entries rather than overwriting them, each carrying its source, confidence, and timestamp.",
  },
];

const NOUNS = [
  { noun: "Parties", covers: "Anyone you deal with", eg: "Customers, prospects, suppliers, employees" },
  { noun: "Events", covers: "Things that happened", eg: "Meetings, calls, emails, deliveries, notes" },
  { noun: "Commitments", covers: "A promise with terms", eg: "Quotes, contracts, purchase orders, deals" },
  { noun: "Money", covers: "Value moving, or scheduled to", eg: "Invoices, payments, costs, recurring revenue" },
  { noun: "Things", covers: "The tracked unit", eg: "Products, assets, equipment, inventory" },
  { noun: "Work", covers: "Effort toward an outcome", eg: "Tasks, jobs, production steps, projects" },
];

const TRUST = [
  {
    title: "AI proposes. People commit.",
    body: "No agent in Palanae writes to your data. Ever. Every AI action lands in a review queue as a proposal, and a person approves it before the platform executes the change. Agent code does not receive the platform's write functions at all — its only possible output is a proposal. Automated checks make the rule impossible to break by accident, even under deadline pressure. That is a materially different guarantee from a vendor promising its AI usually asks first.",
  },
  {
    title: "Every claim shows its work.",
    body: "An AI-derived value carries its source, a confidence level, a timestamp, and the run that produced it — and sits beside the human-entered value rather than replacing it. Trust is never requested. It is demonstrated on every field.",
  },
  {
    title: "An agent acts as you, never above you.",
    body: "When AI works on your behalf it runs under your identity and your permissions, never a privileged system account. Whatever you cannot see, an agent working for you cannot see either — so isolation and role limits apply to it automatically, with nothing extra to configure.",
  },
];

const BOUNDARIES = [
  {
    title: "Not your payroll or general ledger",
    body: "Permanently, and by design. Palanae integrates with the systems that own those records and owns the intelligence layered on top of them. Your accounting stays exactly where it is.",
  },
  {
    title: "Not a workflow tool you have to feed",
    body: "If capture depends on your team remembering to log things, it fails in week three. Palanae reads what was already produced instead of asking anyone to produce more.",
  },
  {
    title: "No new tables for new questions",
    body: "The six nouns are fixed. Custom fields, industry attributes, and the long tail of “can it also track…?” land in the Facts layer as typed, provenance-carrying data. The schema stays small; the data stays open-ended.",
  },
  {
    title: "Not self-signup",
    body: "Every workspace is provisioned after a discovery conversation, so nobody starts in an anonymous empty shell. Fitting it to your business — your vocabulary, your pipeline — is then self-guided inside the app, in minutes rather than meetings.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="pt-20 pb-8 sm:pt-28">
          <Container>
            <div className="max-w-3xl">
              {/*
                * NOT an <Eyebrow>: that role uppercases, and uppercasing
                * "pal-uh-NAY" destroys the one thing the pronunciation is
                * here to convey — which syllable carries the stress. The
                * whole reason it appears on the page is that the final "-ae"
                * has four plausible English readings.
                */}
              <p className="flex flex-wrap items-baseline gap-3">
                <span className="text-overline text-accent">{BRAND.name}</span>
                <span className="font-mono-figures text-[12px] text-text-muted">
                  {BRAND.pronunciation}
                </span>
              </p>
              <h1 className="text-hero mt-5 text-text-primary text-balance">
                A repository that fills itself.
              </h1>
              <p className="text-lede mt-7 max-w-2xl text-text-secondary">
                Palanae is a business-wide data platform that captures the work your team is already
                doing — meetings, notes, documents, deals — and turns it into structured, searchable
                knowledge your whole company can rely on.
              </p>
              <p className="text-lede mt-4 max-w-2xl text-text-secondary">
                It reads as a <span className="text-text-primary">place</span> rather than a tool,
                and that is deliberate. Not a workflow app waiting to be fed — a library that fills
                from work you were already doing.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ButtonLink href="#contact">Start a conversation</ButtonLink>
                <ButtonLink href="#capture" variant="secondary">
                  See how it works
                </ButtonLink>
              </div>
            </div>

            <ProposalMock />
          </Container>
        </section>

        {/* ---------- Capture ---------- */}
        <Section
          id="capture"
          eyebrow="Capture first"
          title="The best system of record is the one nobody has to remember to use."
          lede="Every business system asks the same thing: change how your team works, then you'll get value. Palanae inverts it. The flagship interaction takes something that already exists and turns it into a record — no forms died empty."
        >
          <ol className="grid gap-5 md:grid-cols-3">
            {CAPTURE_STEPS.map((s) => (
              <li key={s.n}>
                <Card className="h-full">
                  <span className="font-mono-figures text-copy text-accent">{s.n}</span>
                  <h3 className="text-subhead mt-4 text-text-primary">{s.title}</h3>
                  <p className="text-copy mt-3 text-text-secondary">{s.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------- The model ---------- */}
        <Section
          id="model"
          eyebrow="How it's built"
          title="Six nouns. Modules are views over them."
          lede="Ask what software modules every business needs and you get a hundred answers. Ask what nouns every business has, and the answer is short and stable."
        >
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {NOUNS.map((n) => (
              <div key={n.noun} className="bg-surface p-6">
                <h3 className="text-subhead text-accent">{n.noun}</h3>
                <p className="text-copy mt-2 text-text-primary">{n.covers}</p>
                <p className="text-copy mt-1 text-text-muted">{n.eg}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="text-subhead text-text-primary">A module is a lens, not a product</h3>
              <p className="text-copy mt-3 text-text-secondary">
                Relationship and pipeline management is Parties + Commitments + Events. Spend
                approvals are Money + Work + Parties. Because the nouns already exist, each new
                module costs a fraction of the one before it — which is how a platform grows instead
                of sprawling.
              </p>
            </Card>
            <Card>
              <h3 className="text-subhead text-text-primary">Configuration, not customization</h3>
              <p className="text-copy mt-3 text-text-secondary">
                Every tenant runs the same core software. If your business calls organizations
                &ldquo;Companies&rdquo; and deals &ldquo;Projects,&rdquo; every screen, menu, and
                report says Companies and Projects. Your pipeline stages, your roles, your modules —
                all configuration data. No user-facing noun is hardcoded.
              </p>
            </Card>
          </div>
        </Section>

        {/* ---------- Trust ---------- */}
        <Section
          id="trust"
          eyebrow="The trust model"
          title="AI is threaded through it — and structurally prevented from acting alone."
          lede="A guarantee that depends on good intentions is not a guarantee. These three hold because of how the software is built, not because of what a policy document says."
        >
          <div className="grid gap-5">
            {TRUST.map((t) => (
              <Card key={t.title}>
                <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                  <h3 className="text-subhead text-text-primary text-balance">{t.title}</h3>
                  <p className="text-copy text-text-secondary">{t.body}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-accent-border bg-accent-subtle p-6">
            <h3 className="text-subhead text-text-primary">Isolation, enforced twice</h3>
            <p className="text-copy mt-3 max-w-3xl text-text-secondary">
              Every client workspace is isolated at the database layer with row-level security{" "}
              <em>and</em> at the application layer with tenant-scoped access wrappers. The system is
              fail-loud: an unscoped query errors rather than quietly returning data. Isolation has
              been part of the schema since the first migration — it is the one property that is
              catastrophic to retrofit, so it was never deferred.
            </p>
          </div>
        </Section>

        {/* ---------- Boundaries ---------- */}
        <Section
          id="boundaries"
          eyebrow="Boundaries"
          title="What Palanae will never be."
          lede="The interesting decisions in a business system are the ones about what it refuses to do. These are permanent, not a roadmap gap."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {BOUNDARIES.map((b) => (
              <Card key={b.title} className="h-full">
                <h3 className="text-subhead text-text-primary">{b.title}</h3>
                <p className="text-copy mt-3 text-text-secondary">{b.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* ---------- Contact ---------- */}
        <Section
          id="contact"
          eyebrow="Talk to us"
          title="Start with a conversation about how your business actually runs."
          lede={
            <>
              What you sell, how a deal moves, who talks to customers, what gets written down today —
              and which systems must stay exactly where they are. That conversation is where fit gets
              decided, in both directions. Prefer email? Write to{" "}
              <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </>
          }
        >
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
