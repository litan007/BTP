import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { services, processSteps } from '../data/services';
import { ServiceIcon } from '../components/icons/Icons';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="NOS SERVICES"
        title="Des solutions complètes pour chaque projet"
        subtitle="Construction, rénovation, extension et accompagnement — un savoir-faire reconnu depuis 15 ans."
        image="/photos/photo_service.jpg"
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="page-section">
        <div className="container">
          <div className="services-detail">
            {services.map((service, index) => (
              <Reveal key={service.id} variant={index % 2 === 0 ? 'left' : 'right'} delay={index * 80}>
                <article className="service-detail" id={service.id}>
                  <div className="service-detail__icon-wrap">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <div className="service-detail__content">
                    <span className="service-detail__tag">{service.subtitle}</span>
                    <h2 className="service-detail__title">{service.title}</h2>
                    <p className="service-detail__desc">{service.description}</p>
                    <ul className="service-detail__features">
                      {service.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <Reveal className="section-intro">
            <span className="label">NOTRE MÉTHODE</span>
            <h2 className="section-title">Un processus clair, de A à Z</h2>
          </Reveal>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 100} variant="up">
                <div className="process-card">
                  <span className="process-card__step">{step.step}</span>
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__text">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="page-cta">
            <p>Prêt à démarrer votre projet ?</p>
            <Button to="/contact" size="lg" showArrow className="btn--glow">
              DEMANDER UN DEVIS GRATUIT
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
