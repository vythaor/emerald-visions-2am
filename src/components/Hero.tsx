import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Hero grid images
const heroImages = [
  {
    src: "https://res.cloudinary.com/ddwq9besf/image/upload/v1759756630/DSC01839_u15qjp.jpg",
    alt: "Portrait Photography"
  },
  {
    src: "https://res.cloudinary.com/ddwq9besf/image/upload/v1760037124/DSC09957_sm1xr5.jpg",
    alt: "Wedding Photography"
  },
  {
    src: "https://res.cloudinary.com/ddwq9besf/image/upload/v1759756630/DSC03710_oah2bk.jpg",
    alt: "Event Photography"
  },
  {
    src: "https://res.cloudinary.com/ddwq9besf/image/upload/v1760039633/DSC02149_laxdwy.jpg",
    alt: "Studio Photography"
  }
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16">
      {/* Background Photo Grid */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-overlay opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content - Positioned at bottom to show background photos */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-8">
        <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-white/20 backdrop-blur-xl animate-fade-in-up">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 glow-text">
            2am<span className="bg-gradient-primary bg-clip-text text-transparent">studio</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-6 animate-fade-in-up leading-relaxed font-medium" style={{ animationDelay: "0.2s" }}>
            Photography studio in United Kingdom and Vietnam
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/styles">
              <Button size="lg" className="btn-primary px-6 py-3 group shadow-xl">
                <span className="relative z-10">View Portfolio</span>
                <div className="shimmer"></div>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 shadow-xl backdrop-blur-sm">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#styles"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-strong rounded-full p-4 animate-bounce cursor-pointer border border-white/20 hover:border-primary/50 transition-all backdrop-blur-sm shadow-xl"
      >
        <ArrowDown className="text-primary" size={24} />
      </a>
    </section>
  );
};

export default Hero;
