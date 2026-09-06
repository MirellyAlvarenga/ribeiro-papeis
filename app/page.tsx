import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased">
      <Header />
      <main className="w-full pt-20">
        <Hero />
        <WhyUs />
        <Products />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}