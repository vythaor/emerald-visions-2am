import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@2amstudio.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Los Angeles, CA" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/2amstudio" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/2amstudio" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/2amstudio" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to capture your special moments? Reach out to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-12 py-6">
              Book Your Session
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 2amstudio. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
