import { Eye, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/store/cart";

const products = [
  {
    id: "radiance-glow-serum",
    name: "Radiance Glow Serum",
    category: "Skincare",
    price: 89,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "velvet-lip-elixir",
    name: "Velvet Lip Elixir",
    category: "Makeup",
    price: 42,
    badge: "New",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "pearl-luminosity-cream",
    name: "Pearl Luminosity Cream",
    category: "Skincare",
    price: 124,
    badge: "Award Winner",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "golden-hour-bronzer",
    name: "Golden Hour Bronzer",
    category: "Makeup",
    price: 56,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1631214524020-3c8c9f3a0b2e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rose-petal-toner",
    name: "Rose Petal Toner",
    category: "Skincare",
    price: 48,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "midnight-repair-mask",
    name: "Midnight Repair Mask",
    category: "Skincare",
    price: 78,
    badge: "Limited",
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
  },
];

export const Products = () => {
  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.open);

  return (
    <section id="products" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="reveal max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-blush">Signature Collection</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl text-ivory text-balance">
            Couture for your <span className="italic">complexion.</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <article
              key={p.id}
              className="reveal group hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-sm">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] tracking-widest uppercase text-blush border border-blush/30">
                  {p.badge}
                </span>
                <button
                  aria-label="Quick view"
                  onClick={() => toast(`${p.name} — quick view coming soon`)}
                  className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full bg-background/80 backdrop-blur text-ivory opacity-0 group-hover:opacity-100 transition hover:bg-blush hover:text-primary-foreground"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                  <button
                    onClick={() => {
                      addItem({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        img: p.img,
                        category: p.category,
                      });
                      toast.success(`${p.name} added to bag`, {
                        action: { label: "View", onClick: () => openCart() },
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blush text-primary-foreground text-sm font-medium hover:bg-blush/90"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-ivory/50">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-ivory">{p.name}</h3>
                </div>
                <p className="font-serif text-xl text-blush">${p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
