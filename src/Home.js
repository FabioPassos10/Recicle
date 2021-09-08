import React, { Component } from "react";
import Cards from "./Componentes/Card";
import { Container, Row, Col } from "reactstrap";
import Mapa from "./Componentes/Map";

export default function Home(props) {
  return (
    <>
      <Container id="Hero" fluid={true}></Container>
      <div id="Mapa">
        {/* {" "}
        <Mapa></Mapa>{" "} */}
      </div>

      <div id="DivCard_Home"></div>
    </>
  );
}
