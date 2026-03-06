import { Camera, Loader2 } from "lucide-react";
import * as React from "react";
import ImageDialog from "@/components/ImageDialog";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useImageGallery } from "@/hooks/use-image-gallery";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  // Fetch images for each genre
  const { images: portraitsImages } = useImageGallery({
    folder: 'portraits',
    fallbackImage: "DSC03710_oah2bk.jpg",
    pageSize: 20
  });

  const { images: preweddingImages } = useImageGallery({
    folder: 'prewedding',
    fallbackImage: "DSCF0482_gcxzks.jpg",
    pageSize: 20
  });

  const { images: activitiesImages } = useImageGallery({
    folder: 'activities',
    fallbackImage: "DSC03440_hemqqo.jpg",
    pageSize: 20
  });

  const { images: babiesImages } = useImageGallery({
    folder: 'babies',
    fallbackImage: "DSC03440_hemqqo.jpg",
    pageSize: 20
  });

  const { images: landscapeImages } = useImageGallery({
    folder: 'landscape',
    fallbackImage: "DSC08986_rjjyff.jpg",
    pageSize: 20
  });

  const { images: mmuImages } = useImageGallery({
    folder: 'mmu',
    fallbackImage: "DSC08986_rjjyff.jpg",
    pageSize: 20
  });

  // Limit to 10 images per genre and create gallery items
  const genres = [
    {
        name: "MMU Events",
        images: mmuImages.slice(0, 10).map((src, idx) => ({
          id: `mmu-${idx + 1}`,
          src,
          alt: `MMU ${idx + 1}`,
        })),
      },
    {
      name: "Portraits",
      images: portraitsImages.slice(0, 20).map((src, idx) => ({
        id: `portraits-${idx + 1}`,
        src,
        alt: `Portraits ${idx + 1}`,
      })),
    },
    {
      name: "Prewedding",
      images: preweddingImages.slice(0, 20).map((src, idx) => ({
        id: `prewedding-${idx + 1}`,
        src,
        alt: `Prewedding ${idx + 1}`,
      })),
    },
    {
      name: "Babies",
      images: babiesImages.slice(0, 20).map((src, idx) => ({
        id: `babies-${idx + 1}`,
        src,
        alt: `Babies ${idx + 1}`,
      })),
    },
    {
      name: "Events",
      images: activitiesImages.slice(0, 20).map((src, idx) => ({
        id: `activities-${idx + 1}`,
        src,
        alt: `Events ${idx + 1}`,
      })),
    },
    {
        name: "Landscape",
        images: landscapeImages.slice(0, 20).map((src, idx) => ({
          id: `landscape-${idx + 1}`,
          src,
          alt: `Landscape ${idx + 1}`,
        })),
      }
  ];

  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [selectedGenreImages, setSelectedGenreImages] = React.useState<Array<{ src: string; alt: string }>>([]);

  const openPreviewAt = (genreImages: Array<{ src: string; alt: string }>, idx: number) => {
    setSelectedGenreImages(genreImages);
    setSelectedIndex(idx);
    setPreviewOpen(true);
  };

  return (
    <div className="min-h-screen relative page-transition">
      <GlassBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full glass-strong border border-primary/30">
              <Camera className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Portfolio Collection
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Sherry Photography</span> Portfolio
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Each section showcases my finest work in portraits, prewedding, event and landscape photography.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="mt-4">
                <a href="https://drive.google.com/drive/folders/17pBl6FOxaXwdHED5IdSAj_6sbbtxnwt_?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 shadow-xl backdrop-blur-sm">
                    <span className="relative z-10">Google Drive View</span>
                    <div className="shimmer"></div>
                    </Button>
                </a>
                </div>
                <div className="mt-4">
                <a href="https://www.instagram.com/2amstudio.vn" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 shadow-xl backdrop-blur-sm">
                    <span className="relative z-10">Instagram</span>
                    <div className="shimmer"></div>
                    </Button>
                </a>
                </div>
                </div>
          </div>

          {/* Genre Sections */}
          {genres.map((genre, genreIndex) => (
            <section key={genre.name} className="mb-20 scroll-mt-32">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-primary bg-clip-text text-transparent">{genre.name}</span>
              </h2>
              
              {/* Masonry Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-0">
                {genre.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative glass-photo rounded-[2px] overflow-hidden hover-lift hover:shadow-glow-photo hover:glass-photo-hover transition-all duration-500 animate-fade-in cursor-zoom-in break-inside-avoid mb-0"
                    style={{ animationDelay: `${(genreIndex * 10 + index) * 0.05}s` }}
                    onClick={() => openPreviewAt(genre.images, index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-hover-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Image Dialog */}
          <ImageDialog
            open={previewOpen}
            onOpenChange={setPreviewOpen}
            items={selectedGenreImages.map(i => ({ src: i.src, alt: i.alt }))}
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
          />
        </div>
      </main>

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
