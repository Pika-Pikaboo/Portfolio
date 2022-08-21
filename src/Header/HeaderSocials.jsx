import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GiBasketballBall } from "react-icons/gi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" rel="noreferrer" target="_blank">
        <GiBasketballBall />
      </a>
    </div>
  );
};

export default HeaderSocials;
