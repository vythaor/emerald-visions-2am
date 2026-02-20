import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

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
  const [loadedImages, setLoadedImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount === heroImages.length) {
        setAllImagesLoaded(true);
        // Keep overlay visible for 2 more seconds to show image animations
        setTimeout(() => {
          setShowOverlay(false);
        }, 2000);
      }
      return newCount;
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16">
      {/* Background Photo Grid */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-0" style={{ perspective: '1000px' }}>
        {heroImages.map((image, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                onLoad={handleImageLoad}
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1 animate-elegant-reveal"
                style={{
                  animationDelay: `${index * 0.6}s`,
                  animationDuration: '1.5s',
                  animationFillMode: 'both'
                }}
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle shimmer effect on load */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          );
        })}
      </div>

      {/* Loading Overlay */}
      {showOverlay && (
        <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-1000 ${!allImagesLoaded ? 'bg-background/95 backdrop-blur-sm opacity-100' : 'bg-background/20 backdrop-blur-[2px] opacity-0'}`}>
          <div className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-sm mx-auto border border-primary/30">
              {/* Clock Loading Animation */}
              <div className="relative w-16 h-16 mx-auto mb-4">
                {/* Clock Face */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 bg-background/50"></div>
                
                {/* Hour Hand (pointing to 2) */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-primary origin-bottom transform -translate-x-1/2 -translate-y-full rotate-[60deg]"></div>
                
                {/* Minute Hand (pointing to 12) */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-primary/70 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-0"></div>
                
                {/* Second Hand (spinning) */}
                <div 
                  className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-gradient-primary origin-bottom transform -translate-x-1/2 -translate-y-full transition-transform duration-1000 ease-out"
                  style={{ 
                    transform: `translate(-50%, -100%) rotate(${(loadedImages / heroImages.length) * 360}deg)`
                  }}
                ></div>
                
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Clock Numbers */}
                <div className="absolute top-1 left-1/2 text-xs font-bold text-primary transform -translate-x-1/2">12</div>
                <div className="absolute right-1 top-1/2 text-xs font-bold text-primary transform -translate-y-1/2">3</div>
                <div className="absolute bottom-1 left-1/2 text-xs font-bold text-primary transform -translate-x-1/2">6</div>
                <div className="absolute left-1 top-1/2 text-xs font-bold text-primary transform -translate-y-1/2">9</div>
              </div>
              
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                {allImagesLoaded ? "2am Studio" : "Loading Gallery"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {allImagesLoaded ? "Welcome to our world" : "Preparing your visual experience..."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content - Positioned at bottom to show background photos */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-8">
        <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-white/20 backdrop-blur-xl animate-fade-in-up">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 glow-text">
            2am<span className="bg-gradient-primary bg-clip-text text-transparent">studio</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-6 animate-fade-in-up leading-relaxed font-medium" style={{ animationDelay: "0.2s" }}>
            Photography Services in Manchester, UK
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/portfolio">
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

    </section>
  );
};

export default Hero;
