/** Fictional, deliberately labelled illustration; never uses tenant data. */
export function ProductIllustration() {
  return (
    <figure className="product-illustration">
      <div className="illustration-top"><span className="illustration-dots" aria-hidden="true"><i /><i /><i /></span><span>PALANAE / YOUR WORKSPACE</span><span className="live-dot">Connected knowledge</span></div>
      <div className="illustration-body">
        <div className="source-note"><span className="mini-label">01 / CAPTURE</span><p className="source-title">The conversation</p><span className="note-type">Meeting transcript</span><blockquote>“Let’s send the revised proposal on Friday. <mark>Dana will handle budget approval.</mark> I’ll confirm the delivery date.”</blockquote><div className="source-bottom"><span>Source attached</span><span aria-hidden="true">↗</span></div></div>
        <div className="flow-connector" aria-hidden="true">→</div>
        <div className="review-note"><div className="review-heading"><span className="mini-label">02 / REVIEW</span><span className="review-badge">Your approval</span></div><p className="source-title">The useful details</p><dl><div><dt>Decision maker</dt><dd>Dana <span>↗</span></dd></div><div><dt>Next action</dt><dd>Send revised proposal</dd></div><div><dt>Due</dt><dd>Friday</dd></div></dl><div className="illustrated-approval"><span aria-hidden="true">✓</span> Approve proposed facts</div><p className="review-footnote">You decide what becomes a record.</p></div>
      </div>
      <div className="knowledge-strip"><span className="mini-label">03 / CONNECT</span><span>Relationships</span><span>Pipeline</span><span>Knowledge</span><span className="knowledge-caption">One shared record <span aria-hidden="true">↗</span></span></div>
      <figcaption>Illustrative workflow with fictional data. AI features depend on the module and tier.</figcaption>
    </figure>
  );
}
