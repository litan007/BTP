import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function SignupPage() {
  const { signup, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const role = (location.state as { role?: 'admin' | 'client' } | null)?.role ?? 'client';
  const isAdminCreator = user?.role === 'admin';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Only redirect non-admin users who are already logged in
  if (user && !isAdminCreator) {
    return <Navigate to="/accueil" replace />;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    const ok = signup(name, email, password, role);

    if (!ok) {
      setError('Un compte existe déjà avec cet email.');
      return;
    }

    setSuccess(true);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section className="auth-page page-section">
      <div className="container auth-page__grid">
        <div className="auth-page__panel auth-page__panel--intro">
          <span className="label">NOUVEAU COMPTE</span>
          <h1 className="section-title">{role === 'admin' ? 'Créer un admin' : 'Créer un accès'}</h1>
          <p className="auth-page__text">
            {role === 'admin'
              ? 'Créez un compte administrateur pour gérer les contenus internes et les modèles privés.'
              : 'Créez un accès privé pour gérer vos contenus internes et vos modèles non visibles par les clients.'}
          </p>

          {isAdminCreator && (
            <div className="auth-page__note">
              <strong>Connecté en tant que</strong>
              <span>{user?.name} ({user?.email})</span>
            </div>
          )}
        </div>

        <form className="auth-page__panel auth-form" onSubmit={handleSubmit}>
          <h2>{role === 'admin' ? 'Inscrire un nouvel admin' : 'S\'inscrire'}</h2>
          <p>{role === 'admin' ? 'Le compte créé aura les droits administrateur.' : "Le compte créé pourra accéder à l'espace admin."}</p>

          {success && (
            <div className="auth-form__success">
              <p>Le compte <strong>{role === 'admin' ? 'administrateur' : 'utilisateur'}</strong> a été créé avec succès !</p>
              <button
                type="button"
                className="btn btn--outline btn--sm"
                onClick={() => setSuccess(false)}
              >
                <span className="btn__label">Créer un autre compte</span>
              </button>
              {isAdminCreator && (
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => navigate('/accueil')}
                >
                  <span className="btn__label">Retour à l'accueil</span>
                </button>
              )}
            </div>
          )}

          {!success && (
            <>
              <label className="form-field">
                <span>Email</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@exemple.com" required />
              </label>
              <label className="form-field">
                <span>Mot de passe</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Minimum 6 caractères" required />
              </label>
              <label className="form-field">
                <span>Confirmer le mot de passe</span>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Retapez le mot de passe" required />
              </label>

              {error && <p className="auth-form__error">{error}</p>}

              <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow">
                <span className="btn__label">{role === 'admin' ? 'Créer l\'admin' : 'Créer mon compte'}</span>
              </button>
            </>
          )}

          <div className="auth-form__links">
            <Link to="/login">Retour à la connexion</Link>
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            {isAdminCreator && (
              <Link to="/accueil">Retour à l'accueil</Link>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
