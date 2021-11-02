import React, { Component, useState } from "react";
import Cards from "../../Components/Card";
import "../../Components/Styles/card.css";
import { Container, Row, Col } from "reactstrap";
import Mapa from "../../Components/Map.tsx";
import "./home.css";

export default function Home(props) {
  return (
    <>
      <Container id="Hero" fluid={true}></Container>

      <div id="DivCMap">
        <div id="Mapadiv">
          <Mapa></Mapa>
        </div>
      </div>
      <div id="Triangulo"></div>
      <div id="DivCard_Home">
        <div id="CardDent">
          <Container fluid={true} style={{ paddingTop: "200px" }}>
            <Row xs="1" md="3" sm="3">
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
              <br />
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
              <br />
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <Container fluid={true}>
            <Row xs="1" md="3" sm="3">
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
              <br />
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
              <br />
              <Col className="bg-light border">
                <div className="CardPartc1">
                  <div className="RedondPt1"></div>
                </div>
                <div className="CardPartc1">
                  Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                  scelerisque hac donec vitae, eleifend consequat elementum
                  justo suscipit libero nisl donec malesuada sapien suscipit
                  ultrices fusce, ut faucibus nam est vel vivamus condimentum
                  tincidunt senectus neque porttitor. tempus vivamus integer
                  dictumst sit tristique ac eleifend odio eros, platea dapibus
                  enim tempor per fermentum scelerisque suscipit, erat
                  pellentesque justo orci in aptent purus netus. egestas
                  himenaeos ullamcorper malesuada senectus pretium aenean,
                  vivamus at tincidunt lacinia cubilia luctus proin, vulputate
                  sodales dapibus tellus quisque. tristique facilisis risus ut
                  mollis commodo fermentum aenean neque, in fusce id dictumst
                  potenti vivamus aptent sodales mattis, porttitor per felis
                  curabitur donec ornare interdum.
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
