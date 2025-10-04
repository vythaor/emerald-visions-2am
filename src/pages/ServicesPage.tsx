import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import { Card } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      title: "Professional Photoshoot",
      price: "Starting at $299",
      popular: false,
      features: [
        "2-4 hour session",
        "Multiple outfit changes",
        "Professional lighting setup",
        "50+ edited photos",
        "High-resolution digital files",
        "Online gallery access",
      ],
    },
    {
      title: "Event Coverage",
      price: "Starting at $499",
      popular: true,
      features: [
        "Full-day event coverage",
        "Multiple photographers",
        "Candid & posed shots",
        "100+ edited photos",
        "Online gallery delivery",
        "Print release included",
      ],
    },
    {
      title: "Wedding Package",
      price: "Starting at $1,999",
      popular: true,
      features: [
        "8-12 hour coverage",
        "Engagement session included",
        "Second photographer",
        "300+ edited photos",
        "Custom wedding album",
        "Video highlights",
        "Unlimited consultations",
      ],
    },
    {
      title: "Commercial Photography",
      price: "Custom Pricing",
      popular: false,
      features: [
        "Product photography",
        "Brand content creation",
        "Marketing materials",
        "Usage rights included",
        "Fast turnaround",
        "Multiple revisions",
      ],
    },
  ];

  const addons = [
    { name: "Additional Hour", price: "$150" },
    { name: "Rush Delivery (24hr)", price: "$200" },
    { name: "Extra Photographer", price: "$300" },
    { name: "Photo Album (20 pages)", price: "$400" },
    { name: "Video Package", price: "$500" },
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
              Tailored <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Professional photography services designed to meet your unique needs and exceed your expectations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`relative glass-card p-8 border-border hover:border-primary/50 transition-all duration-700 hover-lift hover:shadow-glow-strong animate-fade-in overflow-hidden group ${
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

                  <button className="w-full py-3 glass-strong rounded-full font-semibold hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      Choose Package
                      <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={18} />
                    </span>
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-16 animate-fade-in border border-primary/20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
              Enhance Your <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Customize your package with our premium add-ons
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "✨",
                title: "Professional Editing",
                desc: "Expert color grading and retouching on all images",
              },
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "Receive your edited photos within 2-3 weeks",
              },
              {
                icon: "🔒",
                title: "Print Release",
                desc: "Full rights to print and share your photos",
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

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Session?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-glow-strong transition-all group"
            >
              <span>Contact Us</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
