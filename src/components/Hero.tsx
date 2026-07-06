import { Link } from 'react-router-dom';
import Button from './Button';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="container hero__content">
        <Reveal delay={100}>
          <p className="hero__eyebrow">Entreprise générale du bâtiment</p>
        </Reveal>

        <Reveal delay={220}>
          <h1 className="hero__title">
            CONSTRUIRE AVEC <span className="text-gradient">CONFIANCE</span>,<br />
            POUR DURER.
          </h1>
        </Reveal>

        <Reveal delay={340}>
          <p className="hero__subtitle">
            Des projets sur mesure, pensés pour vous et construits pour l'avenir.
          </p>
        </Reveal>

        <Reveal delay={460}>
          <div className="hero__actions">
            <Button to="/contact" size="lg" showArrow className="btn--glow">
              DEMANDER UN DEVIS
            </Button>
            <Button to="/produits" variant="outline" size="lg">
              VOIR NOS RÉALISATIONS
            </Button>
          </div>
        </Reveal>
      </div>

      <Link to="/services" className="hero__scroll" aria-label="Découvrir nos services">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Découvrir</span>
      </Link>
    </section>
  );
}
