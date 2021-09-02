import React from "react";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="logo"
      width="32px"
      height="32px"
      style={{ marginRight: "1.5em" }}
    />
  );
}

export default Logo;
