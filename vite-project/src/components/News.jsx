import articleImg from "../assets/Shoc.png";
import statsIcon from "../assets/Nab.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./News.scss";

export default function News() {
  const cards = [1, 2, 3, 4];

  return (
    <section className="news" id="news">
      <div className="container">
        <p className="title-sub">BETTER INFORMATION, BETTER HEALTH</p>
        <h2 className="title-main">News</h2>

        <div className="news-slider-wrap">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="news-swiper"
          >
            
            <SwiperSlide>
              <div className="news-grid">
                {cards.map((num) => (
                  <div key={num} className="news-card">
                    <img src={articleImg} alt="Article" className="news-photo" />
                    <div className="news-details">
                      <p className="news-meta">Monday 05, September 2021 | By Author</p>
                      <h3 className="news-title">This Article’s Title goes Here, but not too long.</h3>
                      <img src={statsIcon} alt="Views" className="news-stats" />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="news-grid">
                {cards.map((num) => (
                  <div key={num + 10} className="news-card">
                    <img src={articleImg} alt="Article" className="news-photo" />
                    <div className="news-details">
                      <p className="news-meta">Monday 05, September 2021 | By Author</p>
                      <h3 className="news-title">This Article’s Title goes Here, but not too long.</h3>
                      <img src={statsIcon} alt="Views" className="news-stats" />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="news-grid">
                {cards.map((num) => (
                  <div key={num + 20} className="news-card">
                    <img src={articleImg} alt="Article" className="news-photo" />
                    <div className="news-details">
                      <p className="news-meta">Monday 05, September 2021 | By Author</p>
                      <h3 className="news-title">This Article’s Title goes Here, but not too long.</h3>
                      <img src={statsIcon} alt="Views" className="news-stats" />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
