import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatMessage(name, phoneNumber, email, message) {
  return `
	<h1>WADash.com.au Contact Form Submission</h1>
	<p><strong>Name:</strong> ${name}</p>
	<p><strong>Phone Number:</strong> ${phoneNumber}</p>
	<p><strong>Email Address:</strong> ${email || "None"}</p>
	<p><strong>Message:</strong> ${message}</p>
  `;
}

export default async function handler(request, response) {
  const { name, phoneNumber, email, message } = JSON.parse(request.body);
  try {
    const { data, error } = await resend.emails.send({
      from: "WADash Contact <contact@velettaliwedding.com>",
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
