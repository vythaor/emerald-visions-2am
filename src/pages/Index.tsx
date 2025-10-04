import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Styles from "@/components/Styles";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Styles />
        <Services />
        <Equipment />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
