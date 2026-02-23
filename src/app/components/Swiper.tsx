import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";

const SwiperTestimonials: React.FC = () => {
  return (
    <section className="swiper-section">
      <h2>
        <span>Testimonials</span> From Satisfied Users
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[1, 2, 3].map((id) => (
          <SwiperSlide key={id}>
            <div className="swiper-card">
              <p>
                “Dictumst turpis potenti fringilla mi lorem dapibus suspendisse
                senectus ligula rhoncus neque eros dictum nunc.”
              </p>

              <div className="swiper-user">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    id === 3 ? "men" : "women"
                  }/${40 + id}.jpg`}
                  alt="user"
                />
                <div>
                  <h4>User {id}</h4>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperTestimonials;