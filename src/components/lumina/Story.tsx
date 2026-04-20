const stats = [
  { value: "12+", label: "Years of Expertise" },
  { value: "97%", label: "Satisfaction rate" },
  { value: "100%", label: "Natural Ingredients" },
];

export const Story = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
              alt="Botanical skincare ingredients"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-blush/30 rounded-sm px-6 py-5 max-w-xs">
            <p className="font-serif italic text-ivory/90 text-lg leading-snug">
              "Beauty is not about perfection. It's about confidence in your own skin."
            </p>
            <p className="mt-2 text-xs tracking-widest text-blush uppercase">— Lumina Founder</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-blush">Our Story</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-ivory text-balance">
            Born from Nature,
            <br />
            <span className="italic">Refined by Science.</span>
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-lg">
            Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories, where ancient remedies meet modern dermatology.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-blush/30 pl-4">
                <div className="font-serif text-3xl md:text-4xl text-ivory">{s.value}</div>
                <div className="mt-1 text-xs tracking-widest uppercase text-ivory/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
