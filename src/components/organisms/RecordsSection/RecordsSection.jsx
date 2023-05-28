import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";
import { records } from "../../../data";
import "./RecordsSection.css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export const RecordsSection = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoClick = (videoId) => {
    setCurrentVideo(videoId);
  };

  return (
    <section id="records" className="records-section">
      <h3 className="records-section__title">
        <span className="records-section__title-highlight">Grabaciones</span>{" "}
        Imperdibles
      </h3>
      <Swiper
        spaceBetween={16}
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
        {records.map((record) => (
          <SwiperSlide key={record.id}>
            <div className="records-section__card">
              <div className="records-section__content-container">
                <figure className="records-section__image-container">
                  {currentVideo === record.id ? (
                    <YouTube
                      videoId={record.id}
                      className="youtube-player"
                      opts={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  ) : (
                    <div className="records-section__thumbnail">
                      <img
                        src={`https://img.youtube.com/vi/${record.id}/0.jpg`}
                        alt={record.name}
                        className="records-section__thumbnail-image"
                      />
                    </div>
                  )}
                </figure>
                <div className="records-section__content">
                  <div className="records-section__text-container">
                    <h2 className="record-section__title">{record.name}</h2>
                    <p className="records-section__description">
                      {record.description}
                    </p>
                  </div>
                  <div className="records-section__buttons-container">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleVideoClick(record.id)}
                    >
                      Reproducir
                    </button>
                    <a
                      href={record.videoLink}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Ver Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
