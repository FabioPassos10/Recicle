import React, { Component, useState } from "react";
import Cards from "../../Components/Card";
import "../../Components/Styles/card.css";
import { Container, Row, Col } from "reactstrap";
import Mapa from "../../Components/Map.tsx";
import "./home.css";
// import Ilustracao from "../../assets/ilust";

export default function Home(props) {
  return (
    <>
      <Container id="Hero" fluid={true}>
        <h1 id="titleHero"> ReCircle </h1>
      </Container>

      <div id="DivCMap">
        <div id="Mapadiv">
          <Mapa></Mapa>
        </div>
      </div>
      s <div id="Triangulo"></div>
      <div id="DivCard_Home">
        <div id="CardDent">
          <Container fluid={true} style={{ paddingTop: "200px" }}>
            <Row xs="1" md="2" sm="1" xl="3" lg="3">
              <Col>
                <div className="col-HomeCardPapel">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoPapel"></div>
                  </div>
                    <div className="CardPartc1"> {/*PAPEL =================================================================== */}
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardPlastico">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoPlastico"></div>
                  </div>
                  <div className="CardPartc1"> {/*PRÁSTICU =================================================================== */}
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardMetal">
                  <div className="CardPartc1">
                    <div className="DivImgLixoMetal"></div>
                  </div>
                  <div className="CardPartc1"> {/*METAL =================================================================== */}
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <Container fluid={true}>
            <Row xs="1" md="2" sm="1" xl="3" lg="3">
              <Col>
                <div className="col-HomeCardVidro">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoVidro"></div>
                  </div>
                  <div className="CardPartc1"> {/*VRIDO =================================================================== */}
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
                {/* */}
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardOrganico">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoOrganico"></div>
                  </div>
                  <div className="CardPartc1">
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardOleos">
                  <div className="CardPartc1">
                    <div className="DivImgLixoOleos"></div>
                  </div>
                  <div className="CardPartc1">
                    Urna quam curabitur fermentum ullamcorper tortor metus ut
                    arcu scelerisque hac donec vitae, eleifend consequat
                    elementum justo suscipit libero nisl donec malesuada sapien
                    suscipit ultrices fusce, ut faucibus nam est vel vivamus
                    condimentum tincidunt senectus neque porttitor. tempus
                    vivamus integer dictumst sit tristique ac eleifend odio
                    eros, platea dapibus enim tempor per fermentum scelerisque
                    suscipit, erat pellentesque justo orci in aptent purus
                    netus. egestas himenaeos ullamcorper malesuada senectus
                    pretium aenean, vivamus at tincidunt lacinia cubilia luctus
                    proin, vulputate sodales dapibus tellus quisque. tristique
                    facilisis risus ut mollis commodo fermentum aenean neque, in
                    fusce id dictumst potenti vivamus aptent sodales mattis,
                    porttitor per felis curabitur donec ornare interdum.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container id="DivIlustracaoHome" fluid={true}></Container>
        </div>
      </div>
    </>
  );
}
