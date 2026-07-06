import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './icons/Icons';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
}: ButtonProps) {
  const sizeClass = size === 'sm' ? 'btn--sm' : size === 'lg' ? 'btn--lg' : '';
  const variantClass = variant === 'outline' ? 'btn--outline' : 'btn--primary';
  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {showArrow && (
        <span className="btn__arrow">
          <ArrowRight />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href ?? '#'} className={classes}>
      {content}
    </a>
  );
}
