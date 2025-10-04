import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import GlassBackground from "@/components/GlassBackground";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@2amstudio.com", link: "mailto:hello@2amstudio.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Los Angeles, CA", link: "https://maps.google.com" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/2amstudio" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/2amstudio" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/2amstudio" },
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
              <Send className="text-primary animate-pulse" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              Let's Create <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to capture your special moments? We'd love to hear from you and discuss your project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 animate-fade-in hover-lift transition-all border border-primary/20">
              <h2 className="font-display text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary/50 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary/50 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary/50 transition-all outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary/50 transition-all outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait & Model</option>
                    <option value="wedding">Wedding</option>
                    <option value="event">Event Coverage</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary/50 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow-strong transition-all py-6 text-lg group">
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="transition-transform group-hover:translate-x-1" size={20} />
                  </span>
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card rounded-2xl p-6 hover-lift hover:shadow-glow transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl glass border border-primary/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all hover-lift group"
                      aria-label={social.label}
                    >
                      <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "By Appointment" },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "24hr", label: "Response Time" },
                    { value: "500+", label: "Happy Clients" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center glass rounded-xl p-4">
                      <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 pt-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 2amstudio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
