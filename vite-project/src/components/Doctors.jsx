import docPhoto1 from "../assets/vrac.png";
import docPhoto2 from "../assets/Vrac2.png";
import docPhoto3 from "../assets/Vrac3.png";
import inIcon from "../assets/Inn.png";
import fbIcon from "../assets/Ff.png";
import instaIcon from "../assets/Insts.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Doctors.scss";

const doctorsList = [
  { id: 1, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto1 },
  { id: 2, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto2 },
  { id: 3, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto3 },
  { id: 4, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto1 },
  { id: 5, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto2 },
  { id: 6, name: "Doctor's Name", specialty: "NEUROLOGY", photo: docPhoto3 },
];

export default function Doctors() {
  return (
    <section className="doctors" id="doctors">
      <div className="container">
        <p className="title-sub">TRUSTED CARE</p>
        <h2 className="title-main">Our Doctors</h2>

        <div className="doctors-slider-wrap">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            className="doctors-swiper"
          >
            {doctorsList.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div className="doctor-card">
                  <div className="doctor-image">
                    <img src={doc.photo} alt={doc.name} />
                  </div>
                  <div className="doctor-body">
                    <p className="doc-name">{doc.name}</p>
                    <h3 className="doc-specialty">{doc.specialty}</h3>
                    <div className="doc-socials">
                      <a href="#in"><img src={inIcon} alt="in" /></a>
                      <a href="#fb"><img src={fbIcon} alt="fb" /></a>
                      <a href="#insta"><img src={instaIcon} alt="insta" /></a>
                    </div>
                  </div>
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
