import { Camera, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import portraitImg from "@/assets/portrait-style.jpg";
import weddingImg from "@/assets/wedding-style.jpg";
import sportImg from "@/assets/sport-style.jpg";
import outdoorImg from "@/assets/outdoor-style.jpg";
import eventImg from "@/assets/event-style.jpg";

const StylesPage = () => {
  const styles = [
    {
      title: "Portrait & Model",
      description: "Elegant studio portraits and fashion model photography with professional lighting. Capturing personality, elegance, and style in every frame.",
      image: portraitImg,
      features: ["Studio Sessions", "Fashion Editorial", "Headshots", "Personal Branding"],
    },
    {
      title: "Wedding",
      description: "Romantic wedding moments captured with artistic storytelling. From intimate ceremonies to grand celebrations.",
      image: weddingImg,
      features: ["Full Day Coverage", "Engagement Shoots", "Wedding Albums", "Cinematic Style"],
    },
    {
      title: "Sport & Action",
      description: "Dynamic sports photography freezing moments of peak performance. Energy, motion, and triumph captured perfectly.",
      image: sportImg,
      features: ["Action Shots", "Team Photos", "Event Coverage", "Athletic Portraits"],
    },
    {
      title: "Outdoor & Nature",
      description: "Beautiful natural landscapes and outdoor portrait sessions. Harnessing natural light for stunning results.",
      image: outdoorImg,
      features: ["Golden Hour", "Scenic Locations", "Nature Portraits", "Adventure Sessions"],
    },
    {
      title: "Events & Corporate",
      description: "Professional event coverage and corporate photography. Capturing the essence of your professional moments.",
      image: eventImg,
      features: ["Conference Coverage", "Corporate Events", "Product Launches", "Networking Events"],
    },
    {
      title: "New Year & Christmas",
      description: "Festive holiday photography with creative seasonal themes. Making your celebrations unforgettable.",
      image: portraitImg,
      features: ["Holiday Cards", "Family Portraits", "Festive Themes", "Seasonal Decor"],
    },
  ];

  return (
    <div className="min-h-screen relative page-transition">
      <GlassBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full glass-strong border border-primary/30">
              <Sparkles className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Photography Styles
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Specialties</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate portraits to grand celebrations, we capture every moment with artistic excellence and creative vision
            </p>
          </div>

          {/* Styles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {styles.map((style, index) => (
              <div
                key={style.title}
                className="group relative glass-card rounded-3xl overflow-hidden hover-lift hover:shadow-glow-strong transition-all duration-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 glass-strong rounded-full border border-primary/30 backdrop-blur-xl">
                    <span className="text-sm font-semibold text-primary">Featured</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {style.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {style.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {style.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm glass rounded-lg px-3 py-2 group-hover:glass-strong transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-primary font-semibold group/btn">
                    <span>View Gallery</span>
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" size={18} />
                  </button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-4">
              Don't see what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom photography sessions tailored to your unique needs. Let's discuss your vision!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-glow-strong transition-all group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StylesPage;
