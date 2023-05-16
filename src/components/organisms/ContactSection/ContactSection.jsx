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
            (
              {
                description,
                cta,
                href,
                icon,
                iconDescription,
                content,
                className,
              },
              id
            ) => (
              <div className="contact-section__contact-item" key={id}>
                <a
                  href={href}
                  target="_blank"
                  className={`contact-section__${className}-button`}
                >
                  <em>
                    <img src={icon} alt={iconDescription} />
                  </em>
                  <div className="contact-section__contact-description">
                    <p>{description}</p>
                    <div className="contact-section__contact-cta">
                      {content.length !== 0 ? (
                        content.map(
                          ({
                            id,
                            img,
                            icon,
                            imgDescription,
                            href,
                            className,
                          }) => (
                            <li
                              key={id}
                              href={href}
                              className={`contact-section__social-network-${className} social-networks__item contact-section__social-networks-item `}
                              target="_blank"
                            >
                              {icon}
                              <img
                                src={img}
                                alt={imgDescription}
                                className="social-networks__image contact-section__social-networks-image"
                              />
                            </li>
                          )
                        )
                      ) : (
                        <p>{cta}</p>
                      )}
                    </div>
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
