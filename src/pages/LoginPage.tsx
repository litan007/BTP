import { useState } from 'react';
import type { FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('adminbatir');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  if (user) {
    return <Navigate to="/accueil" replace />;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const ok = login(email, password);

    if (!ok) {
      setError('Identifiants invalides.');
      return;
    }

    navigate('/accueil', { replace: true });
  };

  return (
    <section className="auth-page page-section">
      <div className="container auth-page__grid">
        <div className="auth-page__panel auth-page__panel--intro">
          <span className="label">ACCÈS PRIVÉ</span>
          <h1 className="section-title">Connexion admin</h1>
          <p className="auth-page__text">
            Accédez à l'espace de gestion pour ajouter des modèles, préparer les contenus et garder les créations privées avant publication.
          </p>
        </div>

        <form className="auth-page__panel auth-form" onSubmit={handleSubmit}>
          <h2>Se connecter</h2>
          <p>Utilisez vos identifiants pour accéder au tableau de bord.</p>

          <label className="form-field">
            <span>Identifiant</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required />
          </label>

          <label className="form-field">
            <span>Mot de passe</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>

          {error && <p className="auth-form__error">{error}</p>}

          <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow">
            <span className="btn__label">Se connecter</span>
          </button>
        </form>
      </div>
    </section>
  );
}
