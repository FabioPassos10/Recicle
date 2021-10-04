import React, { Fragment } from "react";
import "./Styles/navbar.css";

// import Logo from "./Logo";

export default function NavBar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav>
        {/* <Logo className="logo" /> */}
        <label className="logo">ReCircle</label>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Dicas">Dicas</a>
          </li>
          <li>
            <a href="/Sobre">Sobre Nós</a>
          </li>
        </ul>
        <label id="icon">
          <i class="fas fa-bars">s</i>
        </label>
      </nav>
    </>
  );
}
