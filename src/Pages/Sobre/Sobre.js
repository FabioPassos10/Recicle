import "./sobre.css";
import React from "react";
import { Row, Container, Col } from "reactstrap";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import ImgOrientador from "../../Components/imgsSobre/ImgOrientador";
import MundoReciclagem from "../../Components/ImgVetores/MundoReciclagem";
import HCL from "../../Components/ImgVetores/Garrafa";

export default function sobre(props) {
  return (
    <section>
      <Container className="Container-textSobre">
        <MundoReciclagem />
        <Row>
          <Col>
            <h3></h3>

            <p className="p-Sobre">
              O projeto ReCircle é originário do desenvolvimento de um Trabalho
              de Conclusão de Curso (TCC) realizado por alunos do 3º ano do
              Curso Técnico em Desenvolvimento de Sistemas Integrado ao Ensino
              Médio (3º EMDS) ministrado na instituição de ensino ETEC Pedro
              Ferreira Alves – Mogi Mirim, no ano de 2021.
            </p>
            <p className="p-Sobre">
              Partindo-se de uma ideia para benefício social direcionada ao
              município e alinhada à aprendizagem adquirida na área de
              desenvolvimento web, surge ReCircle: um projeto que objetiva a
              conscientização popular, o compartilhamento de informações e
              divulgação de organizações comunitárias e pontos de descarte da
              região, visando o auxílio à preservação da natureza.
            </p>
            <p className="p-Sobre">
              Pa ra execução deste projeto, a equipe foi organizada, atuando de
              forma colaborativa em diferentes etapas de seu desenvolvimento.
              Inicialmente, sua proposta foi apresentada por João Pedro e,
              então, a prototipagem ocorreu em responsabilidade de Fábio Eloy. O
              design foi elaborado por Alexandre Batista e Camile Russo e a
              programação, aplicada por Luan Henrique, Luiz Gustavo, Fábio e
              Alexandre. Para produção de conteúdos textuais ao site, pesquisas
              e escrita foram realizadas por Camile, Luiz e João Pedro.
            </p>
            <p className="p-Sobre">
              Apesar da divisão de tarefas, o time de desenvolvimento prestou
              auxílio a todos os âmbitos deste trabalho de maneira conjunta.
            </p>
            <br></br>

            <h3>EQUIPE</h3>
          </Col>
        </Row>
      </Container>

      <Container fluid={true}>
        <Row xs="1" md="2" sm="1" xl="3" lg="3">
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgAlexandre"></div>
              </div>
              <div className="CardTexto">
                <h4>Alexandre Batista 👨‍🎨</h4>
                <br />
                <p>
                  Alexandre exerceu participação intrínseca ao ramo de design em
                  conjunto com o desenvolvimento para web. Assim, o membro da
                  equipe colaborou através da utilização das linguagens de
                  programação para a execução de páginas apresentadas no site,
                  detendo como objetivo a concretização da aparência idealizada
                  e definida em um protótipo do projeto – qual prestou auxílio à
                  criação.
                </p>
                <br />
              </div>
              <div id="redes_sobreAlexandre">
                <a
                  className="a_sobre"
                  href="https://github.com/Alexandre2DS"
                  target="_blank"
                >
                  <GithubOutlined style={{ paddingRight: "12px" }} />
                </a>
                <a className="a_sobre" href="" target="_blank">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
          <br />
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgCamile"></div>
              </div>
              <div className="CardTexto">
                <h4>Camile Russo 👩‍🎨</h4>
                <br />
                <p>
                  Camile desempenhou funções correlatas ao design do produto
                  apresentado, sendo a responsável pela elaboração de uma logo
                  para o projeto. Sua contribuição se estendeu à reunião de
                  informações e construção das transcrições implementadas às
                  páginas do site que, detinham intuito de cumprir os objetivos
                  da ideia executada: compartilhar informações necessárias para
                  a disseminação da Educação Ambiental e reunir pontos de
                  descarte de lixo próximos à região.
                </p>
              </div>
              <div className="redes_cardSobre">
                <a
                  className="a_sobre"
                  href="https://www.linkedin.com/in/camile-russo-715ab3213"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
          <br />
          <Col>
            <div className="col-SobreCard">
              <div className="CardFoto">
                <div className="DivImgFabio"></div>
              </div>
              <div className="CardTexto">
                <h4>Fábio Eloy 👨‍💻</h4>
                <br />
                <p>
                  Fabio exerceu o papel do principal programador do projeto Recicle, selecionou a linguagem
                  de programação React para o back-end e auxiliou na programação do Mapa, no qual foi portado
                  pelo Leaflet na linguagem TypeScript. Com isso o membro da equipe desenvolveu e auxiliou os
                  demais participantes em diversas amplitudes do projeto. Fabio também foi responsável por
                elaborar o GitHub do ReCircle, no qual é formado por um código aberto e de fácil acesso.<br />
                </p>
              </div>
              <div className="redes_cardSobre">
                <a
                  className="a_sobre"
                  href="https://github.com/FabioPassos10"
                  target="_blank"
                >
                  <GithubOutlined style={{ paddingRight: "12px" }} />
                </a>
                <a className="a_sobre" href="" target="_blank">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid={true}>
        <Row xs="1" md="2" sm="1" xl="3" lg="3">
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgJoaoP"></div>
              </div>
              <div className="CardTexto">
                <h4>João Pedro Vaz 💭</h4>
                <br />
                <p>
                  João idealizou o projeto em objetivo de facilitar e ajudar na
                  procura do ideal descarte dos lixos que, muitas das vezes, é
                  desconhecido por parte do usuário. O membro da equipe gerou os
                  primeiros protótipos do site e foi responsável,
                  posteriormente, por auxiliar na criação e desenvolvimentos dos
                  demais recursos funcionais e visuais do projeto. A aba de
                  conteúdo sobre cada membro do projeto juntamente com a
                  localização e reconhecimento de todos os pontos de descarte da
                  região foi elaborada por ele.
                </p>
              </div>
              <div className="redes_cardSobre">
                <a
                  className="a_sobre"
                  href="https://github.com/PudimTI"
                  target="_blank"
                >
                  <GithubOutlined style={{ paddingRight: "12px" }} />
                </a>
                <a className="a_sobre" href="" target="_blank">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
            {/* */}
          </Col>
          <br />
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgLuan"></div>
              </div>
              <div className="CardTexto">
                <h4>Luan Araujo 👨‍🔧</h4>
                <br />
                <p>
                  Luan auxiliou na programação do projeto, solucionando
                  eventuais problemas no qual se deparamos no decorrer do
                  desenvolvimento. Atuou na criação do Json interno do site, tal
                  qual tem a funcionalidade de guardar de forma fixa os dados. O
                  membro também foi responsável por gerenciar os dados do mapa,
                  realizando um filtro funcional com a biblioteca do Leafle.
                </p>
              </div>
              <div className="redes_sobreLuanLuiz">
                <a
                  className="a_sobre"
                  href="https://github.com/luaaan"
                  target="_blank"
                >
                  <GithubOutlined style={{ paddingRight: "12px" }} />
                </a>
                <a
                  className="a_sobre"
                  href="https://www.linkedin.com/in/luan-araujo-b00262219"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
          <br />
          <Col>
            <div className="col-SobreCard">
              <div className="CardFoto">
                <div className="DivImgLuiz"></div>
              </div>
              <div className="CardTexto">
                <h4>Luiz Gustavo 📄</h4>
                <br />
                <p>
                  Luiz deteve como responsabilidade a produção de conteúdos
                  textuais para monografia, de mesmo modo que o apoio ao
                  desenvolvimento web. Dessa forma, o integrante prestou
                  cooperação ao registro das etapas do processo de concepção do
                  produto final almejado, bem como, exerceu papel encarregado de
                  pesquisas para ampliação dos conhecimentos necessários ao
                  time.
                </p>
              </div>
              <div className="redes_sobreLuanLuiz">
                <a
                  className="a_sobre"
                  href="https://github.com/Gust4voPereira"
                  target="_blank"
                >
                  <GithubOutlined style={{ paddingRight: "12px" }} />
                </a>
                <a className="a_sobre" href="" target="_blank">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="Container-textSobre">
        <Row>
          <Col>
            <h3>Orientadores</h3>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row xs="1" md="2" sm="1" xl="2" lg="2">
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgMaromo"></div>
              </div>
              <div className="CardTexto">
                <h4>Marcos Roberto de Morais 👨‍🏫</h4>
                <br />
                <p>
                  Marcos (Maromo) Roberto foi um dos professores que orientou a
                  criação do TCC juntamente com a professora Simone Andreia.
                  Graduado em Processamento de Dados (1995) Especialista em
                  Administração de Sistemas de Informação (2005) Mestre em
                  Educação (2010), Maromo hoje atua como professor na Escola
                  Tecnica Pedro Ferreira Alves e na Faculdade de Tecnologia
                  Arthur de Azevedo.
                </p>
              </div>
              <div className="redes_cardSobreMaromo">
                <a
                  className="a_sobre"
                  href="https://github.com/maromo71"
                  target="_blank"
                >
                  <GithubOutlined style={{}} />
                </a>
              </div>
            </div>
            {/* */}
          </Col>
          <br />
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgSimone"></div>
              </div>
              <div className="CardTexto">
                <h4>Simone Andreia de Campos 👩‍🏫</h4>
                <br />
                <p>
                  Simone Andreia foi um dos professores que orientou a criação do TCC juntamente com a
                  professor Marcos Rodrigo. Lesciona na Escola Tecnica Pedro Ferreira Alves como professora de curso
                  tecnico de informatica.
                </p>
              </div>
            </div>
            {/* */}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div id="gitSobre">
              <a
                className="a_sobre"
                href="https://github.com/FabioPassos10/Recicle"
                target="_blank"
              >
                <GithubOutlined style={{ float: "left", padding: "12px" }} />
              </a>
              <p id="gitSobre-text">
                Gostou do Recicle? Acesse nosso repositorio no GitHub!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
          <Col className="Col-CardOrientador">
            <ImgOrientador />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
