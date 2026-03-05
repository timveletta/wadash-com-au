import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export default async function handler(request, response) {
  let parsed;
  try {
    parsed = JSON.parse(request.body);
  } catch {
    return response.status(400).json({ body: "Invalid request." });
  }

  const { name, phoneNumber, email, message } = parsed;

  if (!name || !phoneNumber || !message) {
    return response
      .status(400)
      .json({ body: "Name, phone number, and message are required." });
  }

  if (
    name.length > 200 ||
    phoneNumber.length > 50 ||
    message.length > 5000 ||
    (email && email.length > 200)
  ) {
    return response.status(400).json({ body: "Input exceeds maximum length." });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({ body: "Invalid email address." });
  }

  try {
    const { error } = await resend.emails.send({
      from: "WADash Contact <contact@timveletta.com>",
      to: ["admin@wadash.com.au"],
      subject: "WADash.com.au Contact Form Submission",
      html: formatMessage(name, phoneNumber, email, message),
    });

    if (error) {
      console.error(error);
      return response.status(500).json({
        body: "Message failed to send.",
      });
    }

    response.status(200).json({
      body: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      body: "Message failed to send.",
    });
  }
}
