/**
 * The one visual on the page: the core interaction, drawn rather than
 * screenshotted.
 *
 * Why drawn — a real screenshot of the product would either show fixture data
 * (which invites "is this real?") or a tenant's actual data (which it must
 * never do). This is markup built from the same tokens the product paints
 * with, and it is captioned as an illustration so nobody mistakes it for
 * evidence of a shipped screen.
 *
 * The content is generic on purpose: no customer, no company, no figure that
 * implies a delivered result.
 */
export function ProposalMock() {
  return (
    <figure className="mt-14">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        {/* Source pane — the raw material a claim came from. */}
        <div className="border-b border-border px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-overline text-text-muted">Source</span>
            <span className="font-mono-figures text-[11px] text-text-muted">
              transcript · line 48
            </span>
          </div>
          <p className="text-copy mt-3 text-text-secondary">
            <span className="text-text-muted">…</span> we&apos;d need the second unit on site before
            the shutdown window, so{" "}
            <mark className="rounded-sm bg-accent-border px-1 text-text-primary underline decoration-accent decoration-1 underline-offset-4">
              call it end of Q1, and the budget sign-off sits with Dana.
            </mark>{" "}
            <span className="text-text-muted">…</span>
          </p>
        </div>

        {/* Proposal pane — what the AI is asking a human to approve. */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-overline text-text-muted">Proposed</span>
            <span className="rounded-sm bg-status-info-bg px-2 py-1 font-mono-figures text-[11px] text-status-info">
              awaiting review
            </span>
          </div>

          <dl className="mt-4 grid gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3">
              <dt className="text-copy text-text-muted">Decision maker</dt>
              <dd className="text-copy text-text-primary">Dana — budget approval</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt className="text-copy text-text-muted">Target date</dt>
              <dd className="font-mono-figures text-copy text-text-primary">Q1 close</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
            {/*
             * Non-interactive by design: these are pictures of controls, not
             * controls. Rendering real <button>s here would put two focusable
             * dead ends in the tab order of a marketing page.
             */}
            <span className="text-button rounded-lg bg-accent px-4 py-2 text-accent-foreground">
              Approve
            </span>
            <span className="text-button rounded-lg border border-border-strong px-4 py-2 text-text-secondary">
              Reject
            </span>
            <span className="text-copy ml-auto text-text-muted">
              Nothing changes until someone here says so.
            </span>
          </div>
        </div>
      </div>

      <figcaption className="text-copy mt-3 text-text-muted">
        Illustration of the review queue — not a screenshot, and not anyone&apos;s data.
      </figcaption>
    </figure>
  );
}
