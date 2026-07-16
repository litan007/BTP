import { useEffect, useState, type FormEvent } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects, productCategories } from '../data/projects';
import { useAuth } from '../auth/AuthContext';
import { loadAdminModels, saveAdminModels, type AdminModelDraft } from '../data/adminModels';

type CategoryFilter = (typeof productCategories)[number]['id'];

type DraftForm = Omit<AdminModelDraft, 'id' | 'createdAt'>;

const initialDraft: DraftForm = {
  title: '',
  type: '',
  category: 'construction',
  imageUrl: '',
  surface: '',
  location: '',
  price: '',
  duration: '',
  description: '',
  hiddenFromClients: true,
};

export default function ProductsPage() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [models, setModels] = useState<AdminModelDraft[]>([]);
  const [form, setForm] = useState<DraftForm>(initialDraft);

  useEffect(() => {
    setModels(loadAdminModels());
  }, []);

  const update = <K extends keyof DraftForm>(field: K, value: DraftForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nextModel: AdminModelDraft = {
      ...form,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    const nextModels = [nextModel, ...models];
    setModels(nextModels);
    saveAdminModels(nextModels);
    setForm(initialDraft);
  };

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
          {user?.role === 'admin' && (
            <Reveal className="products-admin">
              <div className="products-admin__header">
                <div>
                  <span className="label">MODELE PRIVÉ</span>
                  <h2 className="section-title">Ajouter un nouveau modèle</h2>
                  <p className="products-admin__text">
                    Ce formulaire sert à préparer des modèles visibles uniquement côté admin. Ils ne s'affichent pas dans la grille publique.
                  </p>
                </div>
                <span className="products-admin__badge">Privé clients</span>
              </div>

              <form className="products-admin__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="form-field">
                    <span>Titre</span>
                    <input value={form.title} onChange={(e) => update('title', e.target.value)} required />
                  </label>
                  <label className="form-field">
                    <span>Type</span>
                    <input value={form.type} onChange={(e) => update('type', e.target.value)} required />
                  </label>
                </div>

                <div className="form-row">
                  <label className="form-field">
                    <span>Catégorie</span>
                    <select value={form.category} onChange={(e) => update('category', e.target.value as DraftForm['category'])}>
                      <option value="construction">Construction</option>
                      <option value="renovation">Rénovation</option>
                      <option value="extension">Extension</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Image</span>
                    <input value={form.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} placeholder="/photos/..." required />
                  </label>
                </div>

                <div className="form-row">
                  <label className="form-field">
                    <span>Surface</span>
                    <input value={form.surface} onChange={(e) => update('surface', e.target.value)} placeholder="120 m²" />
                  </label>
                  <label className="form-field">
                    <span>Localisation</span>
                    <input value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="Antananarivo" />
                  </label>
                </div>

                <div className="form-row">
                  <label className="form-field">
                    <span>Prix</span>
                    <input value={form.price} onChange={(e) => update('price', e.target.value)} placeholder="750 000 000 Ar" />
                  </label>
                  <label className="form-field">
                    <span>Durée</span>
                    <input value={form.duration} onChange={(e) => update('duration', e.target.value)} placeholder="6 mois" />
                  </label>
                </div>

                <label className="form-field">
                  <span>Description</span>
                  <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={4} />
                </label>

                <label className="admin-toggle">
                  <input
                    type="checkbox"
                    checked={form.hiddenFromClients}
                    onChange={(e) => update('hiddenFromClients', e.target.checked)}
                  />
                  <span>Ne pas afficher aux clients</span>
                </label>

                <button type="submit" className="btn btn--primary btn--lg btn--glow">
                  <span className="btn__label">Enregistrer le modèle privé</span>
                </button>
              </form>
            </Reveal>
          )}

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

          {user?.role === 'admin' && models.length > 0 && (
            <Reveal className="products-private-list">
              <div className="products-private-list__header">
                <h3 className="section-title">Modèles privés enregistrés</h3>
                <p>{models.length} modèle(s) sauvegardé(s) hors catalogue public.</p>
              </div>
              <div className="products-private-list__grid">
                {models.map((model) => (
                  <article key={model.id} className="products-private-card">
                    <img src={model.imageUrl} alt={model.title} />
                    <div>
                      <strong>{model.title}</strong>
                      <p>{model.type}</p>
                      <span>{model.hiddenFromClients ? 'Invisible pour les clients' : 'Visible'}</span>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          )}

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
