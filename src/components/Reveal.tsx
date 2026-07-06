import type { CSSProperties, ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  style,
}: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ delay });

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant}${isVisible ? ' reveal--visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
