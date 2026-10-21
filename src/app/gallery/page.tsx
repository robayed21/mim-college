import type { Metadata } from "next";
import { getGallery } from "@/lib/data";

export const metadata: Metadata = { title: "ছবিঘর" };

export default async function GalleryPage() {
  const images = await getGallery();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="section-title text-center">ছবিঘর</h1>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4">
        {images.map((src) => (
          <div key={src} className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="গ্যালারির ছবি" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
