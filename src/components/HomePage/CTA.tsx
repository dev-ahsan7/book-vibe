import Link from 'next/link';
import React from 'react';

const stats = [
  { value: '10K+', label: 'Books' },
  { value: '50K+', label: 'Readers' },
  { value: '4.8', label: 'Avg. rating' },
];

const CTA = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="relative isolate overflow-hidden rounded-4xl bg-[#131313] px-6 py-14 text-center sm:px-12 sm:py-20 lg:px-20">
        {/* Glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#23be0a]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 -z-10 h-80 w-80 rounded-full bg-[#23be0a]/20 blur-3xl" />

        {/* Subtle dot pattern */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)]` [bg-size:22px_22px]"
        />

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#23be0a] ring-1 ring-white/10">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#23be0a]" />
          Start reading today
        </span>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your next favorite book is{' '}
          <span className="bg-linear-to-r from-[#23be0a] to-emerald-300 bg-clip-text text-transparent">
            waiting for you
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Browse timeless classics, gripping mysteries and epic fantasies. Save
          what you love and keep track of every page you read.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/books"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#23be0a] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(35,190,10,0.35)] transition-all duration-300 hover:bg-[#1da808] hover:shadow-[0_14px_40px_rgba(35,190,10,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23be0a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313] sm:w-auto"
          >
            Browse Books
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-full bg-white/5 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 transition-all duration-300 hover:bg-white/10 hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CTA;
