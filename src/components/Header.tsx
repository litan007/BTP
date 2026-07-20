import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '../data/navigation';
import { useAuth } from '../auth/AuthContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';

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

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/admin', { replace: true });
  };

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
          {isAdmin && (
            <>
              <Link
                to="/signup"
                state={{ role: 'admin' }}
                className="nav__link nav__link--signup"
                onClick={closeMenu}
              >
                <span>S'inscrire</span>
              </Link>
              <button
                type="button"
                className="nav__link nav__link--logout"
                onClick={handleLogout}
              >
                <span>Déconnexion</span>
              </button>
            </>
          )}
        </nav>

        {user ? (
          <Button to="/produits" size="sm" className="header__cta btn--glow">
            MODÈLES PRIVÉS
          </Button>
        ) : (
          <Button to="/admin" size="sm" className="header__cta btn--glow">
            SE CONNECTER
          </Button>
        )}

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
