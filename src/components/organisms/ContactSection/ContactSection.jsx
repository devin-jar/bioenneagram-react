import { contactPoints } from "../../../data/contactPoints";

import "./ContactSection.css";

export const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__contact-information">
        <div className="contact-section__contact-information-description">
          <h3>Información de Contacto</h3>
          <p>Leemos atentamente y respondemos a todas tus solicitudes</p>
        </div>
        <div className="contact-section__contact-information-content">
          {contactPoints.map(
            ({ description, cta, href, icon, iconDescription }, id) => (
              <div className="contact-section__contact-item" key={id}>
                <a href={href} target="_blank">
                  <em>
                    <img src={icon} alt={iconDescription} />
                  </em>
                  <div className="contact-section__contact-description">
                    <p>{description}</p>
                    <p>{cta}</p>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <div className="contact-section__container"></div>
      <div className="contact-section__subcontainer"></div>
    </section>
  );
};
