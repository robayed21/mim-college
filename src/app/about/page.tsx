import type { Metadata } from "next";
import site from "../../../data/site.json";

export const metadata: Metadata = { title: "আমাদের সম্পর্কে" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-title text-center">আমাদের সম্পর্কে</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.aboutImage}
        alt={site.name}
        className="card mb-8 max-h-96 w-full object-cover"
      />

      <div className="card space-y-4 p-6 md:p-10">
        <p className="text-gray-700 leading-relaxed">{site.about}</p>
        <p className="text-gray-700 leading-relaxed">
          কলেজটি জাতীয় শিক্ষাক্রম অনুযায়ী উচ্চ মাধ্যমিক (একাদশ-দ্বাদশ শ্রেণি)
          পর্যায়ে বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখায় পাঠদান কার্যক্রম
          পরিচালনা করছে। অভিজ্ঞ ও মানসম্মত শিক্ষকমণ্ডলীর মাধ্যমে শিক্ষার্থীদের
          পাশাপাশি সহ-পাঠক্রমিক কার্যক্রমেও গুরুত্ব দেওয়া হয়।
        </p>
        <p className="text-gray-700 leading-relaxed">
          আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে জ্ঞান, দক্ষতা, নৈতিকতা ও
          মানবিক মূল্যবোধসম্পন্ন একজন আদর্শ নাগরিক হিসেবে গড়ে তোলা, যাতে তারা
          ভবিষ্যতে দেশ ও জাতির কল্যাণে গুরুত্বপূর্ণ অবদান রাখতে পারে।
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-3 font-bold text-navy">প্রতিষ্ঠানের তথ্য</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>প্রতিষ্ঠানের নাম: {site.name}</li>
            <li>EIIN: {site.eiin}</li>
            <li>ঠিকানা: {site.location}</li>
            <li>ধরন: সরকারি কলেজ</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="mb-3 font-bold text-navy">সংখ্যাতথ্য</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>শিক্ষক: {site.stats.teachers} জন</li>
            <li>স্টাফ: {site.stats.staff} জন</li>
            <li>ছাত্র: {site.stats.maleStudents} জন</li>
            <li>ছাত্রী: {site.stats.femaleStudents} জন</li>
            <li>মোট শিক্ষার্থী: {site.stats.totalStudents} জন</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
