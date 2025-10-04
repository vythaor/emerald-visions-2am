import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/2amstudio.vn", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com/2amstudio", label: "Facebook" },
    // { icon: Twitter, url: "https://twitter.com/2amstudio", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Styles", href: "/styles" },
    { label: "Services", href: "/services" },
    { label: "Equipment", href: "/equipment" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative z-10 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              2amstudio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Capturing moments with artistic excellence since 2022
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>phvythao@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Manchester, UK & Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-primary/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all hover-lift group"
                  aria-label={social.label}
                >
                  <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-muted-foreground text-sm">
          <p>© 2025 2amstudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
