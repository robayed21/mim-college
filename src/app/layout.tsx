import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "মেহনাজ হোসেন মীম আদর্শ সরকারি কলেজ",
    template: "%s | মেহনাজ হোসেন মীম আদর্শ সরকারি কলেজ",
  },
  description:
    "মেহনাজ হোসেন মীম আদর্শ সরকারি কলেজ — কুমিল্লা জেলার তিতাস উপজেলার রঘুনাথপুরে অবস্থিত একটি সরকারি উচ্চশিক্ষা প্রতিষ্ঠান। EIIN: 134336",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body className={`${hind.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
