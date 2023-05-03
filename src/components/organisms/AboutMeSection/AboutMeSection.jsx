import "./AboutMeSection.css";

import { imgPhotoProfile } from "../../../assets/images";

export const AboutMeSection = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-section__image">
        <img src={imgPhotoProfile} alt="Imagen de perfil" />
      </div>
      <div className="about-me-section__content">
        <h3 className="about-me-section__title">
          Acerca de{" "}
          <span className="about-me-section__title-highlight">Mí</span>
        </h3>
        <p className="about-me-section__description">
          Profesor de Eneagrama en Cil, aires de cambio, UdeM, Participé en el
          día internacional de Eneagrama con una ponencia En el seminario
          internacional Damaryz España Webinar asociación colombiana de
          Eneagrama.
        </p>
        <button className="about-me-section__btn btn btn-primary">
          Leer Mas
        </button>
      </div>
    </section>
  );
};
