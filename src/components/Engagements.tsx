import Button from './Button';
import Reveal from './Reveal';

export default function Engagements() {
  return (
    <section className="engagements">
      <div className="section-glow section-glow--engagements" aria-hidden="true" />

      <div className="container engagements__inner">
        <Reveal variant="left" className="engagements__content">
          <span className="label">NOS ENGAGEMENTS</span>
          <h2 className="section-title">
            LA QUALITÉ AU COEUR
            <br />
            DE CHAQUE PROJET
          </h2>
          <p className="engagements__desc">
            Matériaux sélectionnés, équipes expérimentées et suivi rigoureux.
          </p>
          <Button to="/a-propos" variant="outline" showArrow>
            EN SAVOIR PLUS
          </Button>
        </Reveal>

        <Reveal variant="right" delay={120} className="engagements__visual">
          <div className="engagements__frame">
            <img
              src="/photos/photo-1504307651254-35680f356dfd.jpg"
              alt="Professionnel du bâtiment consultant des plans"
              className="engagements__img"
            />
            <div className="engagements__frame-accent" aria-hidden="true" />
          </div>
          <div className="badge">
            <span className="badge__number">15+</span>
            <span className="badge__text">ANS D'EXPÉRIENCE</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
