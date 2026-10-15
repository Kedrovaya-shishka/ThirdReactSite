import chevronDown from "../assets/Vniz.png";
import "./Appointment.scss";

export default function Appointment() {
  return (
    <section className="appointment" id="appointment">
      <div className="container appointment-inner">
        
        <div className="appointment-left">
          <h2>Book an Appointment</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
            scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
        </div>

        
        <div className="appointment-right">
          <div className="form-grid">
            <div className="form-cell">
              <p>Name</p>
            </div>

            <div className="form-cell form-cell-arrow">
              <p>Gender</p>
              <img src={chevronDown} alt="" />
            </div>

            <div className="form-cell">
              <p>Email</p>
            </div>

            <div className="form-cell">
              <p>Phone</p>
            </div>

            <div className="form-cell form-cell-arrow">
              <p>Date</p>
              <img src={chevronDown} alt="" />
            </div>

            <div className="form-cell form-cell-arrow">
              <p>Time</p>
              <img src={chevronDown} alt="" />
            </div>

            <div className="form-cell form-cell-arrow">
              <p>Doctor</p>
              <img src={chevronDown} alt="" />
            </div>

            <div className="form-cell form-cell-arrow">
              <p>Department</p>
              <img src={chevronDown} alt="" />
            </div>

            <div className="form-cell form-cell-msg">
              <p>Message</p>
            </div>
          </div>

          <button className="submit-btn">SUBMIT</button>
        </div>
      </div>
    </section>
  );
}
