import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Mapa from "./Componentes/Map";

export default function Home() {
  return (
    <section className="geral">
      <Container className="oi" fluid={true}></Container>
      <div id="Mapa">
        {/* {" "}
        <Mapa></Mapa>{" "} */}
      </div>
    </section>
  );
}
