import { Link } from 'react-router-dom';
import Logo from './Logo';
import { footerLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p className="footer__tagline">
            Construire avec confiance, pour durer. Votre partenaire BTP depuis 15 ans.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Navigation</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <p>contact@batirexcellence.fr</p>
          <p>032 22 332 42</p>
          <p>Lot E26 IVANDRY, Antananarivo Madagascar</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">&copy; 2026 BÂTIR EXCELLENCE. Tous droits réservés.</p>
        <p className="footer__legal">Garantie décennale · RGE · Qualibat</p>
      </div>
    </footer>
  );
}
