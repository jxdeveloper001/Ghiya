"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { benefits, faqs, hero, intro, order, showcase, site, why } from "@/data/site";

const NAV = [
  { href: "#porichiti", label: "পরিচিতি" },
  { href: "#gunagun", label: "গুণাগুণ" },
  { href: "#keno", label: "কেন Gheeya" },
  { href: "#jiggasha", label: "জিজ্ঞাসা" },
];

const MARQUEE = [
  "খাঁটি",
  "প্রাকৃতিক",
  "ধীরে জ্বাল দেওয়া",
  "কেমিক্যালমুক্ত",
  "এ২ গরুর দুধ",
  "সোনালি ঘি",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) {
      setError("অনুগ্রহ করে আপনার নাম ও সঠিক মোবাইল নম্বর দিন।");
      return;
    }
    setError("");
    setOrderId(`GHEEYA-${Math.floor(1000 + Math.random() * 9000)}`);
  }

  return (
    <div>
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-[26px] font-bold leading-none text-cocoa">
              Gheeya
            </span>
            <span className="text-sm font-medium text-gold-deep">ঘি</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[15px] font-medium text-cocoa-soft transition-colors hover:text-gold-deep"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#order"
              className="rounded-full bg-cocoa px-5 py-2.5 text-[15px] font-semibold text-ivory transition-colors hover:bg-gold-deep"
            >
              অর্ডার করুন
            </a>
            <button
              type="button"
              aria-label="মেনু খুলুন"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cocoa md:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-line bg-ivory px-5 py-3 md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line/60 py-3 text-[16px] font-medium text-cocoa-soft last:border-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden">
        <div className="gold-halo pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:pb-20 md:pt-16">
          <div className="hero-in text-center md:text-left">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.3] text-cocoa sm:text-[52px] md:text-[56px]">
              {hero.titleA}
              <br />
              <span className="text-gold-deep">{hero.titleB}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-cocoa-soft md:mx-0">
              {hero.subtext}
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:justify-start sm:justify-center">
              <a
                href="#order"
                className="w-full rounded-full bg-cocoa px-7 py-3.5 text-center text-[16px] font-semibold text-ivory transition-colors hover:bg-gold-deep sm:w-auto"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#porichiti"
                className="w-full rounded-full border border-cocoa/25 px-7 py-3.5 text-center text-[16px] font-semibold text-cocoa transition-colors hover:border-gold-deep hover:text-gold-deep sm:w-auto"
              >
                {hero.secondaryCta}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start">
              {hero.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-[13.5px] font-medium text-cocoa-soft"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-in-delay relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[28px] border border-gold/40" />
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[28px] shadow-[0_28px_60px_-20px_rgb(140_106_31/0.45)]">
              <Image
                src="/ghee-jar-warm.jpg"
                alt={hero.jarAlt}
                width={736}
                height={1308}
                priority
                className="animate-float aspect-[3/4.2] w-full object-cover object-[50%_28%]"
              />
            </div>
            <div className="absolute -left-3 top-16 rounded-full bg-ivory px-4 py-2 text-[14px] font-semibold text-cocoa shadow-[0_10px_24px_-8px_rgb(58_42_24/0.35)] sm:-left-6">
              ৫০০ মিলি জার
            </div>
            <div className="absolute -right-2 bottom-14 rounded-full bg-cocoa px-4 py-2 text-[14px] font-semibold text-ivory shadow-[0_10px_24px_-8px_rgb(58_42_24/0.45)] sm:-right-5">
              ধীরে জ্বাল দেওয়া
            </div>
          </div>
        </div>
      </section>

      {/* ── Gold marquee strip ── */}
      <div className="marquee overflow-hidden bg-cocoa py-3.5" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="flex items-center gap-8 text-[15px] font-medium text-butter">
              {w}
              <span className="text-gold-soft">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Intro ── */}
      <section id="porichiti" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="reveal grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border border-gold/40" />
            <div className="relative overflow-hidden rounded-[28px] bg-cream shadow-[0_20px_44px_-18px_rgb(140_106_31/0.4)]">
              <Image
                src="/ghee-jar-green.jpg"
                alt="Gheeya ঘির জার — ৫০০ মিলি, এ২ গির গরুর ঘি"
                width={433}
                height={513}
                className="aspect-[433/513] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-[13.5px] text-cocoa-faint">
              আসল পণ্যের ছবি — জার ও লেবেল যেমন, তেমনই।
            </p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {intro.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {intro.heading}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-cocoa-soft">{intro.text}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-cocoa-soft">{intro.text2}</p>
            <div className="mt-7 space-y-4 border-t border-line pt-6">
              {intro.points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <div>
                    <p className="font-display text-[18px] font-semibold text-cocoa">{p.title}</p>
                    <p className="text-[15.5px] leading-relaxed text-cocoa-soft">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section id="gunagun" className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
          <div className="reveal max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {benefits.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {benefits.heading}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-cocoa-soft">{benefits.subtext}</p>
          </div>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {benefits.items.map((b) => (
              <div key={b.no} className="reveal lift rounded-[20px] border border-line bg-ivory p-6 md:p-7">
                <p className="font-display text-[15px] font-semibold text-gold">{b.no}</p>
                <h3 className="mt-2 font-display text-[22px] font-semibold text-cocoa">{b.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-cocoa-soft">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showcase band ── */}
      <section className="band-warm">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
          <div className="reveal">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {showcase.eyebrow}
            </p>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {showcase.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-cocoa-soft">
              {showcase.text}
            </p>
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-6 rounded-[20px] border border-line bg-ivory/80 px-6 py-5">
              <div className="text-left">
                <p className="font-display text-[26px] font-bold text-cocoa">{showcase.size}</p>
                <p className="text-[13.5px] text-cocoa-faint">{showcase.sizeNote}</p>
              </div>
              <div className="h-12 w-px bg-line" />
              <div className="text-left">
                <p className="font-display text-[18px] font-semibold text-cocoa">মূল্য</p>
                <p className="text-[13.5px] leading-snug text-cocoa-faint">
                  কলের সময় জানানো হবে
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {showcase.uses.map((u) => (
                <span
                  key={u}
                  className="rounded-full bg-cocoa px-4 py-2 text-[14px] font-medium text-ivory"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Gheeya ── */}
      <section id="keno" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="reveal max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {why.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
            {why.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {why.items.map((w, i) => (
            <div key={w.title} className="reveal border-t-2 border-gold pt-6">
              <p className="font-display text-[15px] font-semibold text-gold">
                {["০১", "০২", "০৩"][i]}
              </p>
              <h3 className="mt-2 font-display text-[22px] font-semibold text-cocoa">{w.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-cocoa-soft">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Warm photo break ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/ghee-jar-warm.jpg"
          alt="সোনালি ঘির জার — উষ্ণ আলোয়"
          width={736}
          height={1308}
          className="h-[300px] w-full object-cover object-[50%_92%] md:h-[380px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-cocoa/55 px-5">
          <p className="reveal max-w-2xl text-center font-display text-[28px] font-semibold leading-snug text-ivory sm:text-[36px]">
            “{site.tagline}”
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="jiggasha" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="reveal text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            জিজ্ঞাসা
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
            জানতে চান?
          </h2>
          <p className="mt-3 text-[16.5px] text-cocoa-soft">
            ঘি নিয়ে সবচেয়ে বেশি জিজ্ঞাসা করা প্রশ্নগুলোর উত্তর।
          </p>
        </div>
        <div className="mt-9 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="reveal overflow-hidden rounded-[18px] border border-line bg-white/60">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-display text-[18px] font-semibold text-cocoa">{f.q}</span>
                <span className="shrink-0 text-[20px] leading-none text-gold-deep">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p className="border-t border-line/70 px-5 py-4 text-[16px] leading-relaxed text-cocoa-soft">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Order ── */}
      <section id="order" className="border-t border-line bg-cream/60">
        <div className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
          <div className="reveal text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {order.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {order.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[16.5px] leading-relaxed text-cocoa-soft">
              {order.subtext}
            </p>
          </div>

          {orderId ? (
            <div className="reveal is-visible mt-10 rounded-[24px] border border-gold/50 bg-ivory p-8 text-center shadow-[0_20px_44px_-18px_rgb(140_106_31/0.4)]">
              <p className="font-display text-[26px] font-semibold text-cocoa">
                অর্ডারটি পেয়েছি — ধন্যবাদ!
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-cocoa-soft">
                আপনার অর্ডার নম্বর
              </p>
              <p className="mt-1 font-display text-[24px] font-bold tracking-wide text-gold-deep">
                {orderId}
              </p>
              <p className="mx-auto mt-3 max-w-sm text-[16px] leading-relaxed text-cocoa-soft">
                {qty}টি জার ({showcase.size} করে) — আমরা শীঘ্রই কল করে মূল্য ও ডেলিভারি
                নিশ্চিত করব।
              </p>
            </div>
          ) : (
            <form
              onSubmit={submitOrder}
              className="reveal mt-10 rounded-[24px] border border-line bg-ivory p-6 shadow-[0_20px_44px_-18px_rgb(140_106_31/0.35)] md:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    আপনার নাম
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: রহিম উদ্দিন"
                    className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none placeholder:text-cocoa-faint focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    মোবাইল নম্বর
                  </label>
                  <input
                    id="phone"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none placeholder:text-cocoa-faint focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    ঠিকানা
                  </label>
                  <textarea
                    id="address"
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="বাসা/রোড, এলাকা, জেলা"
                    className="w-full resize-none rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none placeholder:text-cocoa-faint focus:border-gold"
                  />
                </div>
                <div className="flex items-center justify-between rounded-[14px] border border-line bg-cream/70 px-4 py-3">
                  <span className="text-[15px] font-semibold text-cocoa">
                    জারের সংখ্যা · {showcase.size} করে
                  </span>
                  <span className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="একটি কমান"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-cocoa/25 text-[18px] text-cocoa"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-display text-[20px] font-bold text-cocoa">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="একটি বাড়ান"
                      onClick={() => setQty((q) => Math.min(5, q + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-cocoa/25 text-[18px] text-cocoa"
                    >
                      +
                    </button>
                  </span>
                </div>
                {error && <p className="text-[15px] font-medium text-red-800">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-cocoa py-4 text-[17px] font-semibold text-ivory transition-colors hover:bg-gold-deep"
                >
                  অর্ডার নিশ্চিত করুন
                </button>
                <p className="text-center text-[13.5px] leading-relaxed text-cocoa-faint">
                  {order.note}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cocoa text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-display text-[28px] font-bold leading-none">
                Gheeya <span className="text-[16px] font-medium text-butter">ঘি</span>
              </p>
              <p className="mt-3 text-[15px] text-ivory/70">{site.tagline}</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-[15px] text-ivory/80 hover:text-butter">
                  {n.label}
                </a>
              ))}
              <a href="#order" className="text-[15px] text-ivory/80 hover:text-butter">
                অর্ডার করুন
              </a>
            </nav>
          </div>
          <div className="mt-10 border-t border-ivory/15 pt-6 text-center text-[13.5px] text-ivory/60">
            <p>{site.contactNote}</p>
            <p className="mt-2">© ২০২৬ Gheeya · সর্বস্বত্ব সংরক্ষিত</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
