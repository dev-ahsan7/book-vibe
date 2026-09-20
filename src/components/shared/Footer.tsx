import Link from 'next/link';
import React from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const categoryLinks = [
  { label: 'Fiction', href: '/books?category=Fiction' },
  { label: 'Classic', href: '/books?category=Classic' },
  { label: 'Fantasy', href: '/books?category=Fantasy' },
  { label: 'Mystery', href: '/books?category=Mystery' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
];

const linkClass =
  'text-sm text-gray-400 transition-colors duration-300 hover:text-[#23be0a]';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#131313] text-white">
      {/* Soft green glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-[#23be0a]/15 blur-3xl" />

      <div className="container relative mx-auto px-4 pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#23be0a]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </span>
              <span className="text-2xl font-bold tracking-tight">
                Book Vibe
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Discover, track and share the books you love. From timeless
              classics to modern page-turners, find your next great read here.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#23be0a] hover:text-white hover:ring-[#23be0a]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 fill-none stroke-current"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-3">
              {categoryLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@bookvibe.com" className={linkClass}>
                  hello@bookvibe.com
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#23be0a]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#23be0a]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
