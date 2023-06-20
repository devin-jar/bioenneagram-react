import { useState } from "react";
import { services } from "../../../data";

import "./ServicesSection.css";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  // Estado para guardar la ruta de la imagen actual
  const [currentImage, setCurrentImage] = useState(services[0].img);
  const [currentImageDesk, setCurrentImageDesk] = useState(services[0].imgDesk);

  // Función para actualizar la ruta de la imagen actual
  const handleImageChange = (ruta) => {
    setCurrentImage(ruta);
    setCurrentImageDesk(ruta);
    console.log("url desk", currentImageDesk);
  };

  return (
    <section id="services" className="services-section">
      <h3 className="services-section__title">
        Cultiva tu{" "}
        <span className="services-section__title-highlight">Felicidad</span>
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
                <div className="services-section__card-content">
                  <div className="services-section__card-image">
                    <div className="services-section__card-logo">
                      <img src={card.logo} alt={card.logoDescription} />
                    </div>
                  </div>
                  <div className="services-section__card-information">
                    <h4 className="services-section__card-title">
                      {card.title}
                    </h4>
                    <p className="services-section__card-detail">
                      {card.detail}
                    </p>
                  </div>
                </div>
                <div className="services-section__card-container-cta">
                  <Link
                    className="services-section__card-cta button btn btn-outline-primary"
                    to={"servicios"}
                  >
                    Conoce más
                  </Link>
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
          <img
            id="services-section__show-img"
            src={currentImageDesk}
            alt="Imagen seleccionada"
          />
        </div>
      </div>
    </section>
  );
};
