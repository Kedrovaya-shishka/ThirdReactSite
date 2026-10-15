import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Specialties from "./components/Specialties";
import Appointment from "./components/Appointment";
import Doctors from "./components/Doctors";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <Specialties />
      <Appointment />
      <Doctors />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
