import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Expertise" },
  { value: 97, suffix: "%", label: "Customer Satisfaction" },
  { value: 100, suffix: "%", label: "Natural Ingredients" },
];

const useCountUp = (target: number, start: boolean, duration = 1800) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
};

const Stat = ({ value, suffix, label, inView, delay }: { value: number; suffix: string; label: string; inView: boolean; delay: number }) => {
  const n = useCountUp(value, inView);
  return (
    <div
      className="text-center md:text-left opacity-0 translate-y-6 transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        ...(inView ? { opacity: 1, transform: "none" } : {}),
      }}
    >
      <div className="font-serif text-4xl md:text-5xl text-blush leading-none">
        {n}
        {suffix}
      </div>
      <div className="mt-3 text-[10px] tracking-[0.25em] uppercase text-ivory/60">
        {label}
      </div>
    </div>
  );
};

export const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        {/* Image — slides in from left */}
        <div
          className="relative opacity-0 -translate-x-10 transition-all duration-1000 ease-out"
          style={inView ? { opacity: 1, transform: "none" } : {}}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm group">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
              alt="Lumina Beauty founder portrait"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Quote card — overlaps bottom-right */}
          <div
            className="absolute -bottom-2 right-4 md:right-8 max-w-xs bg-secondary/90 backdrop-blur-md border border-blush/20 rounded-sm px-6 py-5 shadow-2xl shadow-background/60 opacity-0 translate-y-6 transition-all duration-1000"
            style={inView ? { opacity: 1, transform: "none", transitionDelay: "600ms" } : {}}
          >
            <p className="font-serif italic text-ivory/90 text-base leading-snug">
              "Beauty is not about perfection. It's about confidence in your own luminous skin."
            </p>
            <p className="mt-3 text-[10px] tracking-[0.3em] text-blush uppercase">
              — Lumina Founder
            </p>
          </div>
        </div>

        {/* Text — slides in from right */}
        <div
          className="opacity-0 translate-x-10 transition-all duration-1000 ease-out"
          style={inView ? { opacity: 1, transform: "none", transitionDelay: "200ms" } : {}}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-blush">Our Story</p>
          <h2 className="mt-5 font-serif font-normal text-5xl md:text-6xl leading-[1.05] text-ivory text-balance">
            Born from Nature,
            <br />
            Refined by Science.
          </h2>
          <p className="mt-7 text-ivory/70 leading-relaxed max-w-xl">
            Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories, where ancient remedies meet modern dermatology to create products that don't just enhance your beauty — they reveal it.
          </p>

          {/* Hairline divider above stats */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-blush/40 to-transparent" />

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <Stat
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                inView={inView}
                delay={400 + i * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
