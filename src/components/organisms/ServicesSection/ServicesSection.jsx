import { useState } from "react";
import { services } from "../../../data";

import "./ServicesSection.css";

export const ServicesSection = () => {
  // Estado para guardar la ruta de la imagen actual
  const [currentImage, setCurrentImage] = useState(services[0].img);

  // Función para actualizar la ruta de la imagen actual
  const handleImageChange = (ruta) => {
    setCurrentImage(ruta);
  };

  return (
    <section id="services" className="services-section">
      <h3 className="services-section__title">
        ¿Listo para{" "}
        <span className="services-section__title-highlight">Comenzar</span>?
      </h3>
      <div className="services-section__solution-information">
        <div className="services-section__solution-cards-container">
          {/* Renderizamos las tarjetas de producto */}
          {services.map((card, index) => (
            <div key={index} className="services-section__card-container">
              <div
                className={`services-section__card ${
                  currentImage === card.img
                    ? "services-section__card--selected"
                    : ""
                }`}
                data-imagen={card.img}
                onClick={() => handleImageChange(card.img)}
              >
                <div className="services-section__card-image">
                  <div className="services-section__card-logo">
                    <img src={card.logo} alt={card.logoDescription} />
                  </div>
                </div>
                <div className="services-section__card-information">
                  <h4 className="services-section__card-title">{card.title}</h4>
                  <p className="services-section__card-detail">{card.detail}</p>
                </div>
              </div>
              <div
                className={
                  handleImageChange
                    ? "services-section__solution-cards-img-mobile"
                    : ""
                }
              >
                <img src={currentImage} alt="Imagen seleccionada" />
              </div>
            </div>
          ))}
        </div>

        <div className="services-section__solution-cards-img">
          <picture>
            <source srcSet={currentImage} media="(min-width: 768px)" />
            <img
              id="services-section__show-img"
              src={currentImage}
              alt="Imagen seleccionada"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
