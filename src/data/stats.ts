export interface Stat {
  value: string;
  label: string;
  icon: 'projects' | 'experience' | 'satisfaction' | 'guarantee';
}

export const stats: Stat[] = [
  { value: '+200', label: 'Projets réalisés', icon: 'projects' },
  { value: '15', label: "Années d'expérience", icon: 'experience' },
  { value: '100%', label: 'Clients satisfaits', icon: 'satisfaction' },
  { value: 'Garantie', label: 'décennale', icon: 'guarantee' },
];
