import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { servicesData } from "@/data/services";

const Services = () => {
  const services = servicesData;

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored photography packages designed to meet your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card p-6 border-border hover:border-primary/50 transition-all hover-lift hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700 rounded-lg" />
              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center glass rounded-2xl p-6 max-w-2xl mx-auto border border-primary/20">
          <p className="text-muted-foreground mb-4">
            All packages include professional editing and color grading
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
          >
            <span>View all services & pricing</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
