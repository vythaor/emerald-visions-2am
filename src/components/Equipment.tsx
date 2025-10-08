import { Camera, Lightbulb, Monitor, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cloudinaryUrl, DEFAULT_TRANSFORM } from "@/lib/cloudinary";

const Equipment = () => {
  const gear = [
    {
      icon: Camera,
      title: "Professional Cameras",
      description: "Sony A7 III (UK Studio), Fuji X-Pro2 (Vietnam Studio) - Full-frame mirrorless systems for exceptional image quality",
    },
    // {
    //   icon: Lightbulb,
    //   title: "Studio Lighting",
    //   description: "Profoto & Godox lighting systems with continuous and strobe options",
    // },
    {
      icon: Monitor,
      title: "Editing Suite",
      description: "Adobe Creative Suite with professional color grading and retouching",
    },
    {
      icon: Settings,
      title: "Premium Lenses",
      description: "Tamron 28-75mm f/2.8 G2 (UK), Fuji XF 35mm f/1.4 R (Vietnam) - Professional glass collection",
    },
  ];

  const workflow = [
    { step: "1", title: "Consultation", desc: "Discuss your vision and requirements" },
    { step: "2", title: "Planning", desc: "Location scouting and mood board creation" },
    { step: "3", title: "Photoshoot", desc: "Professional session with direction" },
    { step: "4", title: "Editing", desc: "Professional retouching and color grading" },
    { step: "5", title: "Delivery", desc: "High-resolution files via online gallery" },
  ];

  return (
    <section id="equipment" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Equipment Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Equipment</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional equipment across our UK and Vietnam studios ensuring the highest quality results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {gear.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl glass-card hover:glass-strong hover-lift transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                      <item.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft glass-card p-4 hover-lift transition-all">
              <img
                src={cloudinaryUrl("camera_hxmygl.jpg", DEFAULT_TRANSFORM)}
                alt="Professional camera equipment"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A seamless process from concept to delivery
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-primary opacity-30" style={{ zIndex: 0 }} />
            
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="flex-1 relative animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center glass-card rounded-2xl p-6 hover-lift hover:shadow-glow transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold shadow-glow relative z-10 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card rounded-2xl p-8 border border-primary/20">
          <p className="text-muted-foreground mb-4">Want to see our full equipment list and process?</p>
          <Link
            to="/equipment"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
          >
            <span>Learn more about our workflow</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
