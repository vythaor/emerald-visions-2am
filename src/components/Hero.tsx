import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CLOUDINARY_IMG = "https://res.cloudinary.com/ddwq9besf/image/upload/v1759756630/DSC01839_u15qjp.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CLOUDINARY_IMG})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto border border-white/10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up glow-text">
            2am<span className="bg-gradient-primary bg-clip-text text-transparent">studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Photography studio in United Kingdom and Vietnam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/styles">
              <Button size="lg" className="btn-primary text-lg px-8 py-6 group">
                <span className="relative z-10">View Portfolio</span>
                <div className="shimmer"></div>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#styles"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-full p-3 animate-bounce cursor-pointer border border-white/10 hover:border-primary/50 transition-all"
      >
        <ArrowDown className="text-primary" size={24} />
      </a>
    </section>
  );
};

export default Hero;
