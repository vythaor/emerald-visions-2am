import { Camera } from "lucide-react";
import portraitImg from "@/assets/portrait-style.jpg";
import weddingImg from "@/assets/wedding-style.jpg";
import sportImg from "@/assets/sport-style.jpg";
import outdoorImg from "@/assets/outdoor-style.jpg";
import eventImg from "@/assets/event-style.jpg";

const Styles = () => {
  const styles = [
    {
      title: "Portrait & Model",
      description: "Elegant studio portraits and fashion model photography with professional lighting",
      image: portraitImg,
    },
    {
      title: "Wedding",
      description: "Romantic wedding moments captured with artistic storytelling",
      image: weddingImg,
    },
    {
      title: "Sport & Action",
      description: "Dynamic sports photography freezing moments of peak performance",
      image: sportImg,
    },
    {
      title: "Outdoor & Nature",
      description: "Beautiful natural landscapes and outdoor portrait sessions",
      image: outdoorImg,
    },
    {
      title: "Events & Corporate",
      description: "Professional event coverage and corporate photography",
      image: eventImg,
    },
  ];

  return (
    <section id="styles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Camera size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Specialties</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Photography <span className="bg-gradient-primary bg-clip-text text-transparent">Styles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we capture every moment with artistic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div
              key={style.title}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                  {style.title}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Additional Styles */}
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-500 p-8 flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center">
              <Camera className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-display text-2xl font-bold mb-2">& More</h3>
              <p className="text-muted-foreground">
                New Year, Christmas, Indoor, Commercial, and custom photography sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Styles;
