"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import site from "../../data/site.json";

const links = [
  { href: "/", label: "প্রচ্ছদ" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/teachers", label: "শিক্ষক মণ্ডলী" },
  { href: "/staff", label: "স্টাফ" },
  { href: "/notice", label: "নোটিশ" },
  { href: "/gallery", label: "ছবিঘর" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-navy-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:text-sm">
          <span>EIIN- {site.eiin}</span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-1 hover:text-gold"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1 hover:text-gold sm:flex"
            >
              <EnvelopeIcon className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt="কলেজ লোগো"
                className="h-12 w-12 rounded-full bg-white object-contain p-0.5"
              />
              <div>
                <div className="text-base font-bold leading-tight sm:text-lg">
                  {site.name}
                </div>
                <div className="text-xs text-gold sm:text-sm">
                  {site.location}
                </div>
              </div>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-navy-light hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 hover:bg-navy-light lg:hidden"
              aria-label="মেনু"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <ul className="border-t border-white/10 pb-4 lg:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-navy-light hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
