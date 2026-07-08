import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ServiceIcon } from './icons/Icons';
import Reveal from './Reveal';

export default function ServicesBar() {
  return (
    <section className="services-bar">
      <div className="container services-bar__inner">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 90} variant="up">
            <Link to="/services" className="service-item">
              <div className="service-item__icon-wrap">
                <div className="service-item__icon">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>
              <div className="service-item__text">
                <strong>{service.title}</strong>
                <span>{service.subtitle}</span>
              </div>
              <div className="service-item__shine" aria-hidden="true" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
