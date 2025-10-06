import { Camera, Lightbulb, Monitor, Settings, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
const CLOUDINARY_IMG = "https://res.cloudinary.com/ddwq9besf/image/upload/v1759756630/DSC01839_u15qjp.jpg";

const EquipmentPage = () => {
  const gear = [
    {
      icon: Camera,
      title: "Professional Cameras",
      description: "Sony A7 III (UK), Fuji Xpro2 (VN) - Full-frame mirrorless systems delivering 45+ megapixel resolution",
      specs: ["45MP Resolution", "8K Video", "ISO 100-51,200"],
    },
    // {
    //   icon: Lightbulb,
    //   title: "Studio Lighting",
    //   description: "Profoto & Godox lighting systems with continuous and strobe options for perfect illumination",
    //   specs: ["1000W Power", "TTL Support", "Wireless Control"],
    // },
    {
      icon: Monitor,
      title: "Editing Suite",
      description: "Adobe Creative Suite with calibrated displays for professional color grading and retouching",
      specs: ["Lightroom", "Photoshop", "Evoto"],
    },
    {
      icon: Settings,
      title: "Premium Lenses",
      description: "Professional glass collection including Tamron 28-75mm f/2.8 G2 and Fuji  XF 35 f/1.4 R",
      specs: ["Weather Sealed", "Fast Aperture", "Image Stabilization"],
    },
    {
      icon: Cpu,
      title: "Backup Systems",
      description: "Redundant storage and dual camera setups ensuring your memories are never lost",
      specs: ["Google Drive"],
    },
  ];

  const workflow = [
    { 
      step: "1", 
      title: "Consultation", 
      desc: "Discuss your vision, style preferences, and specific requirements in detail",
      duration: "30-60 min",
    },
    { 
      step: "2", 
      title: "Planning", 
      desc: "Location scouting, mood board creation, and scheduling the perfect time",
      duration: "1-2 weeks",
    },
    { 
      step: "3", 
      title: "Photoshoot", 
      desc: "Professional session with expert direction and multiple setups",
      duration: "2-8 hours",
    },
    { 
      step: "4", 
      title: "Editing", 
      desc: "Careful selection, professional retouching, and color grading",
      duration: "2-3 weeks",
    },
    { 
      step: "5", 
      title: "Delivery", 
      desc: "High-resolution files delivered via beautiful online gallery",
      duration: "Same day",
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
              <Settings className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Equipment & Process
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Gear</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              State-of-the-art equipment and refined workflow ensuring exceptional results every time
            </p>
          </div>

          {/* Equipment Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Equipment List */}
              <div className="space-y-6 animate-fade-in">
                {gear.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card p-6 rounded-2xl hover-lift hover:shadow-glow transition-all duration-700 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                          <item.icon className="text-primary" size={28} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.specs.map((spec) => (
                            <span
                              key={spec}
                              className="px-3 py-1 glass rounded-full text-xs font-medium border border-primary/20"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Equipment Image */}
              <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="relative rounded-3xl overflow-hidden glass-card p-4 hover-lift transition-all hover:shadow-glow-strong">
                  <img
                    src={CLOUDINARY_IMG}
                    alt="Professional camera equipment"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-30 rounded-2xl" />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6 border border-primary/30 hover-lift">
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    3+
                  </p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Section */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Workflow</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A seamless, refined process from initial concept to final delivery
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-primary opacity-20" style={{ zIndex: 0 }} />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {workflow.map((item, index) => (
                  <div
                    key={item.step}
                    className="relative animate-fade-in group"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="glass-card rounded-2xl p-6 hover-lift hover:shadow-glow transition-all h-full">
                      {/* Step Number */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold shadow-glow relative z-10 group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 text-center group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-center mb-3 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-xs text-center glass rounded-full py-1 px-3 inline-block w-full">
                        ⏱ {item.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "5000+", label: "Photos Delivered" },
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Events Covered" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center hover-lift hover:shadow-glow transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-primary/20 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Experience the Difference
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Professional equipment and expert workflow combine to create stunning results
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-glow-strong transition-all group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EquipmentPage;
