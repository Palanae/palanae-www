/**
 * Palanae — inquiry → Google Sheet sink + email alert.
 *
 * Deploy this as a Google Apps Script Web App. It receives one inquiry per POST
 * from the site's /api/inquiry route, appends it as a row in a Google Sheet in
 * your Drive, and emails a notification to NOTIFY_EMAIL.
 *
 * Adapted from the straingebs.com script, which has been running verified since
 * 2026-08-12. Deliberately a SEPARATE script, Sheet, and env var: a Palanae
 * inquiry is a different business with a different follow-up, and the consulting
 * pipeline is working lead infrastructure this has no business reaching into.
 *
 * SETUP
 *   1. Signed in as the Sheet owner (info@palanae.com is a Group, no login):
 *      drive.google.com → New → Google Sheets → name it
 *      "Palanae — Inbound Inquiries".
 *   2. Extensions → Apps Script. Delete the stub, paste this file, Save.
 *   3. 🔴 Run testAlert() ONCE from the editor (function picker → testAlert →
 *      Run) and approve the consent prompt. See the note on that function —
 *      skipping this produces silent success with no email.
 *   4. Deploy → New deployment → type "Web app":
 *        - Execute as:      Me
 *        - Who has access:  Anyone
 *      Copy the Web app URL (it ends in /exec).
 *   5. In Vercel, on the palanae-www project, set
 *      PALANAE_INQUIRY_WEBHOOK_URL to that URL, then redeploy.
 *
 * 🔴 UPDATING an already-deployed script: paste the new code, Save, then
 *   Deploy → Manage deployments → ✏️ edit → Version: "New version" → Deploy.
 *   The /exec URL stays the same, so Vercel needs no change — but WITHOUT the
 *   new-version step the live deployment keeps running the OLD code. This is
 *   the single easiest thing to get wrong here, precisely because nothing
 *   visibly fails.
 *
 * Payload shape (sent by app/api/inquiry/route.ts):
 *   { "fields": ["submittedAt", ...], "record": { "submittedAt": "...", ... } }
 *
 * The column order is owned by FIELDS in app/api/inquiry/route.ts and arrives
 * in the payload — this script never hardcodes it. Adding a field there and to
 * the form is enough; this file does not need to change.
 */

var NOTIFY_EMAIL = "info@palanae.com";

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var fields = payload.fields;
    var record = payload.record;

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Write the header row once, in the canonical field order.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(fields);
      sheet.getRange(1, 1, 1, fields.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append one row in the same column order as the header.
    var row = fields.map(function (f) {
      return record[f] || "";
    });
    sheet.appendRow(row);

    // Email alert — isolated so a mail hiccup can never lose the lead: the row
    // above is already saved, and the site still gets ok. A failure here shows
    // up in the Apps Script executions view instead of costing an inquiry.
    try {
      sendAlert(fields, record);
    } catch (mailErr) {
      console.error("inquiry saved but alert email failed: " + mailErr);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 🔴 Run this ONCE from the editor after pasting the code (function picker →
 * testAlert → Run).
 *
 * It triggers the OAuth consent prompt for the send-mail scope, which a
 * deployed web app can NEVER ask for on its own. Skip it and every inquiry
 * still saves to the Sheet while the alert silently never sends — which is
 * exactly how it failed on straingebs.com and cost a debugging session.
 *
 * You should receive a test email at NOTIFY_EMAIL.
 */
function testAlert() {
  var fields = ["submittedAt", "name", "email", "company", "role", "employees", "message", "source"];
  var record = {
    submittedAt: new Date().toISOString(),
    name: "Test Alert",
    email: "test@example.com",
    company: "Example Co",
    role: "",
    employees: "40",
    message: "If you can read this, Palanae inquiry alerts are working.",
    source: "testAlert()",
  };
  sendAlert(fields, record);
}

function sendAlert(fields, record) {
  var who = (record.name || "").trim() || "Unknown";
  var subject = "New Palanae inquiry — " + who + (record.company ? " (" + record.company + ")" : "");

  var lines = fields.map(function (f) {
    return f + ": " + (record[f] || "—");
  });
  var body =
    "A new inquiry just came in through the palanae.com contact form.\n\n" +
    lines.join("\n") +
    "\n\nReply to this email to respond to the lead directly.\n" +
    'Full history: the "Palanae — Inbound Inquiries" Google Sheet.';

  // replyTo is what makes the alert actionable: hitting reply in Gmail goes to
  // the lead, not back to the notification address.
  var options = { name: "Palanae website" };
  if (record.email) options.replyTo = record.email;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);
}
