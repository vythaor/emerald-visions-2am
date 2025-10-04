import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Styles from "@/components/Styles";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";
import GlassBackground from "@/components/GlassBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative page-transition">
      <GlassBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Styles />
        <Services />
        <Equipment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
