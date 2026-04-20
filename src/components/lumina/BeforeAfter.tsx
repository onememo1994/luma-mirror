import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(x);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  return (
    <section id="results" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blush">Real Results</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory">
            Before & <span className="italic">After.</span>
          </h2>
          <p className="mt-4 text-ivory/60">Drag to reveal — 28 days with Radiance Glow Serum.</p>
        </div>

        <div className="reveal mt-14 max-w-4xl mx-auto">
          <div
            ref={ref}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl select-none cursor-ew-resize"
            onMouseDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            onTouchStart={(e) => {
              dragging.current = true;
              setFromClientX(e.touches[0].clientX);
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1600&q=80"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              draggable={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1600&q=80"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
                draggable={false}
              />
            </div>

            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 text-[10px] tracking-widest uppercase text-ivory">
              Before
            </span>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blush/90 text-[10px] tracking-widest uppercase text-primary-foreground">
              After
            </span>

            <div
              className="absolute top-0 bottom-0 w-px bg-blush"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blush text-primary-foreground grid place-items-center shadow-2xl">
                <ChevronLeft className="w-4 h-4 -mr-1" />
                <ChevronRight className="w-4 h-4 -ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
