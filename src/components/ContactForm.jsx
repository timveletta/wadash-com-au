import React from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, phoneNumber, email, message } = event.target;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          phoneNumber: phoneNumber.value,
          email: email.value,
          message: message.value,
        }),
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch (e) {
      setFormError(true);
    }
  };

  if (formError)
    return (
      <p className="text-secondary font-bold tracking-wide text-2xl px-10 text-center">
        Something went wrong sending your message. Please call us on{" "}
        <a className="underline" href="tel:+61402246252">
          0402 246 252
        </a>
        .
      </p>
    );

  if (formSubmitted)
    return (
      <p className="text-secondary font-bold tracking-wide text-2xl px-10 text-center">
        Thank you for getting in contact, we will get back to you at the
        earliest possible convenience.
      </p>
    );

  return (
    <form className="flex flex-col gap-4" name="contact" onSubmit={onSubmit}>
      <div>
        <label className="font-bold text-secondary" htmlFor="name">
          Your Name
        </label>
        <input
          aria-label="name"
          id="name"
          type="text"
          name="name"
          required
          className="bg-gray-100 appearance-none rounded-md w-full py-2 px-3 text-tertiary focus:outline-none focus:ring-2 focus:ring-primary mt-1"
        />
      </div>
      <div>
        <label className="font-bold text-secondary" htmlFor="email">
          Email Address
        </label>
        <input
          aria-label="email"
          id="email"
          type="email"
          name="email"
          required
          className="bg-gray-100 appearance-none rounded-md w-full py-2 px-3 text-tertiary focus:outline-none focus:ring-2 focus:ring-primary mt-1"
        />
      </div>

      <div>
        <label className="font-bold text-secondary" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          aria-label="phoneNumber"
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          required
          className="bg-gray-100 appearance-none rounded-md w-full py-2 px-3 text-tertiary focus:outline-none focus:ring-2 focus:ring-primary mt-1"
        />
      </div>

      <div>
        <label className="font-bold text-secondary" htmlFor="message">
          Message
        </label>
        <textarea
          aria-label="message"
          id="message"
          required
          name="message"
          className="bg-gray-100 appearance-none rounded-md w-full py-2 px-3 text-tertiary focus:outline-none focus:ring-2 focus:ring-primary mt-1 h-48"
          placeholder="A descriptive message helps us diagnose the issue quicker so we can give you more information when we contact you. Don't forget to include brands, model names or anything you think might be relevant."
        />
      </div>
      <div className="flex items-baseline">
        <button
          type="submit"
          className="bg-primary-dark text-white font-bold px-4 py-2 rounded-lg hover:bg-primary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
