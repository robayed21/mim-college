"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import site from "../../data/site.json";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const images = site.heroImages;

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[420px] overflow-hidden bg-navy md:h-[520px]">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`ক্যাম্পাস ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />

      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col items-center justify-end pb-16 text-center">
        <h1 className="mb-3 text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
          {site.name}
        </h1>
        <p className="mb-6 text-base text-gold-light md:text-xl">
          {site.location} | EIIN: {site.eiin}
        </p>
        <div className="flex gap-3">
          <Link href="/admission" className="btn-gold">
            ভর্তি তথ্য
          </Link>
          <Link
            href="/notice"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            নোটিশ বোর্ড
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`স্লাইড ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-gold" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
