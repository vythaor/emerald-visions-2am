import { ArrowLeft, Sun, Sparkles, Camera, Mountain, TreePine, Sunrise } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import outdoorImg from "@/assets/outdoor-style.jpg";

const OutdoorStylePage = () => {
  const galleryImages = [
    { id: 1, src: outdoorImg, alt: "Outdoor 1", category: "Golden Hour" },
    { id: 2, src: outdoorImg, alt: "Outdoor 2", category: "Landscape" },
    { id: 3, src: outdoorImg, alt: "Outdoor 3", category: "Portrait" },
    { id: 4, src: outdoorImg, alt: "Outdoor 4", category: "Adventure" },
    { id: 5, src: outdoorImg, alt: "Outdoor 5", category: "Nature" },
    { id: 6, src: outdoorImg, alt: "Outdoor 6", category: "Scenic" },
  ];

  const features = [
    {
      icon: Sun,
      title: "Golden Hour",
      description: "Perfect lighting during sunrise and sunset for stunning outdoor portraits"
    },
    {
      icon: Mountain,
      title: "Scenic Locations",
      description: "Beautiful natural backdrops and breathtaking landscape photography"
    },
    {
      icon: TreePine,
      title: "Nature Portraits",
      description: "Outdoor portrait sessions that blend natural beauty with human subjects"
    },
    {
      icon: Sunrise,
      title: "Adventure Sessions",
      description: "Dynamic outdoor photography for adventurous and active lifestyles"
    }
  ];

  return (
    <div className="min-h-screen relative page-transition">
      <GlassBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/styles" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft size={20} />
            <span>Back to Styles</span>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full glass-strong border border-primary/30">
              <Sparkles className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Outdoor & Nature Photography
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Outdoor</span> & Nature
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Beautiful natural landscapes and outdoor portrait sessions. 
              Harnessing natural light for stunning results in any environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 text-center hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <feature.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Outdoor <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative glass-card rounded-2xl overflow-hidden hover-lift hover:shadow-glow-strong transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full border border-primary/30">
                      <span className="text-xs font-semibold text-primary">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready for Your Outdoor Adventure?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's explore beautiful locations and create stunning outdoor photography. 
              From mountain peaks to beach sunsets, we'll capture it all!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-glow-strong transition-all group"
              >
                <span>Book Session</span>
                <Sun className="transition-transform duration-300 group-hover:scale-110" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-gradient-primary rounded-full font-semibold hover:bg-gradient-primary hover:text-primary-foreground transition-all group"
              >
                <span>View Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutdoorStylePage;
