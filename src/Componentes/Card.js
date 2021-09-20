import React from "react";
import "./Styles/card.css";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
const Example = (props) => {
  return (
    <>
      <div id="DivCard">
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
    </>
  );
};

export default Example;
