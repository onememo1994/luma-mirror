
# Lumina Beauty — Identical Rebuild Plan

Recreate the luxury skincare landing page as a single-page React/Tailwind site, matching the dark cinematic aesthetic, serif typography, and blush-pink accent palette of the original.

## Design system
- **Palette:** deep near-black background (`#1a1410`), warm ivory text (`#f5ebd9`), blush-pink CTA (`#f4cfd0`), muted rose/champagne accents.
- **Typography:** large elegant serif (Playfair Display / Cormorant Garamond) for headings & hero; clean sans (Inter) for body and nav.
- **Style:** generous whitespace, soft fades, rounded pill buttons, subtle particle/grain texture, smooth scroll, scroll-reveal animations.

## Page sections (single page, anchor nav)
1. **Sticky header** — Lumina logo (icon + wordmark), nav (Products, About, Results, Contact), EN | AR language toggle, pink "Shop Now" pill.
2. **Hero** — full-viewport dark beauty image, "Luxury Natural Beauty" pill, oversized "Discover Your *Natural Glow.*" headline, subcopy, two CTAs (Shop Now / Discover Products), "Scroll to explore" indicator.
3. **Story / About** — side-by-side image + quote, "Born from Nature, Refined by Science." with three stats (12+ Years, 97% Satisfaction, 100% Natural).
4. **Signature Collection** — 6 product cards (Radiance Glow Serum, Velvet Lip Elixir, Pearl Luminosity Cream, Golden Hour Bronzer, Rose Petal Toner, Midnight Repair Mask) with badges (Best Seller, New, Award Winner, Trending, Limited), category, price, Quick View, Add to Cart.
5. **The Lumina Difference** — 4 feature tiles: Natural Ingredients, Cruelty-Free, Dermatologist Tested, Visible Results.
6. **Before & After** — interactive draggable image comparison slider with caption.
7. **Testimonials** — quote card with portrait, name, location (Sarah Mitchell shown; carousel-ready).
8. **Explore the Collection** — 4 category cards (Skincare, Makeup, Hair Care, Body Care) with product counts.
9. **Newsletter / Glow Club** — centered dark panel, email input + "Join the Glow" pill button.
10. **Footer** — brand mark, link columns, socials, copyright.

## Interactions
- Smooth-scroll anchor navigation
- Hover lift + image zoom on product/category cards
- Working draggable before/after comparison
- EN/AR toggle (visual; RTL switch optional)
- Add to Cart shows toast confirmation
- Scroll-fade reveals on sections

## Assets
- Reuse the original hosted images (rocket.new + unsplash URLs) so visuals match exactly.

## Tech
- React + Tailwind + shadcn (Button, Card, Input, Toast)
- Google Fonts: Playfair Display + Inter
- No backend required for v1 (newsletter & cart are UI-only)

Deliverable: a single `Index` page assembled from modular section components, pixel-close to the reference.
