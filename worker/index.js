import { Resend } from "resend";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatMessage(name, phoneNumber, email, message) {
  return `
    <h1>WADash.com.au Contact Form Submission</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone Number:</strong> ${escapeHtml(phoneNumber)}</p>
    <p><strong>Email Address:</strong> ${email ? escapeHtml(email) : "None"}</p>
    <p><strong>Message:</strong> ${escapeHtml(message)}</p>
  `;
}

function json(body, status = 200) {
  return Response.json({ body }, { status });
}

async function handleContact(request, env) {
  if (request.method !== "POST") {
    return json("Method not allowed.", 405);
  }

  let parsed;
  try {
    parsed = await request.json();
  } catch {
    return json("Invalid request.", 400);
  }

  const { name, phoneNumber, email, message } = parsed;

  if (!name || !phoneNumber || !message) {
    return json("Name, phone number, and message are required.", 400);
  }

  if (
    name.length > 200 ||
    phoneNumber.length > 50 ||
    message.length > 5000 ||
    (email && email.length > 200)
  ) {
    return json("Input exceeds maximum length.", 400);
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json("Invalid email address.", 400);
  }

  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return json("Message failed to send.", 500);
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "WADash Contact <contact@timveletta.com>",
      to: ["admin@wadash.com.au"],
      subject: "WADash.com.au Contact Form Submission",
      html: formatMessage(name, phoneNumber, email, message),
      ...(email && { reply_to: email }),
    });

    if (error) {
      console.error(error);
      return json("Message failed to send.", 500);
    }

    return json("Message sent successfully!");
  } catch (error) {
    console.error(error);
    return json("Message failed to send.", 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    return new Response(null, { status: 404 });
  },
};
