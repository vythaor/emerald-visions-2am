import { ArrowLeft, Zap, Sparkles, Camera, Trophy, Users, Target, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";
import ImageDialog from "@/components/ImageDialog";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import StyleNavigation from "@/components/StyleNavigation";
import { resolveCloudinarySource, DEFAULT_TRANSFORM, fetchFolderSources, cloudinaryUrl } from "@/lib/cloudinary";
import { useImageGallery } from "@/hooks/use-image-gallery";

const SportStylePage = () => {
  const { images: sportSources, isLoading, hasMore, initialLoad, setLoadMoreRef } = useImageGallery({
    folder: 'sport',
    fallbackImage: "DSC03440_hemqqo.jpg"
  });

  const galleryImages = sportSources.map((src, idx) => ({
    id: idx + 1,
    src,
    alt: `Sport ${idx + 1}`,
    category: ["Action", "Team", "Individual", "Event", "Training", "Victory"][idx % 6],
  }));

  const features = [
    {
      icon: Zap,
      title: "Action Shots",
      description: "High-speed photography capturing peak moments of athletic performance"
    },
    {
      icon: Camera,
      title: "Event Coverage",
      description: "Complete sports event documentation with professional equipment"
    },
    {
      icon: Users,
      title: "Team Photos",
      description: "Group and individual team photography for all sports"
    },
    {
      icon: Trophy,
      title: "Athletic Portraits",
      description: "Professional portraits showcasing athletes and their achievements"
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
                Sport & Action Photography
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Sport</span> & Action
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Dynamic sports photography freezing moments of peak performance. 
              Energy, motion, and triumph captured perfectly with professional expertise.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Sports <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
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
                    <div className="absolute inset-0 bg-gradient-hover-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Loading indicator */}
            {(isLoading || initialLoad) && (
              <div className="flex justify-center items-center py-8">
                <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
                  <Loader2 className="animate-spin text-primary" size={20} />
                  <span className="text-sm font-medium">Loading more images...</span>
                </div>
              </div>
            )}

            {/* Infinite scroll trigger */}
            {hasMore && !initialLoad && (
              <div ref={setLoadMoreRef} className="h-4" />
            )}

            {/* End of gallery message */}
            {!hasMore && !initialLoad && sportSources.length > 0 && (
              <div className="text-center py-8">
                <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
                  <Sparkles className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm text-muted-foreground">
                    You've reached the end of the gallery
                  </p>
                </div>
              </div>
            )}
          </div>

          <ImageDialog
            open={previewOpen}
            onOpenChange={setPreviewOpen}
            items={galleryImages.map(i => ({ src: i.src, alt: i.alt }))}
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
          />

          {/* Style Navigation */}
          <div className="mt-16">
            <StyleNavigation />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-16">
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

          {/* CTA Section */}
          <div className="mt-16 text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Capture Your Sports Moments?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a championship game, training session, or team event, 
              we'll capture the energy and excitement of your sport. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full font-semibold group relative"
              >
                <span className="relative z-10">Book Session</span>
                <Zap className="transition-transform duration-300 group-hover:scale-110 relative z-10" size={20} />
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

export default SportStylePage;
