import React, { Component, useState } from "react";
import Cards from "../../Components/Card";
import "../../Components/Styles/card.css";
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Mapa from "../../Components/Map.tsx";
import "./home.css";

export default function Home(props) {
  return (
    <>
      <Container id="Hero" fluid={true}></Container>
      <div id="divBottons"></div>
      <div id="Mapadiv">
        <Mapa></Mapa>
      </div>
      <div id="Triangulo"></div>
      <div id="DivCard_Home">
        <div id="CardDent"></div>
      </div>
    </>
  );
}
