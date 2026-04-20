import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Leaf, title: "Natural Ingredients", desc: "100% botanically sourced actives. No parabens, sulfates, or synthetic fragrances. Just pure, effective nature." },
  { icon: Heart, title: "Cruelty-Free", desc: "Every Lumina formula is certified cruelty-free and vegan. Beauty that respects all life." },
  { icon: ShieldCheck, title: "Dermatologist Tested", desc: "Clinically validated by independent dermatologists. Safe for all skin types including sensitive." },
  { icon: Sparkles, title: "Visible Results", desc: "Transformation you can see and feel within 2 weeks of consistent use. Real science, real results." },
];

export const Features = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blush">The Lumina Difference</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory">
            Crafted with <span className="italic">intention.</span>
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal p-8 rounded-sm border border-border/60 bg-card hover:border-blush/40 hover:bg-card/80 transition group text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-blush/10 ring-1 ring-blush/30 group-hover:bg-blush/20 transition">
                <it.icon className="w-6 h-6 text-blush" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-ivory">{it.title}</h3>
              <p className="mt-2 text-sm text-ivory/60 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
