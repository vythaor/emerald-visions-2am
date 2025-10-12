import { Camera, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import { cloudinaryUrl, DEFAULT_TRANSFORM } from "@/lib/cloudinary";

const StylesPage = () => {
  const genres = [
        {
          title: "Indoor & Studio",
          description: "Professional indoor photography with controlled lighting and studio environments. Capturing personality, elegance, and style in every frame.",
          image: cloudinaryUrl("DSC03710_oah2bk.jpg", DEFAULT_TRANSFORM),
          features: ["Studio Sessions", "Fashion Editorial", "Headshots", "Personal Branding"],
          link: "/genres/indoor",
        },
        {
          title: "Wedding",
          description: "Romantic wedding moments captured with artistic storytelling. From intimate ceremonies to grand celebrations.",
          image: cloudinaryUrl("DSCF0482_gcxzks.jpg", DEFAULT_TRANSFORM),
          features: ["Full Day Coverage", "Engagement Shoots", "50+ edited photos", "Cinematic Style"],
          link: "/genres/wedding",
        },
        {
          title: "Sport & Action",
          description: "Dynamic sports photography freezing moments of peak performance. Energy, motion, and triumph captured perfectly.",
          image: cloudinaryUrl("DSC03440_hemqqo.jpg", DEFAULT_TRANSFORM),
          features: ["Action Shots", "Team Photos", "Event Coverage", "Athletic Portraits"],
          link: "/genres/sport",
        },
        {
          title: "Outdoor & Nature",
          description: "Beautiful natural landscapes and outdoor portrait sessions. Harnessing natural light for stunning results.",
          image: cloudinaryUrl("DSCF0100_zidqs2.jpg", DEFAULT_TRANSFORM),
          features: ["Golden Hour", "Scenic Locations", "Nature Portraits", "Adventure Sessions"],
          link: "/genres/outdoor",
        },
        {
          title: "Events & Corporate",
          description: "Professional event coverage and corporate photography. Capturing the essence of your professional moments.",
          image: cloudinaryUrl("DSC08986_rjjyff.jpg", DEFAULT_TRANSFORM),
          features: ["Conference Coverage", "Corporate Events", "Product Launches", "Networking Events"],
          link: "/genres/event",
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
                Photography Genres
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Specialties</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate portraits to grand celebrations, we capture every moment with artistic excellence and creative vision
            </p>
          </div>

          {/* Genres Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {genres.map((genre, index) => (
              <Link
                key={genre.title}
                to={genre.link}
                className="group relative glass-photo rounded-3xl overflow-hidden hover-lift hover:shadow-glow-photo hover:glass-photo-hover transition-all duration-700 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={genre.image}
                    alt={genre.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-hover-light opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {genre.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {genre.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {genre.features.map((feature) => (
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
                  <div className="flex items-center gap-2 text-white font-semibold group/btn hover:text-primary-glow transition-colors">
                    <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/20">View Gallery</span>
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" size={18} />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />
              </Link>
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

      <Footer />
    </div>
  );
};

export default StylesPage;
