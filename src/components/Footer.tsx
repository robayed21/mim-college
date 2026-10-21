import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import site from "../../data/site.json";

const govLinks = [
  { label: "ফরমস পোর্টাল", href: "https://www.forms.gov.bd/" },
  { label: "শিক্ষা মন্ত্রনালয়", href: "https://www.moedu.gov.bd/" },
  {
    label: "কুমিল্লা এডুকেশন বোর্ড",
    href: "https://comillaboard.portal.gov.bd/",
  },
  { label: "বাংলাদেশ জাতীয় তথ্য বাতায়ন", href: "https://bangladesh.gov.bd/" },
  { label: "সেবাকুঞ্জ", href: "https://services.portal.gov.bd/" },
  { label: "বিটিইবি", href: "https://techedu.gov.bd/" },
  { label: "ব্যানবেইস", href: "https://banbeis.gov.bd/" },
  { label: "শিক্ষক বাতায়ন", href: "https://www.teachers.gov.bd/" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.logo}
              alt="লোগো"
              className="h-12 w-12 rounded-full bg-white object-contain p-0.5"
            />
            <div>
              <div className="font-bold leading-tight">{site.name}</div>
              <div className="text-xs text-gold">EIIN- {site.eiin}</div>
            </div>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {site.about}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-gold">যোগাযোগ</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-gold" />
              {site.location}
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 flex-none text-gold" />
              {site.phone}
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 flex-none text-gold" />
              {site.email}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-gold">গুরুত্বপূর্ণ লিঙ্ক</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-white/80">
            {govLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-gold">
                  » {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        Copyright © 2026 {site.nameEn} | Powered By AR Technologies Ltd.
      </div>
    </footer>
  );
}
