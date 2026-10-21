import type { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import site from "../../../data/site.json";

export const metadata: Metadata = { title: "যোগাযোগ" };

export default function ContactPage() {
  const items = [
    {
      icon: BuildingOffice2Icon,
      label: "ঠিকানা",
      value: site.location,
      href: "https://www.google.com/maps/search/Raghunathpur+Titas+Cumilla",
    },
    {
      icon: PhoneIcon,
      label: "যোগাযোগ",
      value: site.phone,
      href: `tel:${site.phone}`,
    },
    {
      icon: EnvelopeIcon,
      label: "ইমেইল",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPinIcon,
      label: "EIIN",
      value: site.eiin,
      href: undefined,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-title text-center">যোগাযোগ</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="card flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-navy/5">
              <item.icon className="h-6 w-6 text-navy" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-semibold text-navy hover:text-gold"
                >
                  {item.value}
                </a>
              ) : (
                <div className="font-semibold text-navy">{item.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-8 p-6 text-center text-gray-700">
        <h2 className="mb-2 font-bold text-navy">কলেজে আসার জন্য</h2>
        <p className="mb-4 text-sm">
          যেকোনো প্রয়োজনীয় তথ্যের জন্য কলেজ অফিস চলাকালীন সময়ে (সকাল ৯টা – বিকেল
          ৪টা) যোগাযোগ করুন।
        </p>
        <a
          href="https://www.google.com/maps/search/Raghunathpur+Titas+Cumilla"
          target="_blank"
          rel="noreferrer"
          className="btn-gold"
        >
          গুগল ম্যাপে দেখুন
        </a>
      </div>
    </div>
  );
}
