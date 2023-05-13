import { socialNetworks } from "../../../data/socialNetworks";
import { logoAlex } from "../../../assets/icons";

import "./FooterSection.css";

export const FooterSection = () => {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-section__content">
        <h4 className="footer-section__title">
          ¿Estás listo para descubrir tu potencial y lograr el crecimiento
          personal que siempre has deseado?
        </h4>
        <div className="cta footer-section__cta">
          <a
            href="https://meetings.hubspot.com/bioenneagramcoach"
            className="button btn btn-outline-primary"
          >
            Agenda tu cita
          </a>
        </div>
      </div>
      <hr className="footer-section__separator" />
      <div className="footer-section__content-social-network">
        <div className="logo footer-section__logo">
          <a className="navbar-brand" href="#">
            <img src={logoAlex} alt="logo-marca" />
          </a>
          <span className="footer-section__logo-copyright">
            © 2023 BioenneagramCoach Derechos Reservados
          </span>
        </div>
        <ul className="social-networks footer-section__social-networks">
          {socialNetworks.map(({ id, img, icon, imgDescription, href }) => (
            <a
              key={id}
              href={href}
              className="social-networks__item footer-section__social-networks-item"
              target="_blank"
            >
              {icon}
              <img
                src={img}
                alt={imgDescription}
                className="social-networks__image footer-section__social-networks-image"
              />
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};
