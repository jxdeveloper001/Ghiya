import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const serifBn = Noto_Serif_Bengali({
  variable: "--font-serif-bn",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

const sansBn = Hind_Siliguri({
  variable: "--font-sans-bn",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gheeya — খাঁটি এ২ গরুর ঘি",
  description:
    "Gheeya — ধীরে জ্বাল দিয়ে তৈরি খাঁটি এ২ গরুর ঘি। ১০০% প্রাকৃতিক, কেমিক্যালমুক্ত। প্রতিটি চামচে ঐতিহ্যের স্বাদ।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${serifBn.variable} ${sansBn.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-cocoa antialiased">
        {children}
      </body>
    </html>
  );
}
