export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card reveal reveal--up reveal--visible">
          <div className="newsletter-card__bg" />
          <div className="newsletter-card__content">
            <h2 className="newsletter__title">Restez à l'avant-garde du BTP</h2>
            <p className="newsletter__desc">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles, analyses de marché et conseils d'experts directement dans votre boîte de réception.
            </p>
            <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email professionnelle" 
                className="newsletter__input"
                required
              />
              <button type="submit" className="btn btn--primary newsletter__btn">
                S'abonner
              </button>
            </form>
            <p className="newsletter__disclaimer">Nous respectons votre vie privée. Pas de spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
