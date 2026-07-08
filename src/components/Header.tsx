import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '../data/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <Button to="/contact" size="sm" className="header__cta btn--glow">
          DEVIS GRATUIT
        </Button>

        <button
          className={`burger${menuOpen ? ' burger--open' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
