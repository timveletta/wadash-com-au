import React from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, phoneNumber, postCode, subject, message } = event.target;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          phoneNumber: phoneNumber.value,
          postCode: postCode.value,
          subject: subject.value,
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
    <form
      className="grid grid-cols-1 lg:grid-cols-3 auto-rows-min gap-4 justify-start"
      name="contact"
      onSubmit={onSubmit}
    >
      <div>
        <label className="font-bold text-secondary" htmlFor="name">
          Name
        </label>
        <input
          aria-label="name"
          id="name"
          type="text"
          name="name"
          required
          className="shadow appearance-none border border-secondary/60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"
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
          className="shadow appearance-none border border-secondary/60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"
        />
      </div>
      <div>
        <label className="font-bold text-secondary" htmlFor="postCode">
          Post Code
        </label>
        <input
          aria-label="postCode"
          id="postCode"
          type="text"
          name="postCode"
          placeholder="6000"
          required
          className="shadow appearance-none border border-secondary/60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"
        />
      </div>
      <div className="lg:col-span-3">
        <label className="font-bold text-secondary" htmlFor="subject">
          Subject
        </label>
        <input
          aria-label="subject"
          id="subject"
          type="text"
          name="subject"
          required
          className="shadow appearance-none border border-secondary/60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"
        />
      </div>
      <div className="lg:col-span-3">
        <label className="font-bold text-secondary" htmlFor="message">
          Message
        </label>
        <textarea
          aria-label="message"
          id="message"
          required
          name="message"
          className="shadow appearance-none border border-secondary/60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline leading-relaxed mt-1 h-48"
          placeholder="A descriptive message helps us diagnose the issue quicker so we can give you more information when we contact you. Don't forget to include brands, model names or anything you think might be relevant."
        />
      </div>
      <div className="flex items-baseline">
        <button
          type="submit"
          className="bg-primary text-white font-bold px-6 py-4 rounded hover:bg-primary/75"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
