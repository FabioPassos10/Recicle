import React, { Component, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Mapa from "../../Components/Map.tsx";
import "./home.css";
import Papel from "../../Components/imgsCardHome/Papel";
import Plastico from "../../Components/imgsCardHome/Plastico";
import Metal from "../../Components/imgsCardHome/Metal";
import Vidro from "../../Components/imgsCardHome/Vidro";
import Organico from "../../Components/imgsCardHome/Organico";
import Eletronico from "../../Components/imgsCardHome/Eletronico";
import Ilustracao from "../../Components/imgsCardHome/Ilustracao";

export default function Home(props) {
  return (
    <>
      <Container id="Hero" fluid={true}>
        <h1 id="titleHero"> Recicle </h1>
      </Container>
      <div id="DivCMap">
        <div id="Mapadiv">
          <Mapa></Mapa>
        </div>
      </div>
      <div id="Triangulo"></div>
      <div id="DivCard_Home">
        <div id="CardDent">
          <Container fluid={true} style={{ paddingTop: "200px" }}>
            <Row xs="1" md="2" sm="1" xl="3" lg="3">
              <Col>
                <div className="col-HomeCardPapel">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoPapel">
                      {" "}
                      <Papel />
                    </div>
                  </div>
                  <div className="CardPartc1">
                    <p>
                      O lixo de cor azul é designado para o descarte de: Jornais, revistas, folha sulfite, rascunhos, folhas de caderno, formulários, caixas de papelão, aparas de papel, envelopes, cartazes, panletos e coisas do gênero.
                    </p>
                    
                    <p>
                      Porém, há algumas restrições, como: adesivos, papel carbono,, celofane, guardanapos, bitucas de cigarro, papéis plastificados, metalizados, papéis sanitários, etc.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardPlastico">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoPlastico">
                      <Plastico />
                    </div>
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
                <div className="col-HomeCardMetal">
                  <div className="CardPartc1">
                    <div className="DivImgLixoMetal">
                      <Metal />
                    </div>
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
          <br />
          <Container fluid={true}>
            <Row xs="1" md="2" sm="1" xl="3" lg="3">
              <Col>
                <div className="col-HomeCardVidro">
                  <div className="CardPartc1">
                    <div className="DivImgLixoVidro">
                      <Vidro />
                    </div>
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
                {/* */}
              </Col>
              <br />
              <Col>
                <div className="col-HomeCardOrganico">
                  {" "}
                  <div className="CardPartc1">
                    <div className="DivImgLixoOrganico">
                      <Organico />
                    </div>
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
                <div className="col-HomeCardEletronico">
                  <div className="CardPartc1">
                    <div className="DivImgLixoEletronico">
                      <Eletronico />
                    </div>
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

          <Container fluid={true}>
            <Ilustracao />
          </Container>
        </div>
      </div>
    </>
  );
}
