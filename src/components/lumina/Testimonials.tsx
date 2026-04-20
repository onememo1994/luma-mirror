import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="relative py-32">
      <div className="container max-w-4xl">
        <div className="reveal relative bg-card border border-border/60 rounded-sm p-10 md:p-16 grid md:grid-cols-[180px_1fr] gap-10 items-center">
          <div className="mx-auto md:mx-0 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-blush/30">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
              alt="Sarah Mitchell"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <Quote className="w-8 h-8 text-blush" />
            <p className="mt-4 font-serif text-2xl md:text-3xl leading-snug text-ivory text-balance">
              "Lumina is the first brand that made me feel like skincare could be a ritual, not a
              routine. My glow is unreal."
            </p>
            <div className="mt-6">
              <p className="font-serif text-lg text-ivory">Sarah Mitchell</p>
              <p className="text-xs tracking-widest uppercase text-ivory/50">Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
