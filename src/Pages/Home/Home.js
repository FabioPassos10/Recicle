import React, { Component, useState } from "react";
import Cards from "../../Componentes/Card";
import "../../Componentes/Styles/card.css";
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
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
        <div id="CardDent">
          <div id="divPrin">
            <div id="CardPapel">
              <div id="abPapel"></div>
              <h1>Papel</h1>
            </div>

            <div id="CardPlastico">
              <div id="abPlastico"></div>
              <h1>Plastico</h1>
            </div>

            <div id="CardVidro">
              <div id="abVidro"></div>
              <h1>Vidro</h1>
            </div>

            <div id="CardOrganico">
              <div id="abOrganico"></div>
              <h1>Organico</h1>
            </div>

            <div id="CardMetal">
              <div id="abMetal"></div>
              <h1>Metal</h1>
            </div>

            <div id="CardEletronico">
              <div id="abEletronico"></div>
              <h1>Eletronico</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
