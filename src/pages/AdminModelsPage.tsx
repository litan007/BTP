import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { loadAdminModels, saveAdminModels, type AdminModelDraft } from '../data/adminModels';

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

export default function AdminModelsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
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

  if (!user) {
    navigate('/admin');
    return null;
  }

  return (
    <section className="page-section admin-page">
      <div className="container">
        <div className="admin-page__header">
          <div>
            <span className="label">ESPACE PRIVÉ</span>
            <h1 className="section-title">Gestion des modèles</h1>
            <p className="admin-page__subtitle">
              Les modèles créés ici restent privés et ne sont pas injectés dans la liste publique du site.
            </p>
          </div>

          <div className="admin-page__actions">
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => navigate('/signup', { state: { role: 'admin' } })}
            >
              Inscrire un nouvel admin
            </button>

            <button
              type="button"
              className="btn btn--outline"
              onClick={() => {
                logout();
                navigate('/admin');
              }}
            >
              Se déconnecter
            </button>
          </div>
        </div>

        <div className="admin-page__grid">
          <form className="auth-page__panel auth-form" onSubmit={handleSubmit}>
            <h2>Ajouter un nouveau modèle</h2>
            <p>Complétez les champs nécessaires pour préparer une fiche interne.</p>

            <label className="form-field">
              <span>Titre</span>
              <input value={form.title} onChange={(e) => update('title', e.target.value)} required />
            </label>
            <label className="form-field">
              <span>Type</span>
              <input value={form.type} onChange={(e) => update('type', e.target.value)} required />
            </label>
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
              <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={5} />
            </label>

            <label className="admin-toggle">
              <input
                type="checkbox"
                checked={form.hiddenFromClients}
                onChange={(e) => update('hiddenFromClients', e.target.checked)}
              />
              <span>Ne pas afficher aux clients</span>
            </label>

            <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow">
              <span className="btn__label">Enregistrer le modèle</span>
            </button>
          </form>

          <div className="auth-page__panel admin-list">
            <h2>Modèles privés</h2>
            <p>{models.length} modèle(s) enregistré(s).</p>

            <div className="admin-list__items">
              {models.length === 0 ? (
                <div className="admin-empty">Aucun modèle privé pour le moment.</div>
              ) : (
                models.map((model) => (
                  <article className="admin-model-card" key={model.id}>
                    <img src={model.imageUrl} alt={model.title} />
                    <div>
                      <strong>{model.title}</strong>
                      <p>{model.type}</p>
                      <span>{model.hiddenFromClients ? 'Privé pour les clients' : 'Visible'}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
