import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowRight, ClockIcon, MapIcon } from '../components/icons/Icons';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const allImages = project
    ? [project.image, ...(project.gallery?.map((g) => g.image) ?? [])]
    : [];

  const [activeIndex, setActiveIndex] = useState(0);

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
      <section className="pd-hero">
        <div className="container">
          <Link to="/produits" className="product-detail__back">&larr; Retour aux produits</Link>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pd-gallery">
            <div className="pd-gallery__main">
              <img
                src={allImages[activeIndex]}
                alt={`${project.title} - Photo ${activeIndex + 1}`}
              />
              <span className="pd-gallery__counter">{activeIndex + 1} / {allImages.length}</span>
            </div>

            {allImages.length > 1 && (
              <div className="pd-gallery__thumbs">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    className={`pd-gallery__thumb${i === activeIndex ? ' pd-gallery__thumb--active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={img} alt={`Miniature ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pd-info">
            <div className="pd-info__main">
              <span className="label">{project.type}</span>
              <h1 className="pd-info__title">{project.title}</h1>

              <div className="pd-info__meta">
                {project.surface && (
                  <span className="pd-info__meta-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    {project.surface}
                  </span>
                )}
                {project.location && (
                  <span className="pd-info__meta-item">
                    <MapIcon />
                    {project.location}
                  </span>
                )}
                {project.duration && (
                  <span className="pd-info__meta-item">
                    <ClockIcon />
                    {project.duration}
                  </span>
                )}
              </div>

              {project.description && (
                <div className="pd-info__desc">
                  <h2>Description</h2>
                  <p>{project.description}</p>
                </div>
              )}
            </div>

            <aside className="pd-info__sidebar">
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

              <Link to="/contact" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
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
