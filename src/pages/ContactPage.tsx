import { useState, type FormEvent } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { ClockIcon, MailIcon, MapIcon, PhoneIcon } from '../components/icons/Icons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  project: 'construction',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <PageHero
        label="CONTACT"
        title="Parlons de votre projet"
        subtitle="Devis gratuit sous 48h. Notre équipe vous répond avec des solutions concrètes et adaptées."
        image="/photos/photo_contact.jpg"
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="page-section">
        <div className="container contact-grid">
          <Reveal variant="left" className="contact-info">
            <span className="label">COORDONNÉES</span>
            <h2 className="section-title">Restons en contact</h2>
            <p className="contact-info__intro">
              Passez nous voir, appelez-nous ou remplissez le formulaire — nous vous recontactons rapidement.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card__icon"><PhoneIcon /></div>
                <div>
                  <strong>Téléphone</strong>
                  <p>032 22 332 42</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><MailIcon /></div>
                <div>
                  <strong>Email</strong>
                  <p>contact@batirexcellence.fr</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><MapIcon /></div>
                <div>
                  <strong>Adresse</strong>
                  <p>Lot E26 IVANDRY<br />Antananarivo Madagascar</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><ClockIcon /></div>
                <div>
                  <strong>Horaires</strong>
                  <p>Lun – Ven : 8h – 18h<br />Sam : 9h – 12h</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Message envoyé !</h3>
                <p>Nous vous recontactons sous 48 heures ouvrées.</p>
                <Button to="/" variant="outline">RETOUR À L'ACCUEIL</Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Demandez votre devis gratuit</h3>

                <div className="form-row">
                  <label className="form-field">
                    <span>Nom complet *</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Kiady Eray"
                    />
                  </label>
                  <label className="form-field">
                    <span>Téléphone</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="032 22 332 42"
                    />
                  </label>
                </div>

                <label className="form-field">
                  <span>Email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="kiady@gmail.com"
                  />
                </label>

                <label className="form-field">
                  <span>Type de projet *</span>
                  <select
                    required
                    value={form.project}
                    onChange={(e) => update('project', e.target.value)}
                  >
                    <option value="construction">Construction neuve</option>
                    <option value="renovation">Rénovation</option>
                    <option value="extension">Extension</option>
                    <option value="autre">Autre</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Décrivez votre projet *</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Surface, localisation, budget estimé, délais souhaités..."
                  />
                </label>

                <button type="submit" className="btn btn--primary btn--lg btn--glow btn--full">
                  <span className="btn__label">ENVOYER MA DEMANDE</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
