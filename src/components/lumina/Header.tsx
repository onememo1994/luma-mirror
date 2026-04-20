import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-blush/20 ring-1 ring-blush/40 group-hover:bg-blush/30 transition">
            <Sparkles className="w-4 h-4 text-blush" />
          </span>
          <span className="font-serif text-2xl tracking-wide text-ivory">Lumina</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ivory/80 hover:text-blush transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-blush after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center text-xs tracking-widest text-ivory/70">
            <button
              onClick={() => setLang("EN")}
              className={lang === "EN" ? "text-blush" : "hover:text-ivory"}
            >
              EN
            </button>
            <span className="mx-2 opacity-40">|</span>
            <button
              onClick={() => setLang("AR")}
              className={lang === "AR" ? "text-blush" : "hover:text-ivory"}
            >
              AR
            </button>
          </div>
          <a
            href="#products"
            className="px-6 py-2.5 rounded-full bg-blush text-primary-foreground text-sm font-medium hover:bg-blush/90 transition shadow-lg shadow-blush/10"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ivory/80 hover:text-blush"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-3 rounded-full bg-blush text-primary-foreground text-center font-medium"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
