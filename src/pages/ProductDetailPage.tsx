import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowRight, ClockIcon, MapIcon } from '../components/icons/Icons';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="page-section">
        <div className="container" style={{ textAlign: 'center', paddingTop: 80 }}>
          <h1>Projet non trouvé</h1>
          <p style={{ color: 'var(--text-muted)', margin: '16px 0 32px' }}>
            Le projet que vous recherchez n'existe pas.
          </p>
          <Link to="/produits" className="btn btn--primary">
            <span className="btn__label">Retour aux produits</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="product-detail-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="product-detail-hero__overlay" />
        <div className="container product-detail-hero__content">
          <Link to="/produits" className="product-detail__back">&larr; Retour aux produits</Link>
          <span className="label">{project.type}</span>
          <h1 className="product-detail-hero__title">{project.title}</h1>
          <div className="product-detail-hero__infos">
            {project.surface && (
              <span className="product-detail-hero__info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                {project.surface}
              </span>
            )}
            {project.location && (
              <span className="product-detail-hero__info">
                <MapIcon />
                {project.location}
              </span>
            )}
            {project.duration && (
              <span className="product-detail-hero__info">
                <ClockIcon />
                {project.duration}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-detail__grid">
            <div className="product-detail__main">
              {project.description && (
                <div className="product-detail__desc-block">
                  <h2 className="section-title">Description</h2>
                  <p>{project.description}</p>
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="product-detail__gallery">
                  <div className="product-detail__gallery-grid">
                    {project.gallery.map((item, i) => (
                      <div key={i} className="product-detail__gallery-item">
                        <img src={item.image} alt={`${project.title} - Réalisation ${i + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="product-detail__sidebar">
              {project.price && (
                <div className="product-detail__card">
                  <span className="product-detail__card-label">Prix</span>
                  <span className="product-detail__card-value">{project.price}</span>
                </div>
              )}
              {project.duration && (
                <div className="product-detail__card">
                  <span className="product-detail__card-label">Durée</span>
                  <span className="product-detail__card-value">{project.duration}</span>
                </div>
              )}
              {project.surface && (
                <div className="product-detail__card">
                  <span className="product-detail__card-label">Surface</span>
                  <span className="product-detail__card-value">{project.surface}</span>
                </div>
              )}
              {project.location && (
                <div className="product-detail__card">
                  <span className="product-detail__card-label">Localisation</span>
                  <span className="product-detail__card-value">{project.location}</span>
                </div>
              )}

              <Link to="/contact" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}>
                <span className="btn__label">NOUS CONTACTER</span>
                <span className="btn__arrow"><ArrowRight /></span>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
