import searchIcon from "../assets/Lupa.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-menu">
          <ul>
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <div className="search-icon">
            <img src={searchIcon} alt="search" />
          </div>
          <button className="appointment-btn">Appointment</button>
        </div>
      </nav>
    </header>
  );
}
