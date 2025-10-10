import { Check, Star, Zap, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { cloudinaryUrl, DEFAULT_TRANSFORM, fetchFolderSources } from "@/lib/cloudinary";

const ServicesPage = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [enhanceImages, setEnhanceImages] = useState<string[]>([]);
  const [isLoadingEnhance, setIsLoadingEnhance] = useState(false); // Start with false for faster initial render

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchEnhanceImages = useCallback(async () => {
    if (enhanceImages.length > 0) return; // Don't fetch if already loaded
    
    setIsLoadingEnhance(true);
    try {
      const response = await fetchFolderSources('enhance', 10, null); // Reduce to 10 images for faster loading
      setEnhanceImages(response.images);
    } catch (error) {
      console.error('Error fetching enhance images:', error);
      setEnhanceImages([]);
    } finally {
      setIsLoadingEnhance(false);
    }
  }, [enhanceImages.length]);

  // Use Intersection Observer to load images only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchEnhanceImages();
          observer.disconnect(); // Only fetch once
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('before-after-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [fetchEnhanceImages]);


  // Generate before/after pairs from enhance images
  const generateBeforeAfterPairs = () => {
    if (enhanceImages.length === 0) return [];

    // Create pairs from enhance images (assuming even number of images)
    const pairs = [];
    for (let i = 0; i < enhanceImages.length && i < 20; i += 2) {
      if (i + 1 < enhanceImages.length) {
        pairs.push({
          id: pairs.length + 1,
          before: enhanceImages[i],
          after: enhanceImages[i + 1],
          title: `Enhancement ${pairs.length + 1}`
        });
      }
    }
    return pairs;
  };

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

  // Memoize before/after photos to prevent unnecessary recalculations
  const beforeAfterPhotos = useMemo(() => {
    return enhanceImages.length > 0 
      ? generateBeforeAfterPairs() 
      : manualBeforeAfterPhotos;
  }, [enhanceImages]);

  // Preload the next image for smoother transitions
  useEffect(() => {
    if (beforeAfterPhotos.length > 1) {
      const nextIndex = (activeComparison + 1) % beforeAfterPhotos.length;
      const nextPhoto = beforeAfterPhotos[nextIndex];
      
      // Preload next images
      const preloadBefore = new Image();
      preloadBefore.src = nextPhoto.before;
      
      const preloadAfter = new Image();
      preloadAfter.src = nextPhoto.after;
    }
  }, [activeComparison, beforeAfterPhotos]);

  const services = [
    {
      title: "Portrait Session",
      price: "Starting at £150",
      popular: false,
      features: [
        "1-2 hour session",
        "1-2 outfit changes",
        "Basic lighting setup",
        "20+ edited photos",
        "Digital files included",
        "Online gallery access",
      ],
    },
    {
      title: "Small Event",
      price: "Starting at £250",
      popular: true,
      features: [
        "2-4 hour coverage",
        "Candid & posed shots",
        "50+ edited photos",
        "Online gallery delivery",
        "Print release included",
        "Basic editing included",
      ],
    },
    {
      title: "Wedding Package",
      price: "Starting at £300",
      popular: true,
      features: [
        "6-8 hour coverage",
        "Engagement session included",
        "150+ edited photos",
        "Basic wedding album",
        "Unlimited consultations",
        "Flexible payment plans",
      ],
    },
    {
      title: "Creative Projects",
      price: "Starting at £200",
      popular: false,
      features: [
        "Collaborative approach",
        "Creative experimentation",
        "Portfolio building",
        "Usage rights included",
        "Learning together",
        "Flexible pricing",
      ],
    },
  ];

  const addons = [
    { name: "Additional Hour", price: "£75" },
    { name: "Rush Delivery (48hr)", price: "£50" },
    { name: "Extra Photos", price: "£25" },
    //{ name: "Photo Album (10 pages)", price: "£150" },
    { name: "Basic Video", price: "£50" },
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
              <Zap className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              Fresh <span className="bg-gradient-primary bg-clip-text text-transparent">Perspective</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              New studio with fresh ideas and affordable photography services.<br/> Growing together with our clients.
            </p>
          </div>



          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`relative glass-card p-8 border-border hover:border-primary/50 transition-all duration-700 hover-lift hover:shadow-glow-subtle animate-fade-in overflow-hidden group ${
                  service.popular ? "border-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 glass-strong rounded-full border border-primary/30">
                    <Star className="text-primary" size={14} fill="currentColor" />
                    <span className="text-xs font-semibold text-primary">Popular</span>
                  </div>
                )}

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700" />

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                    {service.price}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="w-full py-3 glass-strong rounded-full font-semibold hover:bg-gradient-primary hover:shadow-glow-subtle transition-all duration-300 group/btn block text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Choose Package
                      <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={18} />
                    </span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>


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
                  {isLoadingEnhance ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
                        <Loader2 className="animate-spin text-primary" size={20} />
                        <span className="text-sm font-medium">Loading before/after photos...</span>
                      </div>
                    </div>
                  ) : (
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
                  )}
                </div>

                {/* Photo Title */}
                {/* <h3 className="text-center mt-4 text-xl font-semibold">
                  {beforeAfterPhotos[activeComparison].title}
                </h3> */}
              </div>

              {/* Thumbnail Navigation */}
              {!isLoadingEnhance && (
                <div className="flex justify-center gap-4 overflow-x-auto pb-4 mt-8">
                  {beforeAfterPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => {
                      setActiveComparison(index);
                      setSliderPosition(50);
                    }}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeComparison === index 
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
              )}

              {/* Navigation Arrows */}
              {!isLoadingEnhance && (
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
              )}
            </div>
          </div>
          {/* Add-ons Section */}
          {/* <div className="glass-card rounded-3xl p-8 md:p-12 mb-16 animate-fade-in border border-primary/20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
              Enhance Your <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Customize your package with our premium add-ons
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addons.map((addon, index) => (
                <div
                  key={addon.name}
                  className="glass rounded-xl p-6 hover:glass-strong transition-all hover-lift border border-primary/10 hover:border-primary/30 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-center">
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {addon.name}
                    </p>
                    <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {addon.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}

          {/* Benefits Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "✨",
                title: "Passionate Editing",
                desc: "Careful attention to detail with modern editing techniques",
              },
              {
                icon: "⚡",
                title: "Quick Delivery",
                desc: "Receive your edited photos within 1-2 weeks",
              },
              {
                icon: "🤝",
                title: "Personal Touch",
                desc: "Direct communication and collaboration throughout the process",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl p-8 text-center hover-lift transition-all hover:shadow-glow animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
          */}

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Create Together?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              New to photography? Perfect! We're learning and growing together. Let's discuss your ideas and see what we can create
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full font-semibold group relative"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2 relative z-10" size={20} />
              <div className="shimmer"></div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
