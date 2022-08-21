import "./navigator.css";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Navigator() {
  const [active, setActive] = useState("#");

  return (
    <nav className="navigation">
      <a
        href="#home"
        className={active === "#home" ? "active" : ""}
        onClick={() => setActive("#home")}
      >
        <AiOutlineHome className="ricon" />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser className="ricon" />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBook className="ricon" />
      </a>
      <a
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => setActive("#services")}
      >
        <RiServiceLine className="ricon" />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail className="ricon" />
      </a>
    </nav>
  );
}

export default Navigator;
