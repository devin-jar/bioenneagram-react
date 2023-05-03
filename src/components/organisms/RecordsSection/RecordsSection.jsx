import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { records } from "../../../data";

import "./RecordsSection.css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export const RecordsSection = () => {
  return (
    <section id="records" className="records-section">
      <h3 className="records-section__title">
        <span className="records-section__title-highlight">Grabaciones</span>{" "}
        Imperdibles
      </h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="records-section__cards-container"
      >
        {records.map((testimonio) => (
          <SwiperSlide key={testimonio.id}>
            <div className="records-section__card">
              <div className="records-section__content-container">
                <figure className="records-section__image-container">
                  <img
                    src={testimonio.image}
                    alt={testimonio.name}
                    className="records-section__image"
                  />
                </figure>
                <div className="records-section__text-container">
                  <h2 className="records-section__title">{testimonio.name}</h2>
                  <p className="records-section__description">
                    {testimonio.description}
                  </p>
                </div>
                <div>
                  <a href="#" className="btn btn-primary">
                    Ver Video
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
