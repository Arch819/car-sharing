import React from "react";
import logo from "../../images/logo.png";
import { LogoFirstWordStyle, LogoStyle } from "./Logo.styled";

function Logo() {
  return (
    <div>
      <LogoStyle to="/">
        <img src={logo} alt="logo" width={60} />
        <LogoFirstWordStyle>Car</LogoFirstWordStyle>
        Sharing
      </LogoStyle>
    </div>
  );
}

export default Logo;
