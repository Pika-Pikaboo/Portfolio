import ME from "../assets/me.png";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5>Hello, World!</h5>
        <h1>
          I'm <br /> Marn Htet Zan
        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}
