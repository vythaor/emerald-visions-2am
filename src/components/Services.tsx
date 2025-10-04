import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Professional Photoshoot",
      features: [
        "2-4 hour session",
        "Multiple outfit changes",
        "Professional lighting setup",
        "50+ edited photos",
        "High-resolution digital files",
      ],
    },
    {
      title: "Event Coverage",
      features: [
        "Full-day event coverage",
        "Multiple photographers",
        "Candid & posed shots",
        "100+ edited photos",
        "Online gallery delivery",
      ],
    },
    {
      title: "Wedding Package",
      features: [
        "8-12 hour coverage",
        "Engagement session included",
        "Second photographer",
        "300+ edited photos",
        "Custom wedding album",
        "Video highlights",
      ],
    },
    {
      title: "Commercial Photography",
      features: [
        "Product photography",
        "Brand content creation",
        "Marketing materials",
        "Usage rights included",
        "Fast turnaround",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
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
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="text-primary mt-0.5 shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All packages include professional editing and color grading
          </p>
          <a
            href="#contact"
            className="inline-block text-primary font-semibold hover:underline"
          >
            Contact us for custom packages →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
