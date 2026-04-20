import { useEffect, useState } from "react";
import { Sparkles, Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart";

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
  const openCart = useCart((s) => s.open);
  const cartCount = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));

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
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative w-10 h-10 grid place-items-center rounded-full border border-ivory/20 text-ivory hover:border-blush hover:text-blush transition"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-blush text-primary-foreground text-[10px] font-semibold">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#products"
            className="px-6 py-2.5 rounded-full bg-blush text-primary-foreground text-sm font-medium hover:bg-blush/90 transition shadow-lg shadow-blush/10 shine-btn rose-gold-glow"
          >
            Shop Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative w-10 h-10 grid place-items-center rounded-full border border-ivory/20 text-ivory"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-blush text-primary-foreground text-[10px] font-semibold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="text-ivory"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
