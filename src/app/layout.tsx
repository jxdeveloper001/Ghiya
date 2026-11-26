import type { Metadata } from "next";
import { Anek_Bangla, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const displayBn = Anek_Bangla({
  variable: "--font-display-bn",
  subsets: ["bengali", "latin"],
  weight: ["600", "700", "800"],
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
    <html lang="bn" className={`${displayBn.variable} ${sansBn.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-cocoa antialiased">
        {children}
      </body>
    </html>
  );
}
