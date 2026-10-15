import { useState } from "react";
import pulseBlueIcon from "../assets/Ser.png";
import pulseWhiteIcon from "../assets/Serg.png";
import "./Specialties.scss";

const specialtiesList = [
  { id: 1, name: "Neurology" },
  { id: 2, name: "Bones" },
  { id: 3, name: "Oncology" },
  { id: 4, name: "Otorhinolaryngology" },
  { id: 5, name: "Ophthalmology" },
  { id: 6, name: "Cardiovascular" },
  { id: 7, name: "Pulmonology" },
  { id: 8, name: "Renal Medicine" },
  { id: 9, name: "Gastroenterology" },
  { id: 10, name: "Urology" },
  { id: 11, name: "Dermatology" },
  { id: 12, name: "Gynaecology" },
];

export default function Specialties() {
  const [activeItem, setActiveItem] = useState(2);

  return (
    <section className="specialties">
      <div className="container">
        <p className="title-sub">ALWAYS CARING</p>
        <h2 className="title-main">Our Specialties</h2>

        <div className="specialties-grid">
          {specialtiesList.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <div
                key={item.id}
                className={isActive ? "specialty-box active" : "specialty-box"}
                onClick={() => setActiveItem(item.id)}
              >
                <img
                  src={isActive ? pulseWhiteIcon : pulseBlueIcon}
                  alt={item.name}
                  className="specialty-icon"
                />
                <p className="specialty-name">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
