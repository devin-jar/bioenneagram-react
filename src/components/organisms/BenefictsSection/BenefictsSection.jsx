import { beneficts } from "../../../data/beneficts";
import { Swiper, SwiperSlide } from "swiper/react";

import "./BenefictsSection.css";
import "swiper/swiper-bundle.css";

export const BenefictsSection = () => {
  return (
    <section id="beneficts" className="beneficts-section">
      <h3 className="beneficts-section__title">
        Abrete a{" "}
        <span className="beneficts-section__title-highlight">Vivir</span> esta{" "}
        <span className="beneficts-section__title-highlight">Experiencia</span>
      </h3>
      <Swiper
        spaceBetween={30}
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
            slidesPerView: 5,
          },
        }}
        className="beneficts-section__list"
      >
        {beneficts.map(({ id, img, benefict, imgDescription }) => (
          <SwiperSlide key={id}>
            <div className="beneficts-section__item">
              <em>
                <img
                  src={img}
                  alt={imgDescription}
                  className="beneficts-section__image"
                />
              </em>
              <p className="beneficts-section__text">
                {benefict.slice(0, 2)}
                <br />
                {benefict.slice(3)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
