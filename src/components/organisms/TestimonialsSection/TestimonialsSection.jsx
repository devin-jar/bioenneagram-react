import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../../data";

import "./TestimonialsSection.css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h3 className="testimonials-section__title">
        Quienes{" "}
        <span className="testimonials-section__title-highlight">Confiaron</span>
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
        className="testimonials-section__cards-container"
      >
        {testimonials.map((testimonio) => (
          <SwiperSlide
            key={testimonio.id}
            className="testimonials-section__card"
          >
            <div className="testimonials-section__quote-container">
              <div className="testimonials-section__quote-bar"></div>
              <blockquote className="testimonials-section__quote">
                {testimonio.quote}
              </blockquote>
            </div>
            <div className="testimonials-section__content-container">
              <div className="testimonials-section__image-container">
                <img
                  src={testimonio.image}
                  alt={testimonio.name}
                  className="testimonials-section__image"
                />
              </div>
              <div className="testimonials-section__text-container">
                <p className="testimonials-section__brain">Cerebro</p>
                <p className="testimonials-section__name">{testimonio.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
