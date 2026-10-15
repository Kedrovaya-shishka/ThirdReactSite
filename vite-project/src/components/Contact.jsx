import phoneIcon from "../assets/Phone.png";
import locationIcon from "../assets/Toch.png";
import emailIcon from "../assets/Email.png";
import timeIcon from "../assets/Time.png";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="title-sub">GET IN TOUCH</p>
        <h2 className="title-main">Contact</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <img src={phoneIcon} alt="phone" />
            </div>
            <h3>EMERGENCY</h3>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>

          <div className="contact-card active">
            <div className="contact-icon">
              <img src={locationIcon} alt="location" />
            </div>
            <h3>LOCATION</h3>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <img src={emailIcon} alt="email" />
            </div>
            <h3>EMAIL</h3>
            <p>fildineeesoe@gmail.com</p>
            <p>myebstudios@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <img src={timeIcon} alt="time" />
            </div>
            <h3>WORKING HOURS</h3>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </section>
  );
}
