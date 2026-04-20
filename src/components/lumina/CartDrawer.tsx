import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/store/cart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export const CartDrawer = () => {
  const { isOpen, close, items, setQty, removeItem, totalPrice, clear } = useCart();
  const total = totalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && close()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-background border-l border-border/60 text-ivory flex flex-col p-0"
      >
        <SheetHeader className="px-6 py-5 border-b border-border/60">
          <SheetTitle className="font-serif text-2xl text-ivory text-left">
            Your Bag <span className="text-blush">({items.reduce((n, i) => n + i.qty, 0)})</span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-10 gap-4">
            <div className="w-16 h-16 grid place-items-center rounded-full bg-blush/10 ring-1 ring-blush/30">
              <ShoppingBag className="w-6 h-6 text-blush" />
            </div>
            <p className="font-serif text-xl">Your bag is empty.</p>
            <p className="text-ivory/60 text-sm">Discover our signature collection.</p>
            <button
              onClick={close}
              className="mt-2 px-6 py-2.5 rounded-full bg-blush text-primary-foreground text-sm font-medium hover:bg-blush/90"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((it) => (
                <div key={it.id} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                    <img src={it.img} alt={it.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase text-ivory/50">
                      {it.category}
                    </p>
                    <h3 className="font-serif text-base text-ivory truncate">{it.name}</h3>
                    <p className="mt-1 text-blush font-serif">${it.price * it.qty}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-border rounded-full">
                        <button
                          aria-label="Decrease"
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="w-8 h-8 grid place-items-center text-ivory/80 hover:text-blush"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm">{it.qty}</span>
                        <button
                          aria-label="Increase"
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="w-8 h-8 grid place-items-center text-ivory/80 hover:text-blush"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        aria-label="Remove"
                        onClick={() => {
                          removeItem(it.id);
                          toast(`${it.name} removed`);
                        }}
                        className="text-ivory/50 hover:text-blush"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border/60 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-ivory/70 text-sm tracking-widest uppercase">Subtotal</span>
                <span className="font-serif text-2xl text-ivory">${total}</span>
              </div>
              <p className="text-xs text-ivory/50">Shipping & taxes calculated at checkout.</p>
              <button
                onClick={() => toast.success("Checkout coming soon ✨")}
                className="w-full h-12 rounded-full bg-blush text-primary-foreground font-medium hover:bg-blush/90 transition"
              >
                Checkout — ${total}
              </button>
              <button
                onClick={clear}
                className="w-full text-xs tracking-widest uppercase text-ivory/50 hover:text-blush"
              >
                Clear bag
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
