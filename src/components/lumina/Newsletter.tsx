import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    toast.success("Welcome to the Glow Club ✨");
    setEmail("");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div
          ref={ref}
          className="relative mx-auto max-w-5xl rounded-3xl border border-blush/25 bg-gradient-to-b from-secondary/70 via-background/80 to-secondary/40 px-6 py-16 md:px-16 md:py-24 text-center overflow-hidden transition-all duration-1000 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(40px)",
            boxShadow: "0 30px 80px -40px hsl(var(--blush) / 0.25)",
          }}
        >
          {/* Soft radial glow behind */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, hsl(var(--blush) / 0.18), transparent 60%)",
            }}
          />

          {/* Decorative L-shaped corner brackets */}
          {[
            { pos: "top-4 left-4", borders: "border-t border-l rounded-tl-2xl" },
            { pos: "top-4 right-4", borders: "border-t border-r rounded-tr-2xl" },
            { pos: "bottom-4 left-4", borders: "border-b border-l rounded-bl-2xl" },
            { pos: "bottom-4 right-4", borders: "border-b border-r rounded-br-2xl" },
          ].map((c) => (
            <span
              key={c.pos}
              className={`absolute ${c.pos} w-10 h-10 ${c.borders} border-blush/40 pointer-events-none`}
            />
          ))}

          <div className="relative">
            <p
              className="text-[11px] tracking-[0.4em] uppercase text-blush opacity-0 -translate-y-2 transition-all duration-700"
              style={inView ? { opacity: 1, transform: "none", transitionDelay: "150ms" } : {}}
            >
              Join the Club
            </p>

            <h2
              className="mt-5 font-serif font-normal text-4xl md:text-6xl leading-[1.05] text-ivory text-balance max-w-3xl mx-auto opacity-0 translate-y-4 transition-all duration-900"
              style={inView ? { opacity: 1, transform: "none", transitionDelay: "300ms" } : {}}
            >
              Join the Lumina <span className="italic text-blush/90">Glow Club.</span>
            </h2>

            <p
              className="mt-6 text-ivory/70 leading-relaxed max-w-xl mx-auto opacity-0 translate-y-4 transition-all duration-900"
              style={inView ? { opacity: 1, transform: "none", transitionDelay: "500ms" } : {}}
            >
              Exclusive access to new launches, member-only offers, and personalized beauty rituals delivered to your inbox.
            </p>

            <form
              onSubmit={submit}
              noValidate
              className="mt-10 max-w-2xl mx-auto opacity-0 translate-y-4 transition-all duration-900"
              style={inView ? { opacity: 1, transform: "none", transitionDelay: "700ms" } : {}}
            >
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Your email address"
                  aria-invalid={!!error}
                  className="flex-1 h-14 px-6 rounded-full bg-background/70 border border-blush/30 focus:border-blush focus:outline-none focus:ring-2 focus:ring-blush/30 text-ivory placeholder:text-ivory/40 transition-all"
                />
                <button
                  type="submit"
                  className="h-14 px-10 rounded-full bg-gradient-to-r from-blush via-[hsl(var(--champagne))] to-blush text-primary-foreground text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shine-btn rose-gold-glow hover:scale-[1.03] active:scale-[0.98]"
                >
                  Join the Glow
                </button>
              </div>
              {error && (
                <p className="mt-3 text-sm text-destructive text-left pl-2 animate-fade-in">
                  {error}
                </p>
              )}
              <p className="mt-6 text-[10px] tracking-[0.35em] uppercase text-ivory/50">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
