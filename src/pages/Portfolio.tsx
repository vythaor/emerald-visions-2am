import { Camera, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cloudinaryUrl, DEFAULT_TRANSFORM } from "@/lib/cloudinary";
import ImageDialog from "@/components/ImageDialog";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useImageGallery } from "@/hooks/use-image-gallery";
import { Button } from "@/components/ui/button";

// Manual fallback images (can be customized by replacing IDs)
const manualBeforeAfterPhotos = [
  {
    id: 1,
    before: cloudinaryUrl("DSC01839-2_tafzag.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC01839_xtuzwh.jpg", DEFAULT_TRANSFORM),
    title: "Portrait Enhancement"
  },
  {
    id: 2,
    before: cloudinaryUrl("DSC07260_vyixzw.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC07260_htdmbo.jpg", DEFAULT_TRANSFORM),
    title: "Wedding Photo Retouching"
  },
  {
    id: 3,
    before: cloudinaryUrl("IMG_1814_ayll8x.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("IMG_1814_1_ax7tik.jpg", DEFAULT_TRANSFORM),
    title: "Action Shot Enhancement"
  },
  {
    id: 4,
    before: cloudinaryUrl("DSC07444-Edit_lb0f1p.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC07444_ehovda.jpg", DEFAULT_TRANSFORM),
    title: "Outdoor Portrait"
  },
  {
    id: 5,
    before: cloudinaryUrl("DSC00131-Edit_vgsn2o.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC00131_jqrxjl.jpg", DEFAULT_TRANSFORM),
    title: "Event Photography"
  },
  {
    id: 6,
    before: cloudinaryUrl("DSC09940-Edit-min_yp9xlk.png", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC09940_omgqgc.jpg", DEFAULT_TRANSFORM),
    title: "Studio Portrait"
  },
  {
    id: 7,
    before: cloudinaryUrl("DSC03615_vrprop.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC03615_e4juka.jpg", DEFAULT_TRANSFORM),
    title: "Couple Session"
  },
  {
    id: 8,
    before: cloudinaryUrl("DSC01475_k4ud8t.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC01475_qnrael.jpg", DEFAULT_TRANSFORM),
    title: "Sports Photography"
  },
  {
    id: 9,
    before: cloudinaryUrl("DSC08986_islkrm.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("DSC08986_umyixs.jpg", DEFAULT_TRANSFORM),
    title: "Nature Photography"
  },
  {
    id: 10,
    before: cloudinaryUrl("IMG_1836_gncwcd.jpg", DEFAULT_TRANSFORM),
    after: cloudinaryUrl("IMG_1836_1_qvt7pi.jpg", DEFAULT_TRANSFORM),
    title: "Corporate Event"
  }
];

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

  const { images: companyImages } = useImageGallery({
    folder: 'event',
    fallbackImage: "DSC03440_hemqqo.jpg",
    pageSize: 20
  });

  const { images: sportImages } = useImageGallery({
    folder: 'sport',
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
      images: mmuImages.slice(0, 30).map((src, idx) => ({
        id: `mmu-${idx + 1}`,
        src,
        alt: `MMU ${idx + 1}`,
      })),
    },
    {
      name: "Company Events",
      images: companyImages.slice(0, 50).map((src, idx) => ({
        id: `company-${idx + 1}`,
        src,
        alt: `Company ${idx + 1}`,
      })),
    },
    {
      name: "Sport Events",
      images: sportImages.slice(0, 20).map((src, idx) => ({
        id: `sport-${idx + 1}`,
        src,
        alt: `Sport ${idx + 1}`,
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
    // {
    //   name: "Babies",
    //   images: babiesImages.slice(0, 20).map((src, idx) => ({
    //     id: `babies-${idx + 1}`,
    //     src,
    //     alt: `Babies ${idx + 1}`,
    //   })),
    // },
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

  // Before/After Section State
  const [activeComparison, setActiveComparison] = React.useState(0);
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const beforeAfterPhotos = manualBeforeAfterPhotos;

  React.useEffect(() => {
    if (beforeAfterPhotos.length > 1) {
      const nextIndex = (activeComparison + 1) % beforeAfterPhotos.length;
      const nextPhoto = beforeAfterPhotos[nextIndex];

      const preloadBefore = new Image();
      preloadBefore.src = nextPhoto.before;

      const preloadAfter = new Image();
      preloadAfter.src = nextPhoto.after;
    }
  }, [activeComparison, beforeAfterPhotos]);

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

          {/* Before/After Comparison Section */}
          <div id="before-after-section" className="glass-card rounded-3xl p-8 md:p-12 my-20 animate-fade-in border border-primary/20">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                See the <span className="bg-gradient-primary bg-clip-text text-transparent">Difference</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our editing process transforms your photos from good to extraordinary. Drag the slider to compare before and after.
              </p>
            </div>

            {/* Main Comparison Display */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-muted">
                <div className="relative w-full h-auto min-h-[500px] max-h-[700px]">
                  <div>
                    {/* Before Image */}
                    <img
                      src={beforeAfterPhotos[activeComparison].before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-contain"
                      loading="eager"
                      fetchPriority="high"
                    />

                    {/* After Image with Slider */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                      <img
                        src={beforeAfterPhotos[activeComparison].after}
                        alt="After"
                        className="w-full h-full object-contain"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>

                    {/* Slider Line */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white rounded-full text-sm font-semibold">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white rounded-full text-sm font-semibold">
                      After
                    </div>

                    {/* Slider Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />
                  </div>
                </div>

                {/* Photo Title */}
                {/* <h3 className="text-center mt-4 text-xl font-semibold">
                  {beforeAfterPhotos[activeComparison].title}
                </h3> */}
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-4 overflow-x-auto pb-4 mt-8">
                {beforeAfterPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => {
                      setActiveComparison(index);
                      setSliderPosition(50);
                    }}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${activeComparison === index
                      ? 'ring-2 ring-primary shadow-lg scale-105'
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                  >
                    <img
                      src={photo.before}
                      alt={photo.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => {
                    setActiveComparison(activeComparison > 0 ? activeComparison - 1 : beforeAfterPhotos.length - 1);
                    setSliderPosition(50);
                  }}
                  className="p-3 glass-strong rounded-full hover:bg-gradient-primary transition-all group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                <span className="flex items-center px-4 py-2 glass-strong rounded-full text-sm font-semibold">
                  {activeComparison + 1} of {beforeAfterPhotos.length}
                </span>

                <button
                  onClick={() => {
                    setActiveComparison(activeComparison < beforeAfterPhotos.length - 1 ? activeComparison + 1 : 0);
                    setSliderPosition(50);
                  }}
                  className="p-3 glass-strong rounded-full hover:bg-gradient-primary transition-all group"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

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
