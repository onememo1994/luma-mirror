import { Shield, Leaf, Zap, Heart } from "lucide-react";

const items = [
  {
    title: "Eco-Harvested",
    description: "Sustainably sourced botanical ingredients that respect our planet.",
    icon: Leaf,
  },
  {
    title: "Clinical Potency",
    description: "Bio-engineered extracts with scientifically proven results for every skin type.",
    icon: Zap,
  },
  {
    title: "Absolute Safety",
    description: "Dermatologically tested, toxin-free formulas formulated in Geneva.",
    icon: Shield,
  },
  {
    title: "Ethical Soul",
    description: "100% cruelty-free commitment with carbon-neutral packaging.",
    icon: Heart,
  },
];

export const Features = () => {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-rose-gold text-[10px] tracking-[0.4em] uppercase mb-4 block">The Lumina Difference</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display text-ivory leading-tight mb-6">
            Where Nature Meets <span className="italic">Luxury Science.</span>
          </h2>
          <p className="text-ivory/60 leading-relaxed font-sans">
            We believe that true beauty shouldn't come at a cost. Our mission is to provide premium skincare that is as effective as it is ethical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="glass-card group p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-rose-gold/30 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-surface/50 border border-ivory/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-rose-gold" />
              </div>
              <h3 className="text-xl font-display text-ivory mb-4">{item.title}</h3>
              <p className="text-sm text-ivory/40 leading-relaxed font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
