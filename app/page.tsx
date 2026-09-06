import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import WhyUs from "@/src/components/sections/WhyUs";
import Products from "@/src/components/sections/Products";
import About from "@/src/components/sections/About";
import ContactCTA from "@/src/components/sections/ContactCTA";

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