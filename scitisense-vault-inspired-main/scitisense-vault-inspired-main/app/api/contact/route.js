export const runtime = "nodejs";

const failure = (message, status) => Response.json({ error: message }, { status });
const services = new Set(["Computer Vision", "IoT & Wearable", "ML & DL", "NLP & LLM", "Generative AI", "Agentic AI", "Medical IT", "Training & Consultancy", "General"]);

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return failure("This request is not allowed.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("Use a JSON request.", 415);
  let data;
  try {
    const raw = await request.text();
    if (raw.length > 16000) return failure("Your message is too long.", 413);
    data = JSON.parse(raw);
  } catch { return failure("Please check the form and try again.", 400); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return failure("Please check the form.", 400);
  if (data.website) return failure("Unable to submit this request.", 400);
  const limits = { name: 120, phone: 40, email: 254, service: 80, message: 5000 };
  const fields = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof data[key] !== "string" || !data[key].trim() || data[key].length > limit) return failure(`Please enter a valid ${key}.`, 400);
    fields[key] = data[key].trim();
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email) || /[\r\n]/.test(fields.email) || !services.has(fields.service)) return failure("Please check your email and service selection.", 400);
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return failure("Message sending is temporarily unavailable. Please email info@scitisensefuturize.in directly.", 503);
  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["info@scitisensefuturize.in"],
        reply_to: fields.email,
        subject: `Website enquiry: ${fields.service}`,
        text: `New website enquiry\n\nName: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nService: ${fields.service}\n\nMessage:\n${fields.message}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const receipt = await result.json();
    if (!result.ok || !receipt.id) return failure("We could not send your message. Please try again or email info@scitisensefuturize.in.", 502);
    return Response.json({ success: true });
  } catch {
    return failure("We could not confirm sending. Please try again or email info@scitisensefuturize.in.", 502);
  }
}
