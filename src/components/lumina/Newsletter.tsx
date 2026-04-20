import { useState } from "react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to the Glow Club ✨");
    setEmail("");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-sm bg-secondary/60 border border-border/60 px-8 py-20 md:py-24 text-center">
          <div className="absolute inset-0 grain pointer-events-none" />
          <p className="text-xs tracking-[0.3em] uppercase text-blush">Glow Club</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory text-balance max-w-2xl mx-auto">
            Be the first to discover <span className="italic">new rituals.</span>
          </h2>
          <p className="mt-4 text-ivory/60 max-w-xl mx-auto">
            Subscribe for exclusive launches, beauty editorials, and members-only offers.
          </p>

          <form
            onSubmit={submit}
            className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 h-12 px-5 rounded-full bg-background/60 border border-border focus:border-blush focus:outline-none text-ivory placeholder:text-ivory/40"
            />
            <button
              type="submit"
              className="h-12 px-7 rounded-full bg-blush text-primary-foreground font-medium hover:bg-blush/90 transition"
            >
              Join the Glow
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
