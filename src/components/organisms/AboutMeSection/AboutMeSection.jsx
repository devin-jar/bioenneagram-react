import { Swiper, SwiperSlide } from "swiper/react";

import "./AboutMeSection.css";
import "swiper/swiper-bundle.css";

import { imgPhotoProfile } from "../../../assets/images";
import { certifications } from "../../../data/certifications";

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
        {/* <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            364: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="about-me-section__certifications-swiper"
        >
          {certifications.map(({ img, imgDescription }, id) => (
            <SwiperSlide
              key={id}
              className="about-me-section__certification-slide"
            >
              <em>
                <img
                  src={img}
                  alt={imgDescription}
                  className="about-me-section__certification-image"
                />
              </em>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};
