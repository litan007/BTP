import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects, productCategories } from '../data/projects';

type CategoryFilter = (typeof productCategories)[number]['id'];

export default function ProductsPage() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        label="NOS PRODUITS"
        title="Réalisations & projets"
        subtitle="Chaque chantier raconte une histoire. Découvrez notre portfolio de constructions, rénovations et extensions."
        image="/photos/photo_produit.webp"
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Produits' },
        ]}
      />

      <section className="page-section">
        <div className="container">
          <Reveal>
            <div className="filter-bar">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-bar__btn${filter === cat.id ? ' filter-bar__btn--active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="products-grid">
            {filtered.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 80} variant="up">
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="products-empty">Aucun projet dans cette catégorie pour le moment.</p>
          )}

          <Reveal className="page-cta">
            <p>Un projet similaire en tête ?</p>
            <Button to="/contact" size="lg" showArrow className="btn--glow">
              PARLONS DE VOTRE PROJET
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
