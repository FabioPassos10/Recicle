import React, { Component } from "react";
import Cards from "../../Componentes/Card";
import { Container, Row, Col } from "reactstrap";
import Mapa from "../../Componentes/Map";
import "./home.css";
import Card from "../../Componentes/Card";
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
        <div id="CardDent">{/* <Card></Card> */}</div>
      </div>
    </>
  );
}
