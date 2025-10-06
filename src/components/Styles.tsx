import { Camera, Sparkles } from "lucide-react";
import { cloudinaryUrl, DEFAULT_TRANSFORM } from "@/lib/cloudinary";
import { Link } from "react-router-dom";

const Styles = () => {
  const styles = [
        {
          title: "Indoor & Studio",
          description: "Professional indoor photography with controlled lighting and studio environments",
          image: cloudinaryUrl("DSC03710_oah2bk.jpg", DEFAULT_TRANSFORM),
          size: "large", // Takes more space
          route: "/styles/indoor",
        },
        {
          title: "Wedding",
          description: "Romantic wedding moments captured with artistic storytelling",
          image: cloudinaryUrl("DSCF0482_gcxzks.jpg", DEFAULT_TRANSFORM),
          size: "medium",
          route: "/styles/wedding",
        },
        {
          title: "Sport & Action",
          description: "Dynamic sports photography freezing moments of peak performance",
          image: cloudinaryUrl("DSC03440_hemqqo.jpg", DEFAULT_TRANSFORM),
          size: "medium",
          route: "/styles/sport",
        },
        {
          title: "Outdoor & Nature",
          description: "Beautiful natural landscapes and outdoor portrait sessions",
          image: cloudinaryUrl("DSCF0100_zidqs2.jpg", DEFAULT_TRANSFORM),
          size: "large",
          route: "/styles/outdoor",
        },
        {
          title: "Events & Corporate",
          description: "Professional event coverage and corporate photography",
          image: cloudinaryUrl("DSC08986_rjjyff.jpg", DEFAULT_TRANSFORM),
          size: "medium",
          route: "/styles/event",
        },
  ];

  return (
    <section id="styles" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/30 backdrop-blur">
            <Sparkles className="text-primary animate-pulse" size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
              Our Specialties
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Photography <span className="bg-gradient-primary bg-clip-text text-transparent">Styles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we capture every moment with artistic excellence
          </p>
        </div>

        {/* Photography Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Indoor & Studio */}
          <StyleCard 
            {...styles[0]} 
            className=""
            index={0}
          />
          
          {/* Wedding */}
          <StyleCard 
            {...styles[1]} 
            className=""
            index={1}
          />
          
          {/* Sport & Action */}
          <StyleCard 
            {...styles[2]} 
            className=""
            index={2}
          />
        </div>

        {/* Second Row - Outdoor and Event */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Outdoor & Nature - Large Left */}
          <StyleCard 
            {...styles[3]} 
            className=""
            index={3}
          />
          
          {/* Events & Corporate - Right */}
          <StyleCard 
            {...styles[4]} 
            className=""
            index={4}
          />
        </div>

        {/* Additional Styles Card */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-secondary p-[2px] animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative h-full bg-card/90 backdrop-blur rounded-2xl p-8 flex items-center justify-center overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            
            <div className="text-center relative z-10">
              <div className="relative inline-block mb-4">
                <Camera className="text-primary mx-auto" size={48} />
                <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">& More Styles</h3>
              <p className="text-muted-foreground max-w-md">
                New Year, Christmas, Indoor, Commercial, and custom photography sessions tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Style Card Component with unique effects
interface StyleCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  index: number;
  size?: string;
  route?: string;
}

const StyleCard = ({ title, description, image, className = "", index, route }: StyleCardProps) => {
  const cardElement = (
    <div
      className={`group relative overflow-hidden rounded-2xl animate-fade-in ${className}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient border wrapper */}
      <div className="absolute inset-0 bg-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl p-[2px]">
        <div className="w-full h-full bg-background rounded-2xl" />
      </div>

      {/* Main card content */}
      <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-2xl shadow-soft group-hover:shadow-glow-strong transition-all duration-700">
        {/* Image with advanced hover effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          
          {/* Multiple gradient overlays */}
          <div className="absolute inset-0 bg-gradient-overlay opacity-70 group-hover:opacity-60 transition-opacity duration-700" />
          
          {/* Animated gradient overlay on hover */}
          <div 
            className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(135deg, hsl(158 80% 65% / 0.2) 0%, hsl(152 76% 48% / 0.4) 100%)',
            }}
          />
          
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, hsl(158 80% 65% / 0.3) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>

        {/* Content with slide-up effect */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="transform transition-all duration-700 group-hover:-translate-y-2">
            {/* Title with gradient background on hover */}
            <div className="relative inline-block mb-2">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground relative z-10 transition-all duration-700 group-hover:text-shadow-lg">
                {title}
              </h3>
              <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 rounded-lg" />
            </div>
            
            {/* Description with smooth reveal */}
            <p className="text-foreground/70 text-sm md:text-base transition-all duration-700 group-hover:text-foreground/90 max-w-md">
              {description}
            </p>
            
            {/* View more indicator */}
            <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold uppercase tracking-wider">View Gallery</span>
              <svg 
                className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-all duration-700 rounded-tr-lg" />
      </div>
    </div>
  );

  if (route) {
    return (
      <Link to={route} className="block h-full w-full">
        {cardElement}
      </Link>
    );
  }

  return cardElement;
};

export default Styles;
