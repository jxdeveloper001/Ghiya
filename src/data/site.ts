// ─────────────────────────────────────────────────────────────
// Gheeya — all editable site content lives here.
// CONFIGURABLE / NOT YET SUPPLIED BY THE USER — do not invent:
// • PRICE: not supplied yet (user asked 25 Nov ~12:20 to show prices
//   everywhere — the UI is wired to `packs.items[].sale/regular`
//   below, but both are null until the user gives real numbers.
//   NEVER invent a price: with null, the site shows "মূল্য কলের
//   সময় জানানো হবে" until real prices are filled in.
// • CONTACT (phone / email / address): not supplied. The footer
//   shows "যোগাযোগের তথ্য শীঘ্রই আসছে" until filled in.
// • DELIVERY / PAYMENT policy: not supplied. No COD claim is made;
//   the FAQ + order section say delivery and payment are confirmed
//   on the call.
// • REVIEWS: none. No sample or invented testimonials on this site.
// FACTS USED (from the supplied product photos only):
// • 100% Natural, Chemical Free, A2 Gir Cow Milk, Rich in Nutrition
// • Slow simmered clarified butter (ধীরে জ্বাল দিয়ে তৈরি)
// PACKS (user-supplied, 25 Nov): 100g and 300g. Note: the supplied
// jar photos show a "500ML" label — the pack sizes above are the
// user's own, the photos are reference only until real Gheeya
// labelled photos arrive.
// COPY RULE: short lines, image-led. No long paragraphs.
// ─────────────────────────────────────────────────────────────

export const price = null as null | {
  sale: number;
  regular: number;
  save: number;
};

export const site = {
  brand: "Gheeya",
  brandBn: "ঘিয়া",
  tagline: "প্রতিটি চামচে ঐতিহ্যের স্বাদ",
  contactNote: "যোগাযোগের তথ্য শীঘ্রই আসছে",
  contact: {
    email: "",
    phone: "",
    address: "",
  },
} as const;

export const hero = {
  eyebrow: "খাঁটি এ২ গরুর ঘি",
  titleA: "খাঁটি ঘি,",
  titleB: "ঠিক যেমনটা হওয়ার কথা",
  subtext:
    "ধীরে জ্বাল দিয়ে তৈরি খাঁটি এ২ গরুর ঘি — কোনো কিছু না মিশিয়ে। প্রতিদিনের রান্নায় সেই চেনা ঘ্রাণ।",
  primaryCta: "অর্ডার করুন",
  secondaryCta: "ঘি সম্পর্কে জানুন",
  chips: ["১০০% প্রাকৃতিক", "কেমিক্যালমুক্ত", "এ২ গরুর দুধ"],
  jarAlt: "Gheeya ঘি — সোনালি খাঁটি ঘির জার",
} as const;

export const intro = {
  eyebrow: "পরিচিতি",
  heading: "ধীরে জ্বাল দেওয়া, সোনালি ঘি",
  text: "ভালো ঘি তাড়াহুড়ো করে হয় না। দুধ থেকে মাখন, মাখন থেকে ধীরে ধীরে জ্বাল দিয়ে সোনালি ঘি — এই ধৈর্যটাই Gheeya-র পরিচয়।",
  points: ["১০০ গ্রাম ও ৩০০ গ্রাম প্যাক", "কাচের জার"],
} as const;

export const benefits = {
  eyebrow: "গুণাগুণ",
  heading: "যা আছে, তা-ই যথেষ্ট",
  subtext: "প্যাকেটের কথাই আমাদের কথা — এর বাইরে কোনো দাবি নয়।",
  items: [
    {
      no: "০১",
      icon: "leaf",
      title: "১০০% প্রাকৃতিক",
      text: "শুধু খাঁটি ঘি, আর কিছুই নয়।",
    },
    {
      no: "০২",
      icon: "shield",
      title: "কেমিক্যালমুক্ত",
      text: "কোনো প্রিজারভেটিভ বা কেমিক্যাল নেই।",
    },
    {
      no: "০৩",
      icon: "drop",
      title: "এ২ গরুর দুধ",
      text: "এ২ গির গরুর দুধ থেকে তৈরি।",
    },
    {
      no: "০৪",
      icon: "clock",
      title: "ধীরে জ্বাল দেওয়া",
      text: "আস্তে আস্তে জ্বাল দিয়ে সোনালি ঘি।",
    },
    {
      no: "০৫",
      icon: "sun",
      title: "পুষ্টিগুণে ভরপুর",
      text: "প্রতিদিনের রান্নায় সমৃদ্ধ স্বাদ।",
    },
  ],
} as const;

export const packs = {
  eyebrow: "প্যাক",
  heading: "আপনার মতো করে বেছে নিন",
  items: [
    {
      size: "১০০ গ্রাম",
      sizeEn: "100g",
      img: "/ghee-jar-green.jpg",
      alt: "Gheeya ঘি — ১০০ গ্রাম প্যাক",
      note: "প্রথমবার চেখে দেখার জন্য",
      sale: null as number | null,
      regular: null as number | null,
    },
    {
      size: "৩০০ গ্রাম",
      sizeEn: "300g",
      img: "/ghee-jar-warm.jpg",
      alt: "Gheeya ঘি — ৩০০ গ্রাম প্যাক",
      note: "নিয়মিত ব্যবহারের জন্য",
      sale: null as number | null,
      regular: null as number | null,
    },
  ],
} as const;

export const showcase = {
  eyebrow: "পণ্য",
  heading: "একটাই পণ্য, একটাই যত্ন",
  text: "দুইটি প্যাকে — আপনার প্রয়োজন মতো বেছে নিন।",
  size: "১০০ গ্রাম · ৩০০ গ্রাম",
  sizeNote: "কাচের জার",
  uses: ["ভাতের সঙ্গে এক চামচ", "রুটি-পরোটায়", "মিষ্টি ও পায়েসে", "প্রতিদিনের রান্নায়"],
} as const;

export const why = {
  eyebrow: "কেন Gheeya",
  heading: "তিনটি কারণেই ভরসা",
  items: [
    {
      title: "তাড়াহুড়ো নয়",
      text: "ধীরে জ্বাল দিলেই আসে সোনালি রং আর গভীর ঘ্রাণ।",
    },
    {
      title: "কিছুই মেশানো নেই",
      text: "যা লেখা আছে, তা-ই ভেতরে।",
    },
    {
      title: "প্রতিটি জার একই",
      text: "প্রথম জার যেমন, শেষ জারও তেমন।",
    },
  ],
} as const;

export const faqs = [
  {
    q: "Gheeya ঘি কি সম্পূর্ণ খাঁটি?",
    a: "হ্যাঁ — ১০০% প্রাকৃতিক ও কেমিক্যালমুক্ত, এ২ গরুর দুধ থেকে ধীরে জ্বাল দিয়ে তৈরি।",
  },
  {
    q: "কোন কোন প্যাকে পাওয়া যায়?",
    a: "Gheeya দুইটি প্যাকে পাওয়া যায় — ১০০ গ্রাম ও ৩০০ গ্রাম।",
  },
  {
    q: "ঘি কিভাবে সংরক্ষণ করব?",
    a: "ঠান্ডা ও শুকনো জায়গায় রাখুন, ঢাকনা বন্ধ করে।",
  },
  {
    q: "মূল্য ও ডেলিভারি কিভাবে জানব?",
    a: "ফর্মটি পূরণ করুন — আমরা কল করে মূল্য ও ডেলিভারি জানাব।",
  },
  {
    q: "ঘি কি রান্না ছাড়াও খাওয়া যায়?",
    a: "হ্যাঁ — গরম ভাত, রুটি-পরোটা, মিষ্টি ও পায়েসে।",
  },
] as const;

export const order = {
  eyebrow: "অর্ডার",
  heading: "আপনার Gheeya অর্ডার করুন",
  subtext: "ফর্মটি পূরণ করুন — আমরা কল করে মূল্য ও ডেলিভারি জানাব।",
  note: "মূল্য এখনো নির্ধারণ করা হয়নি — কলের সময় জানিয়ে দেওয়া হবে।",
} as const;
