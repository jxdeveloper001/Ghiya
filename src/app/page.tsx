"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { benefits, faqs, hero, intro, order, packs, reviews, site, videoSection } from "@/data/site";

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

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Pause when scrolled away so it only plays while being watched.
  useEffect(() => {
    if (!inView) videoRef.current?.pause();
  }, [inView]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <section id="video" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-[60px] md:px-8">
      <div className="reveal text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          {videoSection.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
          {videoSection.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-cocoa-soft">
          {videoSection.subtext}
        </p>
      </div>
      <div
        ref={boxRef}
        className="reveal relative mx-auto mt-8 max-w-[420px] overflow-hidden rounded-[28px] border border-line bg-cocoa shadow-[0_28px_56px_-20px_rgb(58_36_5/0.55)]"
      >
        <video
          ref={videoRef}
          src="/gheeya-video.mp4"
          poster="/ghee-jar.jpg"
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="aspect-[4/5] w-full object-cover"
        />
        {playing ? (
          <button
            type="button"
            onClick={toggle}
            aria-label="ভিডিও থামান"
            className={`${fade} absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-cocoa/80 text-ivory backdrop-blur-sm hover:bg-cocoa active:scale-95`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={toggle}
            aria-label="ভিডিও চালান"
            className={`absolute inset-0 flex items-center justify-center bg-cocoa/15 transition-all duration-500 hover:bg-cocoa/25 ${
              inView ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-90"
            }`}
          >
            <span className="btn-layer-gold flex h-20 w-20 items-center justify-center rounded-full bg-gold text-white">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}

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

  // ── Reviews slider: auto-advances right-to-left (track moves left),
  //    infinitely — the list is rendered twice and the position snaps
  //    back to 0 without animation after the duplicated first card.
  //    Prev/next buttons move one card at a time.
  const reviewCount = reviews.items.length;
  const [revPos, setRevPos] = useState(0);
  const [revSnap, setRevSnap] = useState(false);
  const [revPaused, setRevPaused] = useState(false);
  const [revStep, setRevStep] = useState(0);
  const revTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const track = revTrackRef.current;
      if (track && track.children.length > 1) {
        const first = track.children[0] as HTMLElement;
        const second = track.children[1] as HTMLElement;
        setRevStep(second.offsetLeft - first.offsetLeft);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (revPos >= reviewCount) {
      const t = setTimeout(() => {
        setRevSnap(true);
        setRevPos(0);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [revPos, reviewCount]);

  useEffect(() => {
    if (revPaused) return;
    const t = setInterval(() => {
      setRevSnap(false);
      setRevPos((p) => p + 1);
    }, 3000);
    return () => clearInterval(t);
  }, [revPaused]);

  const revNext = () => {
    setRevSnap(false);
    setRevPos((p) => p + 1);
  };
  const revPrev = () => {
    if (revPos === 0) {
      setRevSnap(true);
      setRevPos(reviewCount);
      setTimeout(() => {
        setRevSnap(false);
        setRevPos(reviewCount - 1);
      }, 40);
    } else {
      setRevSnap(false);
      setRevPos((p) => p - 1);
    }
  };

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
            <a href="#faq" className={`${fade} hover:text-gold`}>জিজ্ঞাসা</a>
          </nav>
          <a
            href="#order"
            className={`${fade} btn-layer-gold btn-shine rounded-full bg-gold px-5 py-2.5 text-[15px] font-semibold text-white hover:-translate-y-0.5 hover:bg-gold-deep active:scale-95`}
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

      {/* ── Hero — centered, like the reference image: golden-yellow
           background, minimal text on the yellow, jar in the middle ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/hero-bg-gold.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-[50%_35%]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-[60px] pt-[60px] text-center">
          <div className="hero-in">
            <p className="text-[15px] font-semibold tracking-wide text-ivory/85">
              {hero.eyebrow}
            </p>
            <h1 className="mt-2.5 font-display text-[38px] font-semibold leading-[1.2] text-ivory sm:text-[52px] md:text-[58px]">
              {hero.titleA}
              <br />
              <span className="text-ivory">{hero.titleB}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[16.5px] leading-relaxed text-ivory/90">
              {hero.subtext}
            </p>
          </div>
          {/* Jar — no box, no frame: just the picture, feathered into
              the background, a little bigger */}
          <div className="hero-in-delay animate-float mt-9 w-[300px] sm:w-[380px]">
            <Image
              src="/ghee-jar.jpg"
              alt={hero.jarAlt}
              width={1200}
              height={1200}
              priority
              className="img-feather aspect-square w-full object-cover"
            />
          </div>
          <p className="hero-in-delay mt-7 text-[16px] font-semibold text-cocoa">
            {packs.items
              .map((p) => (p.sale !== null ? `${p.size} ${bnPrice(p.sale)}` : p.size))
              .join(" · ")}
          </p>
          <a
            href="#order"
            className={`${fade} btn-layer-gold btn-shine hero-in-delay mt-4 rounded-full bg-gold px-8 py-3.5 text-[16px] font-semibold text-white hover:-translate-y-0.5 hover:bg-gold-deep active:scale-95`}
          >
            অর্ডার করুন
          </a>
        </div>
      </section>

      {/* ── গুণাগুণ — paint-splash style: product in the middle,
           4 hand-painted blobs around it, dotted connectors (desktop) ── */}
      <section id="benefits" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-[60px] md:px-8">
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

        <div className="reveal relative mx-auto mt-10 max-w-5xl md:mt-12 md:h-[560px]">
          {/* Dotted connectors (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 560"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          >
            <g stroke="#8a5e00" strokeWidth="2" fill="none" strokeDasharray="2 7" strokeLinecap="round" opacity="0.55">
              <path d="M 250 110 C 320 130, 360 160, 395 200" />
              <path d="M 250 450 C 320 430, 360 400, 395 360" />
              <path d="M 750 110 C 680 130, 640 160, 605 200" />
              <path d="M 750 450 C 680 430, 640 400, 605 360" />
            </g>
          </svg>

          {/* Jar — centre on desktop, on top on phone */}
          <div className="animate-float relative z-10 mx-auto w-[200px] overflow-hidden rounded-[28px] shadow-[0_28px_56px_-20px_rgb(58_36_5/0.55)] md:absolute md:left-1/2 md:top-1/2 md:w-[230px] md:-translate-x-1/2 md:-translate-y-1/2">
            <Image
              src="/ghee-jar.jpg"
              alt="Gheeya ঘি — জার"
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Paint blobs */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-0 md:block md:gap-0">
            {benefits.items.map((b, i) => (
              <div
                key={b.title}
                className={`paint-blob group bg-white px-6 py-6 text-center shadow-[0_18px_36px_-18px_rgb(138_94_0/0.5)] ${fade} hover:-translate-y-1 md:absolute md:w-[290px] md:px-6 md:py-5 ${
                  [
                    "md:left-0 md:top-[2%] md:-rotate-2",
                    "md:left-0 md:top-[60%] md:rotate-1",
                    "md:right-0 md:top-[2%] md:rotate-2",
                    "md:right-0 md:top-[60%] md:-rotate-1",
                  ][i] ?? ""
                }`}
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold transition-transform duration-300 group-hover:scale-110">
                  {iconMap[b.icon]}
                </span>
                <span className="mt-2.5 block font-display text-[19px] font-bold leading-snug text-cocoa">
                  {b.title}
                </span>
                <span className="mt-1 block text-[14px] leading-snug text-cocoa-faint">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── পরিচিতি — dark yellow band ── */}
      <section id="intro" className="relative overflow-hidden bg-gold">
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-[60px] md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div className="reveal">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory/90">
              {intro.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {intro.heading}
            </h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-cocoa">
              {intro.text}
            </p>
          </div>
          <div className="reveal flex flex-wrap content-start gap-2.5">
            {intro.points.map((p) => (
              <span
                key={p}
                className={`${fade} cursor-default rounded-full border border-ivory/50 bg-ivory/90 px-4 py-2 text-[14.5px] font-medium text-cocoa hover:-translate-y-0.5 hover:border-ivory`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── প্যাক নির্বাচন করুন — HoneyNest-type selector, Gheeya's own design ── */}
      <section id="packs" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-[60px] md:px-8">
        <div className="reveal overflow-hidden rounded-[28px] border border-line bg-ivory shadow-[0_28px_56px_-20px_rgb(138_94_0/0.55)]">
          <div className="flex justify-center border-b border-line bg-cream/60 px-5 pb-2 pt-6">
            <div className="relative w-[170px] sm:w-[190px]">
              <Image
                key={pack}
                src={selected.img}
                alt={selected.alt}
                width={1200}
                height={1200}
                className="anim-swap img-feather aspect-square w-full object-contain"
              />
            </div>
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
                        ? "border-gold bg-butter/25 shadow-[0_10px_24px_-12px_rgb(182_124_2/0.6)]"
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
              className={`${fade} btn-layer-cocoa btn-shine mt-6 block rounded-full bg-cocoa py-4 text-center text-[17px] font-semibold text-ivory hover:-translate-y-0.5 active:scale-[0.98]`}
            >
              অর্ডার করুন — {pack}
            </a>
          </div>
        </div>
      </section>

      {/* ── রিভিউ — auto right-to-left infinite slider + prev/next buttons ── */}
      <section id="reviews" className="scroll-mt-24 bg-cream-deep/60 py-[60px]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              {reviews.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {reviews.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-cocoa-faint md:mx-0">
              {reviews.subtext}
            </p>
          </div>
          <div className="mx-auto flex gap-3 md:mx-0">
            <button
              type="button"
              onClick={revPrev}
              aria-label="আগের রিভিউ"
              className={`${fade} flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ivory text-gold-deep shadow-[0_10px_20px_-10px_rgb(138_94_0/0.5)] hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white active:scale-95`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={revNext}
              aria-label="পরের রিভিউ"
              className={`${fade} flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ivory text-gold-deep shadow-[0_10px_20px_-10px_rgb(138_94_0/0.5)] hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white active:scale-95`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="reveal mt-8 overflow-hidden md:mt-10"
          onMouseEnter={() => setRevPaused(true)}
          onMouseLeave={() => setRevPaused(false)}
        >
          <div
            ref={revTrackRef}
            className={`flex gap-4 ${revSnap ? "" : "transition-transform duration-700 ease-in-out"}`}
            style={{ transform: `translateX(-${revPos * revStep}px)` }}
          >
            {[...reviews.items, ...reviews.items].map((r, i) => (
              <figure
                key={i}
                className="w-[85%] shrink-0 rounded-[20px] border border-line bg-ivory p-6 shadow-[0_18px_36px_-20px_rgb(138_94_0/0.45)] sm:w-[47%] lg:w-[31.5%]"
              >
                <div className="flex gap-0.5 text-[17px] text-gold" aria-label={`${r.stars} / ৫`}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span key={s} className={s < r.stars ? "" : "text-line"}>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-3 text-[15.5px] leading-relaxed text-cocoa">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-[16px] font-bold text-gold-deep">
                    {r.name[0]}
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-cocoa">{r.name}</span>
                    <span className="block text-[13px] text-cocoa-faint">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ── ভিডিও — scroll into view: play button appears, click to play ── */}
      <VideoSection />

      {/* ── জিজ্ঞাসা ── */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-[60px] md:px-8">
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
                  open ? "border-gold/60 shadow-[0_14px_32px_-18px_rgb(138_94_0/0.5)]" : "border-line"
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
      <section id="order" className="relative scroll-mt-24 overflow-hidden bg-gold">
        <div className="relative mx-auto max-w-2xl px-5 py-[60px] md:px-8">
          <div className="reveal text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory/90">
              {order.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[30px] font-semibold text-cocoa sm:text-[38px]">
              {order.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-cocoa">
              {order.note}
            </p>
          </div>

          {done ? (
            <div className="reveal anim-swap mt-8 rounded-[24px] border border-gold/40 bg-ivory p-8 text-center shadow-[0_24px_48px_-24px_rgb(138_94_0/0.5)]">
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
              className="reveal mt-8 overflow-hidden rounded-[24px] border border-line bg-ivory shadow-[0_28px_56px_-20px_rgb(138_94_0/0.6)]"
            >
              {/* Product being bought */}
              <div className="flex items-center gap-4 border-b border-line bg-cream/60 p-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-line bg-cream">
                  <Image
                    key={pack}
                    src={selected.img}
                    alt={selected.alt}
                    fill
                    className="anim-swap img-feather object-contain p-1"
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
                  <label htmlFor="name" className="mb-1.5 block font-display text-[16px] font-semibold text-cocoa">
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
                  <label htmlFor="phone" className="mb-1.5 block font-display text-[16px] font-semibold text-cocoa">
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
                  <span className="mb-1.5 block font-display text-[16px] font-semibold text-cocoa">
                    প্যাক বেছে নিন
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {packs.items.map((p) => (
                      <button
                        key={p.size}
                        type="button"
                        onClick={() => setPack(p.size)}
                        aria-pressed={pack === p.size}
                        className={`flex flex-col items-center rounded-[14px] border px-4 py-3.5 ${fade} hover:-translate-y-0.5 active:scale-[0.98] ${
                          pack === p.size
                            ? "border-gold bg-butter/30 shadow-[0_8px_20px_-10px_rgb(182_124_2/0.6)]"
                            : "border-line bg-white hover:border-gold/60"
                        }`}
                      >
                        <span className="text-[16px] font-semibold leading-none text-cocoa">
                          {p.size}
                        </span>
                        {p.sale !== null && (
                          <span className="mt-1.5 leading-none">
                            <span className="font-display text-[17px] font-bold text-gold">
                              {bnPrice(p.sale)}
                            </span>
                            {p.regular !== null && (
                              <span className="ml-1.5 text-[13px] text-cocoa-faint line-through">
                                {bnPrice(p.regular)}
                              </span>
                            )}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-[14px] border border-line bg-cream/70 px-4 py-3">
                  <span className="font-display text-[16px] font-semibold text-cocoa">
                    প্যাকের সংখ্যা
                  </span>
                  <span className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="কমান"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-[20px] leading-none text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-display text-[20px] font-bold text-cocoa">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="বাড়ান"
                      onClick={() => setQty((q) => Math.min(9, q + 1))}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-[20px] leading-none text-cocoa ${fade} hover:border-gold hover:text-gold active:scale-90`}
                    >
                      +
                    </button>
                  </span>
                </div>
                <div>
                  <label htmlFor="address" className="mb-1.5 block font-display text-[16px] font-semibold text-cocoa">
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
                  className={`${fade} btn-layer-deep btn-shine flex w-full flex-col items-center rounded-[18px] bg-gold-deep py-3.5 text-ivory hover:-translate-y-0.5 active:scale-[0.98]`}
                >
                  <span className="font-display text-[18px] font-bold leading-tight">
                    অর্ডার নিশ্চিত করুন
                  </span>
                  <span className="mt-0.5 text-[13.5px] font-medium leading-tight text-white/85">
                    {qty}টি × {pack}
                    {selected.sale !== null ? ` · মোট ${bnPrice(selected.sale * qty)}` : ""}
                  </span>
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
        <div className="mx-auto max-w-6xl px-5 py-[60px] md:px-8">
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
