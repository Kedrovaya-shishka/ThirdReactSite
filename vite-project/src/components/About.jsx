import teamPhoto from "../assets/Gru.png";
import arrowIcon from "../assets/Strv.png";
import "./About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="title-sub">WELCOME TO MEDDICAL</p>
        <h2 className="title-main">A Great Place to Receive Care</h2>

        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
            scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur
            proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <a href="#learn" className="about-link">
            <span>Learn More</span>
            <img src={arrowIcon} alt="arrow" />
          </a>
        </div>

        <div className="about-image-wrap">
          <img src={teamPhoto} alt="Medical Team" className="about-img" />
          <div className="three-color-bar">
            <div className="bar-light"></div>
            <div className="bar-navy"></div>
            <div className="bar-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
