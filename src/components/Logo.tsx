import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  return (
    <Link to="/" className={`logo${variant === 'footer' ? ' logo--footer' : ''}`}>
      <svg className="logo__icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="#1a2332" stroke="#f97316" strokeWidth="1.5" />
        <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" fill="#f97316" opacity="0.9" />
        <polygon points="20,14 26,18 26,22 20,26 14,22 14,18" fill="#fff" />
      </svg>
      <span className="logo__text">BÂTIR EXCELLENCE</span>
    </Link>
  );
}
