import { ArrowLeft, Heart, Sparkles, Camera, Calendar, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";
import ImageDialog from "@/components/ImageDialog";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import { resolveCloudinarySource, DEFAULT_TRANSFORM, fetchFolderSources } from "@/lib/cloudinary";
const FALLBACK_IMG = "https://res.cloudinary.com/ddwq9besf/image/upload/v1759756630/DSC01839_u15qjp.jpg";

const WeddingStylePage = () => {
  const [weddingSources, setWeddingSources] = React.useState<string[]>([]);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const sources = await fetchFolderSources('wedding', 30);
        if (!cancelled && sources.length) {
          setWeddingSources(sources);
          return;
        }
      } catch (e) {
        // Ignore errors and use fallback sources
      }
      if (!cancelled) {
        setWeddingSources([FALLBACK_IMG]);
      }
    })();
    return () => {
      cancelled = true;
    }
  }, []);

  const galleryImages = weddingSources.map((src, idx) => ({
    id: idx + 1,
    src,
    alt: `Wedding ${idx + 1}`,
    category: ["Ceremony", "Reception", "Engagement", "Portraits", "Details", "Candid"][idx % 6],
  }));

  const features = [
    {
      icon: Heart,
      title: "Full Day Coverage",
      description: "Complete wedding day documentation from preparation to celebration"
    },
    {
      icon: Camera,
      title: "Cinematic Style",
      description: "Artistic storytelling with cinematic approach to wedding photography"
    },
    {
      icon: Users,
      title: "Engagement Shoots",
      description: "Romantic pre-wedding sessions to capture your love story"
    },
    {
      icon: Star,
      title: "Wedding Albums",
      description: "Beautiful custom-designed albums to preserve your memories"
    }
  ];

  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const openPreviewAt = (idx: number) => {
    setSelectedIndex(idx);
    setPreviewOpen(true);
  };

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
                Wedding Photography
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Wedding</span> Photography
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Romantic wedding moments captured with artistic storytelling. 
              From intimate ceremonies to grand celebrations, we preserve your special day.
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
              Wedding <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative glass-card rounded-2xl overflow-hidden hover-lift hover:shadow-glow-strong transition-all duration-500 animate-fade-in cursor-zoom-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openPreviewAt(index)}
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

          <ImageDialog
            open={previewOpen}
            onOpenChange={setPreviewOpen}
            items={galleryImages.map(i => ({ src: i.src, alt: i.alt }))}
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
          />

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Plan Your Wedding Photography?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a photography package that perfectly captures 
              your special day. Book a consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-glow-strong transition-all group"
              >
                <span>Book Consultation</span>
                <Heart className="transition-transform duration-300 group-hover:scale-110" size={20} />
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

export default WeddingStylePage;
