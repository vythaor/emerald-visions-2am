import { Link } from "react-router-dom";
import { ArrowRight, Camera, Heart, Zap, Sun, Building } from "lucide-react";

interface StyleNavItem {
  title: string;
  path: string;
  icon: React.ComponentType<any>;
  description: string;
}

const StyleNavigation = () => {
  const styles: StyleNavItem[] = [
    {
      title: "Indoor & Studio",
      path: "/styles/indoor",
      icon: Camera,
      description: "Professional indoor photography"
    },
    {
      title: "Wedding",
      path: "/styles/wedding",
      icon: Heart,
      description: "Romantic wedding moments"
    },
    {
      title: "Sport & Action",
      path: "/styles/sport",
      icon: Zap,
      description: "Dynamic sports photography"
    },
    {
      title: "Outdoor & Nature",
      path: "/styles/outdoor",
      icon: Sun,
      description: "Beautiful natural landscapes"
    },
    {
      title: "Events & Corporate",
      path: "/styles/event",
      icon: Building,
      description: "Professional event coverage"
    }
  ];

  return (
    <div className="glass-card rounded-3xl p-8 border border-primary/20 animate-fade-in">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
        Explore Other <span className="bg-gradient-primary bg-clip-text text-transparent">Styles</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {styles.map((style, index) => (
          <Link
            key={style.path}
            to={style.path}
            className="group relative glass-strong rounded-2xl p-4 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in border border-primary/20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <style.icon className="text-primary-foreground" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors duration-300">
                  {style.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {style.description}
                </p>
              </div>
              <ArrowRight 
                className="text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
                size={16} 
              />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link
          to="/styles"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-semibold"
        >
          <span>View All Styles</span>
          <ArrowRight className="transition-transform duration-300 hover:translate-x-1" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default StyleNavigation;
