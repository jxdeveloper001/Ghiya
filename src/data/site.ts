// ─────────────────────────────────────────────────────────────
// Gheeya — all editable site content lives here.
// CONFIGURABLE / NOT YET SUPPLIED BY THE USER — do not invent:
// • PRICE (user-supplied 25 Nov ~12:32): 100g sale ৳199 (regular
//   ৳250), 300g sale ৳699 (regular ৳820). Shown in the pack
//   selector, summary, order form and success box.
// • CONTACT (phone / email / address): not supplied. The footer
//   shows "যোগাযোগের তথ্য শীঘ্রই আসছে" until filled in.
// • DELIVERY / PAYMENT policy: not supplied. No COD claim is made;
//   the FAQ + order section say delivery and payment are confirmed
//   on the call.
// • REVIEWS: SAMPLES only (labelled "নমুনা রিভিউ" on the page) —
//   no real customer reviews were ever supplied. Replace with real
//   ones when the user sends them.
// • VIDEO: the Gram Food / Gawa Ghee promo video the user sent
//   (public/gheeya-video.mp4, 13s). The user first sent a 24s
//   version by mistake, then replaced it with this 13s one
//   (25 Nov 19:22) — it has no end card with contact info.
//   The jar in the video carries the Gram Food label.
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
  eyebrow: "ঘি — যেমনটা হওয়ার কথা",
  titleA: "সোনালি ঘি,",
  titleB: "খাঁটি স্বাদ",
  subtext: "ধীরে জ্বাল দেওয়া এ২ গরুর ঘি — কোনো কিছু না মিশিয়ে।",
  primaryCta: "অর্ডার করুন",
  secondaryCta: "ঘি সম্পর্কে জানুন",
  chips: ["১০০% প্রাকৃতিক", "কেমিক্যালমুক্ত", "এ২ গরুর দুধ"],
  jarAlt: "Gheeya ঘি — জার",
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
      text: "কোনো প্রিজারভেটিভ নেই।",
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
  ],
} as const;

export const packs = {
  eyebrow: "প্যাক",
  heading: "আপনার মতো করে বেছে নিন",
  items: [
    {
      size: "১০০ গ্রাম",
      sizeEn: "100g",
      img: "/ghee-jar.jpg",
      alt: "Gheeya ঘি — ১০০ গ্রাম প্যাক",
      note: "প্রথমবার চেখে দেখার জন্য",
      sale: 199 as number | null,
      regular: 250 as number | null,
    },
    {
      size: "৩০০ গ্রাম",
      sizeEn: "300g",
      img: "/ghee-jar.jpg",
      alt: "Gheeya ঘি — ৩০০ গ্রাম প্যাক",
      note: "নিয়মিত ব্যবহারের জন্য",
      sale: 699 as number | null,
      regular: 820 as number | null,
    },
  ],
} as const;

export const variants = [
  {
    name: "হলুদ স্টিকার",
    img: "/ghee-variant-yellow.jpg",
    alt: "Gheeya ঘি — হলুদ স্টিকার",
  },
  {
    name: "লাল স্টিকার",
    img: "/ghee-variant-red.jpg",
    alt: "Gheeya ঘি — লাল স্টিকার",
  },
  {
    name: "সবুজ স্টিকার",
    img: "/ghee-variant-green.jpg",
    alt: "Gheeya ঘি — সবুজ স্টিকার",
  },
  {
    name: "বেগুনি স্টিকার",
    img: "/ghee-variant-purple.jpg",
    alt: "Gheeya ঘি — বেগুনি স্টিকার",
  },
] as const;

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
  note: "ডেলিভারি চার্জ কলের সময় জানিয়ে দেওয়া হবে।",
} as const;

// • REVIEWS: NO real customer reviews were ever supplied — the items
//   below are SAMPLES, labelled as such on the page. Replace them
//   with real customer words when the user sends them. Never present
//   samples as real reviews.
export const reviews = {
  eyebrow: "রিভিউ",
  heading: "যারা খেয়েছেন, তারা যা বললেন",
  subtext: "নমুনা রিভিউ — আসল ক্রেতা রিভিউ পাঠালে এখানে বসিয়ে দেওয়া হবে।",
  items: [
    { name: "রহিমা আ.", role: "ঢাকা", stars: 5, text: "ঘ্রাণেই বোঝা যায় খাঁটি। ভাতের সঙ্গে এক চামচ দিলেই পুরো ঘরে সুগন্ধ ছড়িয়ে যায়।" },
    { name: "সাকিব হ.", role: "চট্টগ্রাম", stars: 5, text: "বাচ্চারা রুটির সঙ্গে খেতে খুব পছন্দ করে। এতদিনে একটা ভরসার ঘি পেলাম।" },
    { name: "নুসরাত জ.", role: "ঢাকা", stars: 5, text: "প্যাকেজিং সুন্দর, ঘি একদম পরিষ্কার আর সোনালি। দাম হিসেবে মান অনেক ভালো।" },
    { name: "তানভীর র.", role: "সিলেট", stars: 5, text: "আমার মা বলেন, ঠিক ছোটবেলার ঘরের ঘি-এর মতো স্বাদ।" },
    { name: "ফারহানা ই.", role: "খুলনা", stars: 4, text: "৩০০ গ্রামের প্যাকটা নিয়মিত ব্যবহার করি। এক চামচেই রান্নার স্বাদ বদলে যায়।" },
    { name: "আরিফ ক.", role: "ঢাকা", stars: 5, text: "ডেলিভারি পাওয়ার পরই খুলে দেখলাম — ঘি সুন্দর জমাট বাঁধা, ঘ্রাণ দারুণ।" },
    { name: "মেহজাবিন চ.", role: "রাজশাহী", stars: 5, text: "পরোটা ভাজতে এই ঘি ব্যবহার করি, রঙ আর ঘ্রাণ দুটোই দারুণ আসে।" },
    { name: "হাসান ম.", role: "বরিশাল", stars: 5, text: "দ্বিতীয়বার অর্ডার করলাম। পরিবারের সবাই এখন Gheeya-ই খায়।" },
  ],
} as const;

export const videoSection = {
  eyebrow: "ভিডিও",
  heading: "ভিডিওতে দেখুন",
  subtext: "বিরিয়ানি, মাটন কারি, চিকেন কারি, পরোটা — সবকিছুতেই Gheeya ঘি।",
} as const;
