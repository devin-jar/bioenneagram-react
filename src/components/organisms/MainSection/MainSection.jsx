import {
  imgBackgroundMainBig,
  imgBackgroundMainMedium,
  imgBackgroundMainSmall,
} from "../../../assets/images";
import "./MainSection.css";

export const MainSection = () => {
  return (
    <section id="main" className="main-section">
      <figure className="main__image">
        <picture>
          <source srcSet={imgBackgroundMainBig} media="(min-width: 1024px)" />
          <source srcSet={imgBackgroundMainMedium} media="(min-width: 600px)" />
          <img
            src={imgBackgroundMainSmall}
            alt="Fondo Principal"
            className="background-image"
          />
        </picture>
      </figure>

      <div className="main-section__content">
        <h1 className="main-section__title">
          Listo para descubrir los secretos de tu personalidad
        </h1>
        <h6 className="main-section__subtitle">Crecimiento Personal</h6>
        <p className="main-section__description">
          Descubre tus fortalezas, debilidades y como mejorar tus relaciones
          personales
        </p>
        <div className="main-section__cta">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0"
            className="main-section__cta-link button btn btn-primary"
          >
            !Quiero saber más!
          </a>
        </div>
      </div>
      <div className="main-section__background"></div>
    </section>
  );
};
