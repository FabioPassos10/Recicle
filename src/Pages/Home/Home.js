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
        Recicle
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
                      Porém, há algumas restrições, como: adesivos, papel carbono, celofane, guardanapos, bitucas de cigarro, papéis plastificados, metalizados, papéis sanitários, etc.
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
                  <p>
                    A cor vermelha representa o lixo designado para o descarte descarte de materias plásticos, como: copos, sacolas, frascos, potes, tampinhas, tubos de PVC, embalagens PET (sucos, água, refrigerante, etc).
                    </p>

                    <p>
                      Há alguns materiais que não se encaixam nessa classificação, são eles: cabos de panelas, adesivos, espuma, acrílico, embalagens metalizadas (biscoito e salgadinhos).</p>

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
                  <p>
                      A cor amarela representa o lixo designado para o descarte descarte de metais, como: tampinhas de garrafa, lacres de latinhas, latas, ferragens, arames, chapas, pregos, parafusos, porcas e coisas do gênero.
                    </p>

                    <p>
                      Há alguns materiais que não se encaixam nessa classificação, como: grampos, esponjas de aço, aerosóis, latas de tinta ou verniz, solventes ou químicos, latas de insenticida, etc.
                    </p>

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
                    <p>
                      O descarte de vidros é representada pela cor verde, e neles são descartados coisas como: garrafas, potes de conserva, frascos (feitos de vidro), copos e cacos dos resíduos citados, etc.
                    </p>

                    <p>
                      Há materiais que não se devem ser descartados nesse lixo, são eles: espelhos, óculos, vidros temperados, cêramicas, porcelanas, tubos de TV, tampas de forno, etc.
                    </p>
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
                    <p>
                      No lixo de cor marrom, se descarta resíduos orgânicos, como: cascas de frutas, legumoes e verduras, saquinhos de chá, restos de pães, bisoitos, pó e coador de café, esterco de animais herbívoros (galinhas, cavalos, gado).
                    </p>

                    <p>
                      Há restrições do que não se caracterizam como lixo orgânico, como: produtos químicos, remédios, papéis higiênicos, guardanapos sujos, gorduras, óleos, graxa, leite e derivados, ossos, restos de carne, etc.
                    </p>
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
                    <p>
                      O lixo de cor branca, representa o descarte de lixo eletrônico, como: celulares, notebooks, impressoras, tablets, mouses, teclados, fones de ouvido, cabos de carregador, pilhas, baterias, computadores de mesa, etc.
                    </p>
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
