import { Camera, Lightbulb, Monitor, Settings, Cpu, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import Footer from "@/components/Footer";
import { cloudinaryUrl, DEFAULT_TRANSFORM } from "@/lib/cloudinary";

const EquipmentPage = () => {
  const gear = [
    {
      icon: Camera,
      title: "Professional Cameras",
      description: "Sony A7 III (UK Studio), Fuji X-Pro2 (Vietnam Studio) - Full-frame mirrorless systems delivering exceptional image quality",
      specs: ["24MP Sony", "24MP Fuji", "4K Video", "ISO 100-51,200"],
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
      description: "Professional glass collection: Tamron 28-75mm f/2.8 G2 (UK Studio), Fuji XF 35mm f/1.4 R (Vietnam Studio)",
      specs: ["Tamron 28-75mm f/2.8 G2", "Fuji XF 35mm f/1.4 R", "Weather Sealed", "Fast Aperture"],
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
      duration: "On Shedule",
    },
  ];

  const team = [
    {
      name: "UK Studio", 
      location: "Manchester, United Kingdom",
      avatar: cloudinaryUrl("IMG_8256-min_lqmddg.png", DEFAULT_TRANSFORM),
      gear: "Sony A7 III, Tamron 28-75mm f/2.8 G2",
      specialty: "Post-processing & Editing, Portrait Photography, Content Creation & Social Media Management",
    },
    {
      name: "Vietnam Studio",
      location: "Ho Chi Minh City, Vietnam",
      avatar: cloudinaryUrl("image_6_rphoeh.png", DEFAULT_TRANSFORM),
      gear: "Fuji X-Pro2, XF 35mm f/1.4 R",
      specialty: "Landscape Photography, Film Style Photography, Sales & Makeup Coordination",
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
              Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Professional photographers across our global studios, bringing expertise and creativity to every project
            </p>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="glass-card rounded-2xl p-8 hover-lift hover:shadow-glow-subtle transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    {/* Avatar */}
                    <div className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img
                        src={member.avatar}
                        alt={`${member.name} photographer`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.src = `https://via.placeholder.com/128x128/6366f1/ffffff?text=${member.name.charAt(0)}`;
                        }}
                      />
                    </div>

                    {/* Name and Location */}
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="text-sm">{member.location}</span>
                    </div>

                    {/* Gear Info */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wide">Equipment</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.gear}</p>
                    </div>

                    {/* Specialty */}
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wide">Specialty</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Gear</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional equipment across our UK and Vietnam studios ensuring the highest quality results
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Equipment List */}
              <div className="space-y-6 animate-fade-in">
                {gear.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card p-6 rounded-2xl hover-lift hover:shadow-glow-subtle transition-all duration-700 group"
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
                <div className="relative rounded-3xl overflow-hidden glass-photo p-4 hover-lift transition-all hover:shadow-glow-photo hover:glass-photo-hover">
                  <img
                    src={cloudinaryUrl("camera_hxmygl.jpg", DEFAULT_TRANSFORM)}
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
                    <div className="glass-card rounded-2xl p-6 hover-lift hover:shadow-glow-subtle transition-all h-full">
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
              { value: "1000+", label: "Photos Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "2+", label: "Events Covered" },
              { value: "50%", label: "Customers Returning Rate" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center hover-lift hover:shadow-glow-subtle transition-all animate-fade-in group"
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
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full font-semibold group relative"
            >
              <span className="relative z-10">Start Your Project</span>
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

export default EquipmentPage;
