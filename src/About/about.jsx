import "./about.css";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>&lt; About Me /&gt;</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Freelancing</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Happy Clients 🥳</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Hands-on Projects done!</small>
            </article>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            perspiciatis porro rem consectetur provident cupiditate harum
            reiciendis qui corporis eaque tempora eos labore sed pariatur eum
            obcaecati, atque temporibus dolores.{" "}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
