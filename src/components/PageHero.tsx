import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { label: string; to?: string }[];
  children?: React.ReactNode;
}

export default function PageHero({ label, title, subtitle, image, breadcrumb, children }: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={image ? ({ '--page-hero-bg': `url(${image})` } as CSSProperties) : undefined}
    >
      <div className="page-hero__overlay" />
      <div className="page-hero__glow" aria-hidden="true" />

      <div className="container page-hero__content">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="breadcrumb__item">
                {i > 0 && <span className="breadcrumb__sep">/</span>}
                {item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span className="breadcrumb__current">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <Reveal delay={80}>
          <span className="label">{label}</span>
        </Reveal>
        <Reveal delay={180}>
          <h1 className="page-hero__title">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={280}>
            <p className="page-hero__subtitle">{subtitle}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={380}>
            <div className="page-hero__actions">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
