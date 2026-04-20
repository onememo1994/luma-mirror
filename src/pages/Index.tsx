import { Header } from "@/components/lumina/Header";
import { Hero } from "@/components/lumina/Hero";
import { Story } from "@/components/lumina/Story";
import { Products } from "@/components/lumina/Products";
import { Features } from "@/components/lumina/Features";
import { BeforeAfter } from "@/components/lumina/BeforeAfter";
import { Testimonials } from "@/components/lumina/Testimonials";
import { Categories } from "@/components/lumina/Categories";
import { Newsletter } from "@/components/lumina/Newsletter";
import { Footer } from "@/components/lumina/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Story />
      <Products />
      <Features />
      <BeforeAfter />
      <Testimonials />
      <Categories />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
