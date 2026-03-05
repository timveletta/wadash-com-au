import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Mary M.",
    date: "February 2026",
    text: "Damien is a very professional and experienced plumber who provided a timely response to meet our plumbing issues. Our communications with WA Dash Plumbing and Gas have always been responded to quickly. I would thoroughly recommend this company and will certainly contact them again as need arises.",
  },
  {
    name: "Rebecca W.",
    date: "January 2026",
    text: "Damien and his team are always reliable and professional. Wouldn’t use any other plumbing service as we are always happy with the great work they provide.",
  },
  {
    name: "Anglade P.",
    date: "December 2025",
    text: `Wa Dash Plumbing is simply outstanding. Damian and his team are truly state of the art in their field.

They have designed and installed a complete bathroom and toilet in my clinic, unblocked major house pipes, and fixed multiple leaks across different taps and areas. In one word: they take care of everything.

I trust them so much that I never even ask for a quote — I just call and know the job will be done properly. They are extremely reliable, always on time, professional, and very friendly.

If you want peace of mind and top-quality workmanship, Wa Dash Plumbing is the team to call. Highly recommended.`,
  },
  {
    name: "Zoe N.",
    date: "December 2025",
    text: "Damien and the team at WA Dash are honest, responsive, reliable and professional. We have used them for multiple small and larger jobs over the last 3 years including a bathroom, toilet and laundry renovation, kitchen tap replacements, dishwasher installation and hot water system repair (including a short notice temporary fix to see us through the weekend). Highly recommend.",
  },
  {
    name: "WA Building Inspections Admin",
    date: "December 2025",
    text: "As a building Inspectors, we see loads of plumbing jobs, some of them terrible, having worked with WA Dash Plumbing and Gas, we must say with confidence, that the team was prompt, professional and were reasonably priced - Recommend - Keep up the great work boys!",
  },
  {
    name: "Paul L.",
    date: "May 2025",
    text: `Really appreciated the advice and recommendations for our whole house water filter system. Install was quick and easy, with excellent communication throughout. 
    
    All at a pretty decent price too, would happily use these guys again.`,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [paused]);

  const go = (index) => {
    setCurrent(index);
    setPaused(true);
  };

  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  const review = reviews[current];

  return (
    <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
      <div className="relative w-full bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 min-h-48 flex flex-col justify-between">
        <div className="text-tertiary leading-relaxed text-lg flex flex-col gap-3">
          {review.text
            .split("\n")
            .filter((l) => l.trim())
            .map((line, i, arr) => (
              <p key={i}>
                {i === 0 && "\u201C"}
                {line}
                {i === arr.length - 1 && "\u201D"}
              </p>
            ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {review.name[0]}
          </div>
          <div>
            <p className="font-semibold text-tertiary">{review.name}</p>
            <p className="text-sm text-secondary">{review.date}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="size-9 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-gray-100 transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6 h-2.5" : "bg-gray-300 size-2.5"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="size-9 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-gray-100 transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
