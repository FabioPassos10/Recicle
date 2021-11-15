import React, { Fragment } from "react";
import "./Styles/navbar.css";
import { MenuOutlined } from "@ant-design/icons";

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
        <label className="logo">Recicle</label>
        <ul>
          <li>
            <a id="aHome" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/Dicas">Dicas</a>
          </li>
          <li>
            <a href="/Sobre">Sobre Nós</a>
          </li>
        </ul>
        <label id="icon">
          <i>
            <MenuOutlined />
          </i>
        </label>
      </nav>
    </>
  );
}
