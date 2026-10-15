import calendarIcon from "../assets/Calen.png";
import teamIcon from "../assets/Team.png";
import cashIcon from "../assets/Cash.png";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <div className="hero-content">
          <p className="hero-subtitle">CARING FOR LIFE</p>
          <h1 className="hero-title">
            Leading the Way<br />
            in Medical Excellence
          </h1>
          <button className="hero-btn">Our Services</button>
        </div>
      </div>

      <div className="hero-cards">
        <div className="hero-card card-navy">
          <p>Book an Appointment</p>
          <img src={calendarIcon} alt="Calendar" />
        </div>
        <div className="hero-card card-light">
          <p>Book an Appointment</p>
          <img src={teamIcon} alt="Team" />
        </div>
        <div className="hero-card card-blue">
          <p>Book an Appointment</p>
          <img src={cashIcon} alt="Cash" />
        </div>
      </div>
    </section>
  );
}
