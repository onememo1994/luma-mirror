import { Sparkles, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: ["Skincare", "Makeup", "Hair Care", "Body Care", "Gift Sets"],
  },
  {
    title: "About",
    links: ["Our Story", "Sustainability", "Ingredients", "Press", "Careers"],
  },
  {
    title: "Help",
    links: ["Contact", "Shipping", "Returns", "FAQ", "Track Order"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 border-t border-border/60">
      <div className="container grid lg:grid-cols-[1.4fr_2fr] gap-16">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-blush/20 ring-1 ring-blush/40">
              <Sparkles className="w-4 h-4 text-blush" />
            </span>
            <span className="font-serif text-2xl text-ivory">Lumina</span>
          </div>
          <p className="mt-5 text-ivory/60 max-w-sm leading-relaxed">
            Luxury natural beauty crafted to reveal the radiance already within you.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-blush hover:text-blush text-ivory/70 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs tracking-[0.3em] uppercase text-blush">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-ivory/70 hover:text-blush transition text-sm">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-16 pt-6 border-t border-border/50 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} Lumina Beauty. All rights reserved.</p>
        <p className="tracking-widest uppercase">Crafted with care · Paris</p>
      </div>
    </footer>
  );
};
