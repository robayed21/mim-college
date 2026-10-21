import type { Metadata } from "next";
import site from "../../../data/site.json";

export const metadata: Metadata = { title: "ফলাফল" };

export default function ResultsPage() {
  const links = [
    {
      label: "অভ্যন্তরীণ পরীক্ষার ফলাফল",
      desc: "বার্ষিক, প্রাক-নির্বাচনী ও টেস্ট পরীক্ষার ফলাফল ছাত্র-ছাত্রী আইডি দিয়ে দেখুন।",
      href: "https://mimgovcollege.edu.bd/results",
    },
    {
      label: "বোর্ড পরীক্ষার ফলাফল",
      desc: "এসএসসি ও এইচএসসি বোর্ড পরীক্ষার ফলাফল কুমিল্লা এডুকেশন বোর্ডে দেখুন।",
      href: "https://comillaboard.portal.gov.bd/",
    },
    {
      label: "ই-রিজাল্ট (শিক্ষা বোর্ড)",
      desc: "সকল বোর্ড পরীক্ষার ফলাফল শিক্ষা মন্ত্রণালয়ের ই-রিজাল্ট সার্ভিসে।",
      href: "http://www.educationboardresults.gov.bd/",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-title text-center">ফলাফল</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="card flex flex-col gap-2 p-6 hover:border-gold"
          >
            <div className="font-bold text-navy">{l.label}</div>
            <div className="text-sm text-gray-600">{l.desc}</div>
            <div className="mt-auto text-sm font-semibold text-gold">
              দেখুন →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
