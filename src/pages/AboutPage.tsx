import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import Stats from '../components/Stats';
import { values, timeline, certifications } from '../data/about';

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="À PROPOS"
        title="Bâtir l'excellence depuis 2010"
        subtitle="Une entreprise familiale devenue référence régionale, portée par la passion du métier et l'exigence du résultat."
        image="/photos/photo_a_propos.jpg"
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'À Propos' },
        ]}
      />

      <section className="page-section">
        <div className="container about-intro">
          <Reveal variant="left" className="about-intro__text">
            <span className="label">NOTRE HISTOIRE</span>
            <h2 className="section-title">Plus qu'un constructeur, un partenaire de confiance</h2>
            <p>
              Fondée en 2010, BÂTIR EXCELLENCE est née d'une conviction simple : chaque projet mérite
              la même attention, qu'il s'agisse d'une extension de 30 m² ou d'une villa de 200 m².
            </p>
            <p>
              Aujourd'hui, une équipe de 25 professionnels passionnés met son expertise au service
              de particuliers et de professionnels, avec un engagement total sur la qualité, les délais
              et la transparence.
            </p>
          </Reveal>

          <Reveal variant="right" delay={120} className="about-intro__visual">
            <div className="about-intro__image-wrap">
              <img
                src="/photos/photo-1504307651254-35680f356dfd.jpg"
                alt="Équipe BÂTIR EXCELLENCE sur chantier"
                className="about-intro__img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="page-section page-section--alt">
        <div className="container">
          <Reveal className="section-intro">
            <span className="label">NOS VALEURS</span>
            <h2 className="section-title">Ce qui nous guide au quotidien</h2>
          </Reveal>

          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90} variant="up">
                <div className="value-card">
                  <span className="value-card__num">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__text">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <Reveal className="section-intro">
            <span className="label">NOTRE PARCOURS</span>
            <h2 className="section-title">15 ans de croissance</h2>
          </Reveal>

          <div className="timeline">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 80} variant="left">
                <div className="timeline__item">
                  <span className="timeline__year">{item.year}</span>
                  <span className="timeline__event">{item.event}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="certifications">
            {certifications.map((cert) => (
              <span key={cert} className="certifications__badge">{cert}</span>
            ))}
          </Reveal>

          <Reveal className="page-cta">
            <Button to="/contact" size="lg" showArrow className="btn--glow">
              TRAVAILLONS ENSEMBLE
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
