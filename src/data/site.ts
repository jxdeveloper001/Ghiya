// ─────────────────────────────────────────────────────────────
// Gheeya — all editable site content lives here.
// CONFIGURABLE / NOT YET SUPPLIED BY THE USER — do not invent:
// • PRICE: not supplied. `price` is null on purpose; the order
//   section says the price will be confirmed on the confirmation
//   call. Fill this in when the user supplies a real price.
// • CONTACT (phone / email / address): not supplied. The footer
//   shows "যোগাযোগের তথ্য শীঘ্রই আসছে" until filled in.
// • DELIVERY / PAYMENT policy: not supplied. No COD claim is made;
//   the FAQ + order section say delivery and payment are confirmed
//   on the call.
// • REVIEWS: none. No sample or invented testimonials on this site.
// FACTS USED (from the supplied product photos only):
// • 500ml jar (ছবির জারে "500ML / 16 Oz" লেখা)
// • 100% Natural, Chemical Free, A2 Gir Cow Milk, Rich in Nutrition
// • Slow simmered clarified butter (ধীরে জ্বাল দিয়ে তৈরি)
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
    "ধীরে ধীরে জ্বাল দিয়ে তৈরি Gheeya ঘি — এ২ গরুর দুধ থেকে, কোনো কিছু না মিশিয়ে। প্রতিদিনের রান্নায় সেই চেনা ঘ্রাণ আর সোনালি স্বাদ।",
  primaryCta: "অর্ডার করুন",
  secondaryCta: "ঘি সম্পর্কে জানুন",
  chips: ["১০০% প্রাকৃতিক", "কেমিক্যালমুক্ত", "এ২ গরুর দুধ"],
  jarAlt: "Gheeya ঘি — সোনালি খাঁটি ঘির জার",
} as const;

export const intro = {
  eyebrow: "পরিচিতি",
  heading: "ধীরে জ্বাল দেওয়া, সোনালি ঘি",
  text: "ভালো ঘি তাড়াহুড়ো করে হয় না। দুধ থেকে মাখন, মাখন থেকে ধীরে ধীরে জ্বাল দিয়ে সোনালি ঘি — এই ধৈর্যটাই Gheeya-র আসল পরিচয়।",
  text2:
    "কোনো কৃত্রিম রং নয়, কোনো বাড়তি কিছু নয়। শুধু খাঁটি উপাদান আর সময় নিয়ে তৈরি ঘি, যা রান্নায় দেয় গভীর ঘ্রাণ আর সমৃদ্ধ স্বাদ।",
  points: [
    { title: "ধীরে জ্বাল দেওয়া", text: "Slow simmered — আস্তে আস্তে জ্বাল দিয়ে তৈরি।" },
    { title: "কাচের জার", text: "৫০০ মিলি জার — ঘ্রাণ আর স্বাদ যত্নে রাখা।" },
  ],
} as const;

export const benefits = {
  eyebrow: "গুণাগুণ",
  heading: "যা আছে, তা-ই যথেষ্ট",
  subtext: "প্যাকেটের কথাই আমাদের কথা — এর বাইরে কোনো দাবি নয়।",
  items: [
    {
      no: "০১",
      title: "১০০% প্রাকৃতিক",
      text: "শুধু খাঁটি ঘি। কোনো কৃত্রিম কিছু মেশানো নেই।",
    },
    {
      no: "০২",
      title: "কেমিক্যালমুক্ত",
      text: "প্রিজারভেটিভ বা কেমিক্যাল ছাড়া — যেমনটা প্রকৃতি দিয়েছে।",
    },
    {
      no: "০৩",
      title: "এ২ গরুর দুধ",
      text: "এ২ গির গরুর দুধ থেকে তৈরি — ঐতিহ্যবাহী উৎস।",
    },
    {
      no: "০৪",
      title: "পুষ্টিগুণে ভরপুর",
      text: "প্রতিদিনের রান্নায় সমৃদ্ধ স্বাদ আর ঘ্রাণ।",
    },
  ],
} as const;

export const showcase = {
  eyebrow: "পণ্য",
  heading: "একটাই পণ্য, একটাই যত্ন",
  text: "৫০০ মিলি কাচের জার — প্রতিদিনের রান্নার জন্য যথেষ্ট, আর প্রতিটি জার একই যত্নে ভরা।",
  size: "৫০০ মিলি",
  sizeNote: "কাচের জার · ছবির জার অনুযায়ী",
  uses: ["ভাতের সঙ্গে এক চামচ", "রুটি-পরোটায়", "মিষ্টি ও পায়েসে", "প্রতিদিনের রান্নায়"],
} as const;

export const why = {
  eyebrow: "কেন Gheeya",
  heading: "তিনটি কারণেই ভরসা",
  items: [
    {
      title: "তাড়াহুড়ো নয়",
      text: "ধীরে জ্বাল দিলেই ঘি পায় তার সোনালি রং আর গভীর ঘ্রাণ। আমরা সেই সময়টুকু দিই।",
    },
    {
      title: "কিছুই মেশানো নেই",
      text: "যা লেখা আছে, তা-ই ভেতরে। বাড়তি কিছু মিশিয়ে স্বাদ বদলানোর চেষ্টা নেই।",
    },
    {
      title: "প্রতিটি জার একই",
      text: "প্রথম জারটা যেমন, শেষ জারটাও তেমন — একই উপাদান, একই যত্ন।",
    },
  ],
} as const;

export const faqs = [
  {
    q: "Gheeya ঘি কি সম্পূর্ণ খাঁটি?",
    a: "হ্যাঁ। প্যাকেটের তথ্য অনুযায়ী এটি ১০০% প্রাকৃতিক ও কেমিক্যালমুক্ত, এ২ গরুর দুধ থেকে ধীরে জ্বাল দিয়ে তৈরি।",
  },
  {
    q: "একটি জারে কতটুকু ঘি থাকে?",
    a: "একটি জারে ৫০০ মিলি ঘি থাকে।",
  },
  {
    q: "ঘি কিভাবে সংরক্ষণ করব?",
    a: "ঠান্ডা ও শুকনো জায়গায় রাখুন, সরাসরি রোদ এড়িয়ে চলুন, আর ব্যবহারের পর ঢাকনা ভালোভাবে বন্ধ করে দিন।",
  },
  {
    q: "মূল্য ও ডেলিভারি কিভাবে জানব?",
    a: "নিচের ফর্মটি পূরণ করুন। আমরা কল করে মূল্য, ডেলিভারি ও পেমেন্টের ব্যবস্থা নিশ্চিত করব।",
  },
  {
    q: "ঘি কি রান্না ছাড়াও খাওয়া যায়?",
    a: "হ্যাঁ — গরম ভাতের সঙ্গে এক চামচ, রুটি-পরোটায়, কিংবা মিষ্টি ও পায়েসে — যেভাবে আপনার ভালো লাগে।",
  },
] as const;

export const order = {
  eyebrow: "অর্ডার",
  heading: "আপনার Gheeya অর্ডার করুন",
  subtext:
    "ফর্মটি পূরণ করুন — আমরা কল করে মূল্য ও ডেলিভারি নিশ্চিত করব।",
  note: "মূল্য এখনো নির্ধারণ করা হয়নি — কলের সময় জানিয়ে দেওয়া হবে।",
} as const;
