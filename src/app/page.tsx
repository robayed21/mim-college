import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NoticeBoard from "@/components/NoticeBoard";
import Principal from "@/components/Principal";
import AboutPreview from "@/components/AboutPreview";
import CategoryGrid from "@/components/CategoryGrid";
import TeachersSection from "@/components/Teachers";
import GalleryPreview from "@/components/GalleryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <NoticeBoard />
      <Principal />
      <AboutPreview />
      <CategoryGrid />
      <TeachersSection />
      <GalleryPreview />
    </>
  );
}
