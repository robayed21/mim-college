import type { Metadata } from "next";

export const metadata: Metadata = { title: "ভর্তি" };

export default function AdmissionPage() {
  const steps = [
    "অনলাইনে বা কলেজ অফিসে আবেদন ফরম সংগ্রহ করুন।",
    "প্রয়োজনীয় কাগজপত্র (SSC/সমমান পাসের সার্টিফিকেট ও মার্কশিট কপি, পাসপোর্ট সাইজ ছবি) জমা দিন।",
    "নির্ধারিত ফি জমা দিয়ে আবেদন নিশ্চিত করুন।",
    "ভর্তি তালিকা প্রকাশের পর নির্দিষ্ট সময়ের মধ্যে ভর্তি সম্পন্ন করুন।",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-title text-center">ভর্তি তথ্য</h1>

      <div className="card p-6 md:p-10">
        <p className="mb-6 text-gray-700 leading-relaxed">
          মেহনাজ হোসেন মীম আদর্শ সরকারি কলেজে একাদশ শ্রেণিতে ভর্তি বোর্ড কর্তৃক
          নির্ধারিত পদ্ধতি (XI ক্লাস অ্যাডমিশন সিস্টেম - xiclassadmission.gov.bd)
          অনুযায়ী সম্পন্ন হয়। বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা — তিনটি শাখায়
          শিক্ষার্থী ভর্তি নেওয়া হয়।
        </p>

        <h2 className="mb-3 font-bold text-navy">ভর্তির ধাপসমূহ</h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                {i + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://xiclassadmission.gov.bd"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            অনলাইন আবেদন (বোর্ড)
          </a>
          <a href="tel:01309134336" className="btn-primary">
            কলেজে যোগাযোগ করুন
          </a>
        </div>
      </div>
    </div>
  );
}
