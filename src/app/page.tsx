"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { benefits, faqs, hero, intro, order, packs, showcase, site, why } from "@/data/site";

const fade = "transition-all duration-300 ease-out";

const iconMap: Record<string, React.ReactNode> = {
  leaf: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  drop: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  sun: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" />
    </svg>
  ),
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pack, setPack] = useState("৩০০ গ্রাম");
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState("");
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [faqHeights, setFaqHeights] = useState<number[]>([]);

  // Measure each FAQ answer once so open/close animates smoothly
  // (max-height) instead of vanishing in one frame.
  useEffect(() => {
    const measure = () =>
      setFaqHeights(faqRefs.current.map((el) => el?.scrollHeight ?? 0));
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, []);

  const selected = packs.items.find((p) => p.size === pack) ?? packs.items[1];

  // Bengali-digit price, e.g. ৳১,৯৬০. Prices live in site.ts and are
  // null until the user supplies real numbers — never invented.
  const bnPrice = (n: number) =>
    "৳" + n.toLocaleString("en-IN").replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // ROOT FIX: reveal with inline style, never classList.
            // React rewrites className on re-render (e.g. FAQ open
            // changes the border class) and would wipe an added
            // "is-visible" class — the card then faded out forever.
            // Inline style survives React re-renders.
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;
    setOrderId(`GHEEYA-${Math.floor(1000 + Math.random() * 9000)}`);
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#" className="flex items-baseline gap-1.5">
            <span className="font-display text-[26px] font-bold tracking-tight text-cocoa">
              Gheeya
            </span>
            <span className="font-display text-[15px] text-gold-deep">ঘি</span>
          </a>
          <nav className="hidden items-center gap-8 text-[15px] font-medium text-cocoa-soft md:flex">
            <a href="#benefits" className={`${fade} hover:text-gold`}>গুণাগুণ</a>
            <a href="#intro" className={`${fade} hover:text-gold`}>পরিচিতি</a>
            <a href="#why" className={`${fade} hover:text-gold`}>কেন Gheeya</a>
            <a href="#faq" className={`${fade} hover:text-gold`}>জিজ্ঞাসা</a>
          </nav>
          <a
            href="#order"
            className={`${fade} rounded-full bg-cocoa px-5 py-2.5 text-[15px] font-semibold text-ivory hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_10px_20px_-8px_rgb(124_42_32/0.6)] active:scale-95`}
          >
            অর্ডার করুন
          </a>
          <button
            type="button"
            aria-label="মেনু"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ivory text-cocoa md:hidden"
          >
            <span className="text-[18px] leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        <div
          className={`faq-panel ${menuOpen ? "open" : ""} border-t border-line/60 bg-ivory md:hidden`}
        >
          <div>
            <nav className="flex flex-col px-5 py-2 text-[16px] font-medium text-cocoa-soft">
              {[
                ["#benefits", "গুণাগুণ"],
                ["#intro", "পরিচিতি"],
                ["#why", "কেন Gheeya"],
                ["#faq", "জিজ্ঞাসা"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-2 py-3 transition-colors hover:bg-cream/60 hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ── Hero — short, with AI-made low-res ghee background ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/hero-bg-low.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/60 via-ivory/30 to-ivory" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:gap-10 md:grid-cols-[1.05fr_0.95fr] md:px-8">
          <div className="hero-in">
            <p className="text-[15px] font-semibold tracking-wide text-gold-deep">
              {hero.eyebrow}
            </p>
            <h1 className="mt-2.5 font-display text-[32px] font-semibold text-cocoa sm:text-[42px] md:text-[46px]">
              {hero.titleA}
              <br />
              <span className="text-gold">{hero.titleB}</span>
            </h1>
            <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-cocoa-soft">
              {hero.subtext}
            </p>
          </div>

          <div className="hero-in-delay relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
            <div className="animate-float relative overflow-hidden rounded-t-[170px] rounded-b-[28px] border border-line bg-cream shadow-[0_30px_60px_-20px_rgb(124_42_32/0.6)]">
              <Image
                src="/ghee-jar-warm.jpg"
                alt="Gheeya ঘি — কাচের জার"
                width={736}
                height={1308}
                priority
                className="aspect-[3/3.6] w-full object-cover object-[50%_28%]"
              />
            </div>
            <div className="absolute -left-3 top-12 rounded-full bg-ivory px-4 py-2 text-[14px] font-semibold text-cocoa shadow-[0_10px_24px_-8px_rgb(58_19_12/0.35)] sm:-left-6">
              ১০০ গ্রাম · ৩০০ গ্রাম
            </div>
            <div className="absolute -bottom-3 right-2 rounded-full bg-cocoa px-4 py-2 text-[14px] font-semibold text-ivory shadow-[0_10px_24px_-8px_rgb(58_19_12/0.45)] sm:right-4">
              ধীরে জ্বাল দেওয়া
            </div>
          </div>
        </div>
      </section>

      {/* ── গুণাগুণ — image-led editorial list: jar photo + numbered
           hairline rows. No card backgrounds anywhere in this section. ── */}
      <section id="benefits" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 md:px-8">
        <div className="reveal text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {benefits.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
            {benefits.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[16.5px] leading-relaxed text-cocoa-soft">
            {benefits.subtext}
          </p>
        </div>

        <div className="mt-8 grid items-start gap-8 md:mt-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div className="reveal overflow-hidden rounded-[24px] border border-line shadow-[0_28px_56px_-20px_rgb(124_42_32/0.6)]">
            <Image
              src="/ghee-jar-green.jpg"
              alt="Gheeya ঘি — জার"
              width={433}
              height={513}
              className="aspect-[4/3] w-full object-cover object-[50%_30%] md:aspect-[3/4]"
            />
          </div>
          <ul className="reveal">
            {benefits.items.map((b) => (
              <li
                key={b.title}
                className="group flex items-start gap-4 border-b border-line py-5 first:pt-0 last:border-b-0 md:py-6"
              >
                <span className="font-display text-[26px] font-bold leading-none text-gold/50 transition-colors duration-300 group-hover:text-gold">
                  {b.no}
                </span>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 group-hover:scale-110">
                  {iconMap[b.icon]}
                </span>
                <span>
                  <span className="block text-[17px] font-bold leading-snug text-cocoa transition-transform duration-300 group-hover:translate-x-1">
                    {b.title}
                  </span>
                  <span className="mt-0.5 block text-[14.5px] leading-snug text-cocoa-faint">
                    {b.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── পরিচিতি ── */}
      <section id="intro" className="relative overflow-hidden border-y border-line bg-ivory/60">
        <Image
          src="/ghee-jar-green.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="photo-warm object-cover object-[80%_50%] opacity-[0.15]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div className="reveal">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {intro.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {intro.heading}
            </h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-cocoa-soft">
              {intro.text}
            </p>
          </div>
          <div className="reveal flex flex-wrap content-start gap-2.5">
            {intro.points.map((p) => (
              <span
                key={p}
                className={`${fade} cursor-default rounded-full border border-line bg-ivory px-4 py-2 text-[14.5px] font-medium text-cocoa hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── প্যাক নির্বাচন করুন — HoneyNest-type selector, Gheeya's own design ── */}
      <section id="packs" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-10 md:px-8">
        <div className="reveal overflow-hidden rounded-[28px] border border-line bg-ivory shadow-[0_28px_56px_-20px_rgb(124_42_32/0.6)]">
          <div className="relative h-[230px] overflow-hidden bg-cream sm:h-[300px]">
            <Image
              key={pack}
              src={selected.img}
              alt={selected.alt}
              fill
              className="anim-swap object-cover object-[50%_30%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ivory to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-cocoa/85 px-4 py-1.5 text-[13.5px] font-semibold text-ivory backdrop-blur-sm">
              প্রিমিয়াম কাচের জার
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {packs.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[30px] font-semibold text-cocoa sm:text-[34px]">
              {pack} প্যাক
            </h2>
            <p className="mt-1.5 text-[16px] text-cocoa-soft">
              প্রিমিয়াম কাচের জার · ১০০% খাঁটি ঘি
            </p>

            <p className="mt-7 text-[15px] font-semibold text-cocoa">প্যাক নির্বাচন করুন:</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {packs.items.map((p) => {
                const active = pack === p.size;
                return (
                  <button
                    key={p.size}
                    type="button"
                    onClick={() => setPack(p.size)}
                    aria-pressed={active}
                    className={`relative rounded-[18px] border-2 p-4 text-left ${fade} hover:-translate-y-0.5 active:scale-[0.98] ${
                      active
                        ? "border-gold bg-butter/25 shadow-[0_10px_24px_-12px_rgb(166_58_46/0.6)]"
                        : "border-line bg-white hover:border-gold/60"
                    }`}
                  >
                    <span
                      className={`absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-[13px] text-white transition-all duration-300 ${
                        active ? "scale-100 bg-gold" : "scale-75 bg-line"
                      }`}
                    >
                      {active ? "✓" : ""}
                    </span>
                    <span className="block font-display text-[19px] font-bold text-cocoa">
                      {p.size}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-snug text-cocoa-faint">
                      {p.note}
                    </span>
                    {p.sale !== null && (
                      <span className="mt-2 block">
                        <span className="font-display text-[19px] font-bold text-gold">
                          {bnPrice(p.sale)}
                        </span>
                        {p.regular !== null && (
                          <span className="ml-2 text-[13.5px] text-cocoa-faint line-through">
                            {bnPrice(p.regular)}
                          </span>
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-line bg-cream/70 px-5 py-4">
              <div>
                <p className="font-display text-[24px] font-bold leading-none text-cocoa">
                  {qty}টি × {pack}
                </p>
                {selected.sale !== null ? (
                  <p className="mt-1.5 text-[15px] font-semibold text-cocoa">
                    মোট {bnPrice(selected.sale * qty)}
                    {selected.regular !== null && (
                      <>
                        {" "}
                        <span className="font-normal text-cocoa-faint line-through">
                          {bnPrice(selected.regular * qty)}
                        </span>
                        <span className="ml-2 rounded-full bg-gold px-2.5 py-0.5 text-[12.5px] font-bold text-white">
                          সাশ্রয় {bnPrice((selected.regular - selected.sale) * qty)}
                        </span>
                      </>
                    )}
                  </p>
                ) : (
                  <p className="mt-1.5 text-[14px] text-cocoa-faint">মূল্য কলের সময় জানানো হবে</p>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="mr-1 text-[14px] font-semibold text-cocoa">পরিমাণ</span>
                <button
                  type="button"
                  aria-label="কমান"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[18px] text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                >
                  −
                </button>
                <span className="w-8 text-center font-display text-[19px] font-bold text-cocoa">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="বাড়ান"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[18px] text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 rounded-[18px] border border-line bg-white/70 p-5">
              {benefits.items.slice(0, 4).map((b) => (
                <p key={b.title} className="flex items-start gap-2 text-[14.5px] leading-snug text-cocoa-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {b.title}
                </p>
              ))}
            </div>

            <a
              href="#order"
              className={`${fade} mt-6 block rounded-full bg-gold py-4 text-center text-[17px] font-semibold text-white hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_16px_32px_-12px_rgb(124_42_32/0.7)] active:scale-[0.98]`}
            >
              অর্ডার করুন — {pack}
            </a>
          </div>
        </div>
      </section>

      {/* ── Showcase — photo background with warm filter, solid cream (no glass) ── */}
      <section className="relative overflow-hidden border-y border-line">
        <Image
          src="/ghee-jar-warm.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="photo-warm object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/60 to-cream/85" />
        <div className="reveal relative mx-auto max-w-3xl px-5 py-10 text-center">
          <p className="font-display text-[22px] font-medium italic text-gold-deep sm:text-[26px]">
            “{site.tagline}”
          </p>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {showcase.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[40px]">
            {showcase.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[17px] text-cocoa-soft">{showcase.text}</p>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-6 rounded-[20px] border border-line bg-ivory px-6 py-5 shadow-[0_18px_40px_-20px_rgb(124_42_32/0.4)]">
            <div className="text-left">
              <p className="font-display text-[26px] font-bold text-cocoa">{showcase.size}</p>
              <p className="text-[13.5px] text-cocoa-faint">{showcase.sizeNote}</p>
            </div>
            <div className="h-12 w-px bg-line" />
            <div className="text-left">
              <p className="font-display text-[18px] font-semibold text-cocoa">মূল্য</p>
              {packs.items.every((p) => p.sale === null) ? (
                <p className="text-[13.5px] leading-snug text-cocoa-faint">কলের সময় জানানো হবে</p>
              ) : (
                <p className="text-[13.5px] leading-snug text-cocoa-faint">
                  {packs.items
                    .map((p) => (p.sale !== null ? `${p.size} ${bnPrice(p.sale)}` : `${p.size} —`))
                    .join(" · ")}
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {showcase.uses.map((u) => (
              <span
                key={u}
                className={`${fade} cursor-default rounded-full border border-cocoa/25 bg-ivory/70 px-4 py-2 text-[14px] font-medium text-cocoa hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep`}
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── কেন Gheeya ── */}
      <section id="why" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 md:px-8">
        <div className="reveal text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {why.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
            {why.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {why.items.map((w, i) => (
            <article
              key={w.title}
              className={`reveal lift group rounded-[24px] border border-line bg-ivory p-7 ${fade} hover:border-gold/50`}
            >
              <p className="font-display text-[15px] font-bold text-gold transition-colors group-hover:text-gold-deep">
                ০{i + 1}
              </p>
              <h3 className="mt-3 font-display text-[21px] font-semibold text-cocoa">{w.title}</h3>
              <p className="mt-2 text-[15.5px] leading-relaxed text-cocoa-soft">{w.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── জিজ্ঞাসা ── */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-10 md:px-8">
        <div className="reveal text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            জিজ্ঞাসা
          </p>
          <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
            জানতে চান?
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className={`reveal overflow-hidden rounded-[20px] border bg-ivory ${fade} ${
                  open ? "border-gold/60 shadow-[0_14px_32px_-18px_rgb(124_42_32/0.5)]" : "border-line"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16.5px] font-semibold text-cocoa">{f.q}</span>
                  <span
                    className={`faq-chevron ${open ? "open" : ""} flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] ${
                      open ? "border-gold bg-gold text-white" : "border-line text-cocoa-soft"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{ maxHeight: open ? `${faqHeights[i] ?? 0}px` : "0px" }}
                  className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <div
                    ref={(el) => {
                      faqRefs.current[i] = el;
                    }}
                  >
                    <p className="px-6 pb-5 text-[15.5px] leading-relaxed text-cocoa-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Order — with the product being bought ── */}
      <section id="order" className="relative scroll-mt-24 overflow-hidden border-t border-line">
        <Image
          src="/ghee-jar-warm.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="photo-warm object-cover object-[50%_20%] opacity-[0.14]"
        />
        <div className="relative mx-auto max-w-2xl px-5 py-10 md:px-8">
          <div className="reveal text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {order.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {order.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-cocoa-soft">
              {order.note}
            </p>
          </div>

          {done ? (
            <div className="reveal anim-swap mt-8 rounded-[24px] border border-gold/40 bg-ivory p-8 text-center shadow-[0_24px_48px_-24px_rgb(124_42_32/0.5)]">
              <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-[26px] text-white">
                ✓
              </p>
              <h3 className="mt-4 font-display text-[24px] font-semibold text-cocoa">
                ধন্যবাদ, {name}!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-[15.5px] leading-relaxed text-cocoa-soft">
                আপনার অর্ডারটি পেয়েছি — অর্ডার নম্বর{" "}
                <span className="font-semibold text-cocoa">{orderId}</span>। আমরা শীঘ্রই{" "}
                {phone} নম্বরে কল করে মূল্য ও ডেলিভারি নিশ্চিত করব।
              </p>
              <p className="mt-3 text-[14.5px] text-cocoa-faint">
                {qty}টি × {pack} প্যাক
              </p>
              {selected.sale !== null && (
                <p className="mt-1 text-[15px] font-semibold text-gold">
                  মোট {bnPrice(selected.sale * qty)}
                </p>
              )}
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="reveal mt-8 overflow-hidden rounded-[24px] border border-line bg-ivory shadow-[0_28px_56px_-20px_rgb(124_42_32/0.6)]"
            >
              {/* Product being bought */}
              <div className="flex items-center gap-4 border-b border-line bg-cream/60 p-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-line bg-cream">
                  <Image
                    key={pack}
                    src={selected.img}
                    alt={selected.alt}
                    fill
                    className="anim-swap object-cover object-[50%_25%]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[19px] font-bold leading-tight text-cocoa">
                    Gheeya ঘি
                  </p>
                  <p className="mt-0.5 text-[14.5px] text-cocoa-soft">
                    {pack} প্যাক · {qty}টি
                  </p>
                  {selected.sale !== null ? (
                    <p className="mt-0.5 text-[13.5px] font-semibold text-gold">
                      {bnPrice(selected.sale)} × {qty} = {bnPrice(selected.sale * qty)}
                    </p>
                  ) : (
                    <p className="mt-0.5 text-[13.5px] text-cocoa-faint">
                      মূল্য কলের সময় জানানো হবে
                    </p>
                  )}
                </div>
                <span className="ml-auto hidden rounded-full bg-gold px-3.5 py-1.5 text-[12.5px] font-semibold text-white sm:block">
                  ১০০% খাঁটি
                </span>
              </div>

              <div className="space-y-4 p-6 sm:p-7">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    আপনার নাম
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: রহিম উদ্দিন"
                    className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none transition-all placeholder:text-cocoa-faint/70 focus:border-gold focus:ring-4 focus:ring-gold/15"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    মোবাইল নম্বর
                  </label>
                  <input
                    id="phone"
                    required
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none transition-all placeholder:text-cocoa-faint/70 focus:border-gold focus:ring-4 focus:ring-gold/15"
                  />
                </div>
                <div>
                  <span className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    প্যাক বেছে নিন
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {packs.items.map((p) => (
                      <button
                        key={p.size}
                        type="button"
                        onClick={() => setPack(p.size)}
                        aria-pressed={pack === p.size}
                        className={`rounded-[14px] border px-4 py-3 text-[16px] font-semibold ${fade} hover:-translate-y-0.5 active:scale-[0.98] ${
                          pack === p.size
                            ? "border-gold bg-butter/30 text-cocoa shadow-[0_8px_20px_-10px_rgb(166_58_46/0.6)]"
                            : "border-line bg-white text-cocoa-soft hover:border-gold/60"
                        }`}
                      >
                        {p.size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-[14px] border border-line bg-cream/70 px-4 py-3">
                  <span className="text-[15px] font-semibold text-cocoa">
                    প্যাকের সংখ্যা · {pack} করে
                  </span>
                  <span className="flex items-center gap-1.5">
                    <button
                      type="button"
                      aria-label="কমান"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[18px] text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-display text-[19px] font-bold text-cocoa">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="বাড়ান"
                      onClick={() => setQty((q) => Math.min(9, q + 1))}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[18px] text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                    >
                      +
                    </button>
                  </span>
                </div>
                <div>
                  <label htmlFor="address" className="mb-1.5 block text-[15px] font-semibold text-cocoa">
                    ঠিকানা
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="বাড়ি/ফ্ল্যাট, রাস্তা, এলাকা, জেলা"
                    className="w-full resize-none rounded-[14px] border border-line bg-white px-4 py-3 text-[16px] text-cocoa outline-none transition-all placeholder:text-cocoa-faint/70 focus:border-gold focus:ring-4 focus:ring-gold/15"
                  />
                </div>
                <button
                  type="submit"
                  className={`${fade} w-full rounded-full bg-gold py-4 text-[17px] font-semibold text-white hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_16px_32px_-12px_rgb(124_42_32/0.7)] active:scale-[0.98]`}
                >
                  অর্ডার নিশ্চিত করুন — {qty}টি × {pack}
                  {selected.sale !== null ? ` · মোট ${bnPrice(selected.sale * qty)}` : ""}
                </button>
                <p className="text-center text-[13.5px] leading-relaxed text-cocoa-faint">
                  ফর্মটি পূরণ করুন — আমরা কল করে মূল্য ও ডেলিভারি নিশ্চিত করব।
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cocoa text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-[24px] font-bold">Gheeya <span className="text-[15px] text-butter">ঘি</span></p>
              <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-ivory/70">
                {site.tagline} — খাঁটি এ২ গরুর ঘি, ধীরে জ্বাল দেওয়া।
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ivory/80">
              <a href="#benefits" className={`${fade} hover:text-butter`}>গুণাগুণ</a>
              <a href="#intro" className={`${fade} hover:text-butter`}>পরিচিতি</a>
              <a href="#why" className={`${fade} hover:text-butter`}>কেন Gheeya</a>
              <a href="#faq" className={`${fade} hover:text-butter`}>জিজ্ঞাসা</a>
              <a href="#order" className={`${fade} hover:text-butter`}>অর্ডার করুন</a>
            </nav>
          </div>
          <div className="mt-10 border-t border-ivory/15 pt-6 text-center text-[13.5px] text-ivory/60">
            <p>{site.contactNote}</p>
            <p className="mt-2">© ২০২৬ Gheeya · সর্বস্বত্ব সংরক্ষিত</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
