export interface ProductCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string; // Detailed description for product detail page
  image: string;
  backgroundColor: string;
  buttonColor: string;
  pastelColor?: string; // Pastel color for the listing page card background (optional, will be generated if not provided)
  buyLink?: string; // External link for buy button
  material?: string; // Material information
  sizes?: string[]; // Available sizes
}

