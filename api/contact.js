import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
	to: 'timothy.veletta@gmail.com', // Change to your recipient
	from: 'contact@em3617.timveletta.com', // Change to your verified sender
	subject: 'WADash.com.au Contact Form Submission',
};

function formatMessage(name, phoneNumber, postCode, subject, message) {
	return `
	<h1>WADash.com.au Contact Form Submission</h1>
	<p><strong>Name:</strong> ${name}</p>
	<p><strong>Phone Number:</strong> ${phoneNumber}</p>
	<p><strong>Post Code:</strong> ${postCode}</p>
	<p><strong>Subject:</strong> ${subject || 'None'}</p>
	<p><strong>Message:</strong> ${message}</p>
  `;
}

export default async function handler(request, response) {
	const { name, subject, phoneNumber, postCode, message } = JSON.parse(
		request.body
	);
	try {
		const result = await mail.send({
			...msg,
			html: formatMessage(name, phoneNumber, postCode, subject, message),
		});
		response.status(result[0].statusCode).json({
			body: 'Message sent successfully!',
		});
	} catch (error) {
		response.status(500).json({
			body: 'Message failed to send.',
		});
	}
}
