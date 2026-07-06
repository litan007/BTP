export interface Project {
  id: string;
  title: string;
  type: string;
  category: 'construction' | 'renovation' | 'extension';
  image: string;
  alt: string;
  surface?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    id: 'maison-contemporaine',
    title: 'Maison Contemporaine',
    type: 'Construction neuve',
    category: 'construction',
    image: '/photos/photo-1600596542815-ffad4c1539a9.jpg',
    alt: 'Maison contemporaine',
    surface: '185 m²',
    location: 'Lyon',
  },
  {
    id: 'renovation-complete',
    title: 'Rénovation complète',
    type: 'Intérieur & extérieur',
    category: 'renovation',
    image: '/photos/photo-1564013799919-ab600027ffc6.jpg',
    alt: 'Rénovation complète',
    surface: '120 m²',
    location: 'Grenoble',
  },
  {
    id: 'extension-bois',
    title: 'Extension bois',
    type: 'Design & confort',
    category: 'extension',
    image: '/photos/photo-1600585154340-be6161a56a0c.jpg',
    alt: 'Extension bois',
    surface: '45 m²',
    location: 'Annecy',
  },
  {
    id: 'villa-moderne',
    title: 'Villa Moderne',
    type: 'Construction neuve',
    category: 'construction',
    image: '/photos/photo-1613490493576-7fde63acd811.jpg',
    alt: 'Villa moderne',
    surface: '220 m²',
    location: 'Aix-en-Provence',
  },
  {
    id: 'amenagement-interieur',
    title: 'Aménagement intérieur',
    type: 'Rénovation',
    category: 'renovation',
    image: '/photos/photo-1600607687939-ce8a6c25118c.webp',
    alt: 'Aménagement intérieur',
    surface: '90 m²',
    location: 'Chambéry',
  },
  {
    id: 'surélévation',
    title: 'Surélévation',
    type: 'Extension',
    category: 'extension',
    image: '/photos/photo-1288381215-170667a.jpg',
    alt: 'Surélévation',
    surface: '60 m²',
    location: 'Valence',
  },
];

export const productCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'construction', label: 'Construction' },
  { id: 'renovation', label: 'Rénovation' },
  { id: 'extension', label: 'Extension' },
] as const;
