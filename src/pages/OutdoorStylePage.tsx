import { ArrowLeft, Sun, Sparkles, Camera, Mountain, TreePine, Sunrise } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";
import ImageDialog from "@/components/ImageDialog";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import StyleNavigation from "@/components/StyleNavigation";
import { resolveCloudinarySource, DEFAULT_TRANSFORM, fetchFolderSources, cloudinaryUrl } from "@/lib/cloudinary";

const OutdoorStylePage = () => {
  const [outdoorSources, setOutdoorSources] = React.useState<string[]>([]);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const sources = await fetchFolderSources('outdoor', 30);
        if (!cancelled && sources.length) {
          setOutdoorSources(sources);
          return;
        }
      } catch (e) {
        // Ignore errors and use fallback sources
      }
      // fallback to any manual list or fallback image
      if (!cancelled) {
        setOutdoorSources([
          "https://res.cloudinary.com/ddwq9besf/image/upload/v1759759667/IMG_2769_wry0zl.jpg",
          "https://res.cloudinary.com/ddwq9besf/image/upload/v1759759652/DSCF6089_rwcoif.jpg",
        ].map((pid) => resolveCloudinarySource(pid, DEFAULT_TRANSFORM)).concat([cloudinaryUrl("DSCF0100_zidqs2.jpg", DEFAULT_TRANSFORM)]));
      }
    })();
    return () => {
      cancelled = true;
    }
  }, []);

  const galleryImages = outdoorSources.map((src, idx) => ({
    id: idx + 1,
    src,
    alt: `Outdoor ${idx + 1}`,
    category: ["Golden Hour", "Landscape", "Portrait", "Adventure", "Nature", "Scenic"][idx % 6],
  }));

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
                className="glass-card rounded-2xl p-6 text-center hover-lift hover:shadow-glow-subtle transition-all duration-500 animate-fade-in"
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
                  className="group relative glass-photo rounded-2xl overflow-hidden hover-lift hover:shadow-glow-photo hover:glass-photo-hover transition-all duration-500 animate-fade-in cursor-zoom-in"
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
                    <div className="absolute inset-0 bg-gradient-hover-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

          {/* Style Navigation */}
          <div>
            <StyleNavigation />
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
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
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full font-semibold group relative"
              >
                <span className="relative z-10">Book Session</span>
                <Sun className="transition-transform duration-300 group-hover:scale-110 relative z-10" size={20} />
                <div className="shimmer"></div>
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

      <Footer />
    </div>
  );
};

export default OutdoorStylePage;
