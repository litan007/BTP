export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: 'construction' | 'renovation' | 'extension' | 'accompagnement';
}

export const services: Service[] = [
  {
    id: 'construction',
    title: 'CONSTRUCTION',
    subtitle: 'Neuf sur mesure',
    description:
      'De la conception à la livraison, nous bâtissons des maisons uniques, adaptées à votre terrain, votre budget et votre mode de vie.',
    features: ['Étude personnalisée', 'Matériaux premium', 'Suivi de chantier', 'Garantie décennale'],
    icon: 'construction',
  },
  {
    id: 'renovation',
    title: 'RÉNOVATION',
    subtitle: 'Intérieure & extérieure',
    description:
      'Redonnez vie à votre habitat avec des rénovations complètes ou ciblées, alliant esthétique contemporaine et performance énergétique.',
    features: ['Rénovation globale', 'Isolation thermique', 'Aménagement intérieur', 'Ravalement façade'],
    icon: 'renovation',
  },
  {
    id: 'extension',
    title: 'EXTENSION',
    subtitle: 'Gagnez en espace',
    description:
      'Agrandissez votre surface habitable sans déménager. Extensions bois, surélevation ou vérandas intégrées à l\'existant.',
    features: ['Extension bois', 'Surélévation', 'Véranda design', 'Permis de construire'],
    icon: 'extension',
  },
  {
    id: 'accompagnement',
    title: 'ACCOMPAGNEMENT',
    subtitle: 'De A à Z',
    description:
      'Un interlocuteur unique vous guide à chaque étape : administratif, technique, financier et esthétique.',
    features: ['Conseil architectural', 'Gestion administrative', 'Planning détaillé', 'Réception des travaux'],
    icon: 'accompagnement',
  },
];

export const processSteps = [
  { step: '01', title: 'Échange & visite', text: 'Nous écoutons votre projet et visitons le site pour une première analyse.' },
  { step: '02', title: 'Devis & conception', text: 'Étude technique, plans et devis transparent, sans surprise.' },
  { step: '03', title: 'Réalisation', text: 'Chantier encadré par nos chefs de projet et artisans qualifiés.' },
  { step: '04', title: 'Livraison', text: 'Réception des travaux et suivi post-livraison garanti.' },
];
