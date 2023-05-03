import { imgBackgroundMain } from "../../../assets/images";

import "./MainSection.css";

export const MainSection = () => {
  return (
    <section id="main" className="main-section">
      <figure className="main__image">
        <img
          src={imgBackgroundMain}
          alt="Fondo Principal"
          className="background-image img-fluid"
        />
      </figure>

      <div className="main-section__content">
        <h1 className="main-section__title">
          Listo para descubrir los secretos de tu personalidad
        </h1>
        <h5 className="main-section__subtitle">Crecimiento Personal</h5>
        <p className="main-section__description">
          Descubre tus fortalezas, debilidades y como mejorar tus relaciones
          personales
        </p>
        <div className="cta">
          <a href="#" className="button btn btn-primary">
            !Quiero saber más!
          </a>
        </div>
      </div>
    </section>
  );
};
