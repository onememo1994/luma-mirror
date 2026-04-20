import { Sparkles, Instagram, Facebook, Heart } from "lucide-react";

const links = ["Privacy", "Terms", "Shipping", "Returns"];
const payments = ["Visa", "MC", "PayPal", "Apple"];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border/60">
      <div className="container">
        <div className="grid lg:grid-cols-3 items-start gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-blush/20 ring-1 ring-blush/40">
                <Sparkles className="w-4 h-4 text-blush" />
              </span>
              <span className="font-serif text-2xl text-ivory">Lumina.</span>
            </div>
            <p className="mt-4 text-ivory/60 text-sm">
              Luxury beauty rooted in nature.
            </p>
          </div>

          {/* Inline link list */}
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-ivory/70 hover:text-blush transition text-sm"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex lg:justify-end gap-3">
            {[Instagram, Facebook, Heart].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 rounded-full border border-border hover:border-blush hover:text-blush text-ivory/70 transition grid place-items-center hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ivory/50">
          <p>© 2026 Lumina Beauty. All rights reserved.</p>
          <div className="flex gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="px-3 py-1 rounded-full border border-border/70 text-[10px] tracking-widest uppercase text-ivory/60"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
