import "./About.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import profile from "../../Assets/PP.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import Work from "../Work/Work";

const About = () => {
  return (
    <div className="About bg-black">
      <Navbar />

      <div className="main">
        <img src={profile} />
        <div className="container text-light">
          <p className="text">About</p>
          <p className="desc">
            Transitioning from a background in Bachelor of Economics, I've
            embarked on an exhilarating self-taught journey into web
            development. The prospect of learning something entirely new is both
            thrilling and invigorating, marking the beginning of an exciting
            chapter in my educational pursuit. Helped by my strong determination, 
            adaptability, and constant willingness to learn new things,
            I was able to learn all the materials,
            giving grand endeavor to all the process.
          </p>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};
export default About;
