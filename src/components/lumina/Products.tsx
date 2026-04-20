import { ShoppingBag, Eye, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Radiance Glow Serum",
    category: "Intense Hydration",
    price: "$85.00",
    image: "/assets/serum.png",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Velvet Lip Elixir",
    category: "Natural Shine",
    price: "$45.00",
    image: "/assets/elixir.png",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Pearl Luminosity Cream",
    category: "Skin Silkering",
    price: "$120.00",
    image: "/assets/cream.png",
    tag: "Premium",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-20 -right-20 text-[15rem] font-display text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        Lumina
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-rose-gold text-[10px] tracking-[0.4em] uppercase mb-4 block">Signature Collection</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display text-ivory leading-tight">
              Crafted with <span className="italic">Pure Brilliance.</span>
            </h2>
          </div>
          <a href="#all" className="text-ivory/60 text-[10px] tracking-[0.2em] hover:text-rose-gold transition-colors flex items-center gap-2 uppercase">
            View all products
            <span className="w-12 h-[1px] bg-rose-gold/30"></span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="product-card-hover flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface group mb-8 rounded-3xl glass-card">
                {product.tag && (
                  <span className="absolute top-6 right-6 z-10 px-4 py-1 rounded-full bg-background/60 backdrop-blur-md text-rose-gold text-[8px] tracking-[0.2em] uppercase border border-rose-gold/20">
                    {product.tag}
                  </span>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-ivory text-background flex items-center justify-center hover:bg-rose-gold transition-colors duration-300">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-ivory/10 text-ivory border border-ivory/20 flex items-center justify-center hover:bg-ivory/20 transition-colors duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-ivory/10 text-ivory border border-ivory/20 flex items-center justify-center hover:bg-red-400/20 group/heart transition-colors duration-300">
                    <Heart className="w-5 h-5 group-hover/heart:fill-red-400 transition-colors" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[10px] tracking-[0.2em] text-rose-gold/60 uppercase block mb-2">{product.category}</span>
                <h3 className="text-2xl font-display text-ivory mb-2">{product.name}</h3>
                <p className="text-lg font-sans text-rose-gold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
