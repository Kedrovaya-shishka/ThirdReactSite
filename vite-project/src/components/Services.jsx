import { useState } from "react";
import checkupIcon from "../assets/Medi.png";
import cardioIcon from "../assets/Vec.png";
import dnaIcon from "../assets/Go.png";
import bloodIcon from "../assets/Cap.png";
import photo1 from "../assets/Biq.png";
import photo2 from "../assets/Grr.png";
import "./Services.scss";

export default function Services() {
  const [activeTab, setActiveTab] = useState(1);

  const services = [
    { id: 0, title: "Free Checkup", icon: checkupIcon },
    { id: 1, title: "Cardiogram", icon: cardioIcon },
    { id: 2, title: "Dna Testing", icon: dnaIcon },
    { id: 3, title: "Blood Bank", icon: bloodIcon },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <p className="title-sub">CARE YOU CAN BELIEVE IN</p>
        <h2 className="title-main">Our Services</h2>

        <div className="services-grid">
          
          <div className="services-left">
            <div className="services-list">
              {services.map((item) => (
                <div
                  key={item.id}
                  className={activeTab === item.id ? "service-item active" : "service-item"}
                  onClick={() => setActiveTab(item.id)}
                >
                  <img src={item.icon} alt={item.title} className="service-icon" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <button className="view-all-btn">View All</button>
          </div>

          
          <div className="services-center">
            <h3>A passion for putting patients first.</h3>

            <div className="checklist">
              <ul>
                <li><span className="dot"></span> A Passion for Healing</li>
                <li><span className="dot"></span> All our best</li>
                <li><span className="dot"></span> A Legacy of Excellence</li>
              </ul>
              <ul>
                <li><span className="dot"></span> 5-Star Care</li>
                <li><span className="dot"></span> Believe in Us</li>
                <li><span className="dot"></span> Always Caring</li>
              </ul>
            </div>

            <p className="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
              scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur
              proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <p className="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
              scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
          </div>

          
          <div className="services-right">
            <div className="service-card-img">
              <img src={photo1} alt="Checkup" />
              <div className="three-color-bar">
                <div className="bar-light"></div>
                <div className="bar-navy"></div>
                <div className="bar-blue"></div>
              </div>
            </div>

            <div className="service-card-img">
              <img src={photo2} alt="Doctors" />
              <div className="three-color-bar">
                <div className="bar-light"></div>
                <div className="bar-navy"></div>
                <div className="bar-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
