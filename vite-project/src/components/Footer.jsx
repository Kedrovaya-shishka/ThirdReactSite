import sendIcon from "../assets/Setr.svg";
import inIcon2 from "../assets/Inn2.png";
import fbIcon2 from "../assets/Ff2.png";
import instaIcon2 from "../assets/Insts2.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-col footer-col-brand">
            <h2>MEDDICAL</h2>
            <p>
              Leading the Way in Medical<br />
              Execellence, Trusted Care.
            </p>
          </div>

          
          <div className="footer-col">
            <h3>Important Links</h3>
            <ul>
              <li><a href="#appointment">Appointment</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>Call: (237) 681-812-255</li>
              <li>Email: fildineesoe@gmail.com</li>
              <li>Address: 0123 Some place</li>
              <li>Some country</li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h3>Newsletter</h3>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter your email address" />
              <button aria-label="Subscribe">
                <img src={sendIcon} alt="Send" />
              </button>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p className="copyright">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="social-icons">
            <a href="#in"><img src={inIcon2} alt="in" /></a>
            <a href="#fb"><img src={fbIcon2} alt="fb" /></a>
            <a href="#insta"><img src={instaIcon2} alt="insta" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
