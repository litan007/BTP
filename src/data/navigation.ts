export interface NavLinkItem {
  to: string;
  label: string;
  end?: boolean;
}

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/blog', label: 'Blog' },
  { to: '/services', label: 'Nos Services' },
  { to: '/produits', label: 'Produits' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];

export const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/blog', label: 'Blog' },
  { to: '/services', label: 'Services' },
  { to: '/produits', label: 'Produits' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];
