"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/brand";

/**
 * The only client component on the page.
 *
 * Deliberately short: name, email, company, and what you're trying to fix.
 * Palanae is not self-signup — every workspace is provisioned after a
 * discovery conversation — so this form's job is to start that conversation,
 * not to qualify anyone. Long forms on a first visit cost more leads than the
 * extra fields are worth.
 */

const FIELD =
  "w-full rounded-lg border border-border-strong bg-background px-4 py-3 text-copy text-text-primary placeholder:text-text-muted transition-colors duration-150 ease-standard";
const LABEL = "text-button block text-text-secondary";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "palanae.com" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent-border bg-accent-subtle p-8 text-center"
      >
        <p className="text-subhead text-text-primary">Thanks — that came through.</p>
        <p className="text-copy mx-auto mt-3 max-w-md text-text-secondary">
          You&apos;ll hear back from a person, not an autoresponder. If it&apos;s urgent, email{" "}
          <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      {/* Honeypot. Hidden from sight and from assistive tech, and never
          autofilled — a browser has no reason to fill a field named "website"
          that is off-screen with no label. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={LABEL} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={FIELD} />
        </div>
        <div className="grid gap-2">
          <label className={LABEL} htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
          />
        </div>
        <div className="grid gap-2">
          <label className={LABEL} htmlFor="company">
            Company{" "}
            <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={FIELD}
          />
        </div>
        <div className="grid gap-2">
          <label className={LABEL} htmlFor="employees">
            Roughly how many people?{" "}
            <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="employees"
            name="employees"
            inputMode="numeric"
            className={FIELD}
            placeholder="e.g. 40"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className={LABEL} htmlFor="message">
          What gets written down today — and what doesn&apos;t?
        </label>
        <textarea id="message" name="message" required rows={5} className={FIELD} />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-copy text-status-negative">
          {error}{" "}
          <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            Email us instead
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-button inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-accent-foreground transition-colors duration-150 ease-standard hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Start a conversation"}
        </button>
        <p className="text-copy text-text-muted">
          Or email{" "}
          <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  );
}
