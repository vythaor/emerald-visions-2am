// Shared services data - single source of truth
export const servicesData = [
  {
    title: "Professional Photoshoot",
    features: [
      "1-2 hour session",
      "1-2 outfit changes", 
      "Basic lighting setup",
      "20+ edited photos",
      "Digital files included",
      "Online gallery access",
    ],
  },
  {
    title: "Event Coverage", 
    features: [
      "2-4 hour coverage",
      "Candid & posed shots",
      "50+ edited photos",
      "Online gallery delivery",
      "Print release included",
      "Basic editing included",
    ],
  },
  {
    title: "Wedding Package",
    features: [
      "6-8 hour coverage",
      "Engagement session included",
      "150+ edited photos",
      "Basic wedding album",
      "Unlimited consultations",
      "Flexible payment plans",
    ],
  },
  {
    title: "Commercial Photography",
    features: [
      "Collaborative approach",
      "Creative experimentation",
      "Portfolio building",
      "Usage rights included",
      "Learning together",
      "Flexible pricing",
    ],
  },
];

// Enhanced services data for ServicesPage (with pricing and popular flags)
export const servicesPageData = [
  {
    title: "Portrait Session",
    price: "Starting at £150",
    popular: false,
    features: servicesData[0].features, // Professional Photoshoot features
  },
  {
    title: "Small Event",
    price: "Starting at £250", 
    popular: true,
    features: servicesData[1].features, // Event Coverage features
  },
  {
    title: "Wedding Package",
    price: "Starting at £300",
    popular: true,
    features: servicesData[2].features, // Wedding Package features
  },
  {
    title: "Creative Projects",
    price: "Starting at £200",
    popular: false,
    features: servicesData[3].features, // Commercial Photography features
  },
];
