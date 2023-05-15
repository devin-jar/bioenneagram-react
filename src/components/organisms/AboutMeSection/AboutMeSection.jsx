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
          Profesor de Eneagrama en la <span>CIL</span> y{" "}
          <span>Aires de Cambio</span>, también fuí profesor en la
          especialización de alta gerencia en <span>UdeM</span>. Participé en el
          día internacional del Eneagrama en 2020, como una ponencia en el
          seminario internacional del Eneagrama, con la{" "}
          <span>Asociación Colombiana de Eneagrama</span>.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0"
          target="_blank"
          className="about-me-section__btn btn btn-primary"
        >
          Escribeme
        </a>
      </div>
    </section>
  );
};
