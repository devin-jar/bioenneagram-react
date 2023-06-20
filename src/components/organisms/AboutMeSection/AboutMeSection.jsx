import "./AboutMeSection.css";
import "swiper/swiper-bundle.css";

import { imgPhotoProfile } from "../../../assets/images";
import { certifications } from "../../../data/certifications";

export const AboutMeSection = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-section__container">
        <div className="about-me-section__image">
          <img src={imgPhotoProfile} alt="Imagen de perfil" />
        </div>
        <div className="about-me-section__content">
          <h3 className="about-me-section__title">
            Acerca de{" "}
            <span className="about-me-section__title-highlight">Mí</span>
          </h3>
          <p className="about-me-section__description">
            Mi nombre es <span>Fredy Alexander Zapata Rendón</span> de profesión
            soy <span>administrador de empresas</span> y tengo una{" "}
            <span>maestria en educación</span> con énfasis en el cerebro.
          </p>
          <p className="about-me-section__description">
            Luego de una ruptura de pareja y la muerte de mi hermano, entre en
            una <span>fuerte crisis</span>.
          </p>
          <p className="about-me-section__description">
            Después de mucho buscar y pedirle guía a un ser superior, conocí dos
            herramientas que salvaron mi vida, el <span>eneagrama</span> y la{" "}
            <span>bio descodificación</span>.
          </p>
          <p className="about-me-section__description">
            A partir de ahí, decidí mostrarle estas herramientas al mayor número
            de personas alrededor del mundo, que al igual que yo, están
            atravesando o atravesaron un momento difícil en sus vidas.
          </p>
          <p className="about-me-section__description">
            Hoy dedico mi tiempo a compartir mi conocimiento y ayudarle a las
            personas a{" "}
            <span>
              descubrir las posibilidades de crecimiento y transformación
              personal
            </span>{" "}
            que ofrece conocerse.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0"
            target="_blank"
            className="about-me-section__btn btn btn-primary"
          >
            Escribeme
          </a>
        </div>
      </div>
      <div className="certifications">
        <div className="swiper-wrapper-certifications">
          <ul className="swiper-certifications">
            {certifications.map(({ img, imgDescription }, index) => (
              <li key={index} className="slider-certification">
                <img src={img} alt={imgDescription} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
