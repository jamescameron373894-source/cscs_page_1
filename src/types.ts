export interface CSCSCard {
  id: string;
  title: string;
  subtitle: string;
  colorName: string; // 'Green' | 'Blue' | 'Gold' | 'Black'
  colorClass: string; // CSS color representation for borders/bg accents
  accentColor: string; // Hex color or tailwind class
  badgeColor: string; // tailwind bg color for badge
  textColor: string; // text color matching the name
  image: string; // Card illustration or icon representational image
  description: string;
  requirements: string[];
  nvqLevel?: string;
  isPopular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
