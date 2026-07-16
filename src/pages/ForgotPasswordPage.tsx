import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (newPassword.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    const ok = resetPassword(email, newPassword);

    if (!ok) {
      setError('Aucun compte trouvé avec cet identifiant.');
      return;
    }

    setSuccess(true);
  };

  return (
    <section className="auth-page page-section">
      <div className="container auth-page__grid">
        <div className="auth-page__panel auth-page__panel--intro">
          <span className="label">RÉINITIALISATION</span>
          <h1 className="section-title">Mot de passe oublié</h1>
          <p className="auth-page__text">
            Réinitialisez votre mot de passe en renseignant votre identifiant et un nouveau mot de passe.
          </p>
        </div>

        <form className="auth-page__panel auth-form" onSubmit={handleSubmit}>
          <h2>Réinitialiser le mot de passe</h2>
          <p>Entrez votre identifiant et choisissez un nouveau mot de passe.</p>

          {success ? (
            <div className="auth-form__success">
              <p>Mot de passe réinitialisé avec succès !</p>
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => navigate('/login')}
              >
                <span className="btn__label">Se connecter</span>
              </button>
            </div>
          ) : (
            <>
              <label className="form-field">
                <span>Identifiant</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Votre identifiant" required />
              </label>
              <label className="form-field">
                <span>Nouveau mot de passe</span>
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Minimum 6 caractères" required />
              </label>
              <label className="form-field">
                <span>Confirmer le mot de passe</span>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Retapez le mot de passe" required />
              </label>

              {error && <p className="auth-form__error">{error}</p>}

              <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow">
                <span className="btn__label">Réinitialiser</span>
              </button>
            </>
          )}

          <div className="auth-form__links">
            <Link to="/login">Retour à la connexion</Link>
            <Link to="/signup">S'inscrire</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
