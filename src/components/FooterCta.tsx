import Button from './Button';
import Reveal from './Reveal';

export default function FooterCta() {
  return (
    <section className="footer-cta">
      <div className="footer-cta__blueprint" aria-hidden="true" />
      <div className="footer-cta__mesh" aria-hidden="true" />

      <div className="container footer-cta__inner">
        <Reveal variant="left" className="footer-cta__content">
          <span className="label label--dark">CONTACT</span>
          <h2 className="footer-cta__title">UN PROJET ? PARLONS-EN !</h2>
          <p className="footer-cta__desc">
            Nos experts vous accompagnent de l'idée à la réalisation.
          </p>
          <Button to="/contact" size="lg" showArrow className="btn--glow">
            CONTACTEZ-NOUS
          </Button>
        </Reveal>

        <Reveal variant="right" delay={150} className="footer-cta__decor">
          <div className="footer-cta__image-wrap">
            <img src="/photos/blueprint-house.png" alt="Plan architectural" className="footer-cta__image" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
