const cats = [
  {
    title: "Skincare",
    count: 24,
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Makeup",
    count: 36,
    img: "https://images.unsplash.com/photo-1522335789203-aaa6b80b6f4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hair Care",
    count: 18,
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Body Care",
    count: 22,
    img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=80",
  },
];

export const Categories = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="reveal flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-blush">Explore</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ivory">
              Explore the <span className="italic">collection.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <a
              key={c.title}
              href="#products"
              className="reveal group relative aspect-[3/4] overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl text-ivory">{c.title}</h3>
                <p className="text-xs tracking-widest uppercase text-blush mt-1">
                  {c.count} Products
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
