import React from "react";
import { Row, Container, Col } from "reactstrap";
import "./sobre.css";

export default function sobre(props) {
  return (
    <section>
      <Container id="Container-textSobre">
        <Row>
          <Col>
            <h3></h3>

            <p className="p-Sobre">
              O projeto ReCircle é originário do desenvolvimento de um Trabalho de Conclusão de Curso
              (TCC) realizado por alunos do 3º ano do Curso Técnico em Desenvolvimento de Sistemas Integrado ao Ensino Médio
              (3º EMDS) ministrado na instituição de ensino ETEC Pedro Ferreira Alves – Mogi Mirim, no ano de 2021.
          </p>
            <p className="p-Sobre">
              Partindo-se de uma ideia para benefício social direcionada ao município e alinhada à aprendizagem adquirida na área de
              desenvolvimento web, surge ReCircle: um projeto que objetiva a conscientização popular, o compartilhamento de informações e
              divulgação de organizações comunitárias e pontos de descarte da região, visando o auxílio à preservação da natureza.
          </p>
            <p className="p-Sobre">
              Pa ra execução deste projeto, a equipe foi organizada, atuando de forma colaborativa em diferentes etapas de seu
              desenvolvimento. Inicialmente, sua proposta foi apresentada por João Pedro e, então, a prototipagem ocorreu em responsabilidade
              de Fábio Eloy. O design foi elaborado por Alexandre Batista e Camile Russo e a programação, aplicada por Luan Henrique,
              Luiz Gustavo, Fábio e Alexandre. Para produção de conteúdos textuais ao site, pesquisas e escrita foram realizadas por Camile,
              Luiz e João Pedro.
          </p>
            <p className="p-Sobre">
              Apesar da divisão de tarefas, o time de desenvolvimento prestou auxílio a todos os âmbitos deste trabalho de maneira conjunta.
          </p><br></br>

            <h3>EQUIPE</h3>
          </Col>
        </Row>
        </Container>

      <Container fluid={true} >
        <Row xs="1" md="2" sm="1" xl="3" lg="3">
          <Col>
            <div className="col-SobreCard">
              {" "}
              <div className="CardFoto">
                <div className="DivImgAlexandre"></div>
              </div>
              <div className="CardTexto">
                <h4>Alexandre Batista 👨‍🎨</h4>
                <br/>
                Alexandre exerceu participação intrínseca ao ramo de design em conjunto com o desenvolvimento
                para web. Assim, o membro da equipe colaborou através da utilização das linguagens de
                programação para a execução de páginas apresentadas no site, detendo como objetivo a
                concretização da aparência idealizada e definida em um protótipo do projeto – qual prestou
                auxílio à criação.
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
                <br/>
                Camile desempenhou funções correlatas ao design do produto apresentado, sendo a responsável pela
                elaboração de uma logo para o projeto. Sua contribuição se estendeu à reunião de informações e
                construção das transcrições implementadas às páginas do site que, detinham intuito de cumprir os
                objetivos da ideia executada: compartilhar informações necessárias para a disseminação da Educação
                Ambiental e reunir pontos de descarte de lixo próximos à região.
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
                <br/>
                Fabio exerceu o papel do principal programador do projeto ReCircle, selecionou a linguagem 
                de programação React para o back-end e programou grande parte do Mapa, no qual foi portado 
                pelo Leaflet na linguagem JavaScript. Com isso o membro da equipe desenvolveu e auxiliou os 
                demais participantes em diversas amplitudes do projeto. Fabio também foi responsável por 
                elaborar o GitHub do ReCircle, no qual é formado por um código aberto e de fácil acesso. 
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
                <br/>
                João idealizou o projeto em objetivo de facilitar e ajudar na procura do ideal descarte dos lixos que, 
                muitas das vezes, é desconhecido por parte do usuário. O membro da equipe gerou os primeiros protótipos 
                do site e foi responsável, posteriormente, por auxiliar na criação e desenvolvimentos dos demais recursos 
                funcionais e visuais do projeto. A aba de conteúdo sobre cada membro do projeto juntamente com a localização e reconhecimento 
                de todos os pontos de descarte da região foi elaborada por ele. 
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
                <br/>
                Luan auxiliou na programação do projeto, solucionando eventuais problemas no qual se deparamos 
                no decorrer do desenvolvimento. Atuou na criação do Jason interno do site, tal qual funciona 
                como o banco de dados interno do projeto. O membro também foi responsável por gerenciar os 
                dados do mapa, realizando um filtro funcional com a biblioteca do Leafle. 
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
                <br/>
              Luiz deteve como responsabilidade a produção de conteúdos textuais para monografia, de mesmo 
              modo que o apoio ao desenvolvimento web. Dessa forma, o integrante prestou cooperação ao 
              registro das etapas do processo de concepção do produto final almejado, bem como, exerceu 
              papel encarregado de pesquisas para ampliação dos conhecimentos necessários ao time. 
                  </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="Col-CardOrientador">
            <p>
              Lorem ipsum dapibus felis neque sociosqu magna vestibulum velit dictumst sodales pharetra enim, integer et a blandit fusce viverra eros quis suspendisse elementum habitant.
              conubia ornare vitae facilisis egestas lacus venenatis sem augue arcu magna phasellus platea sem imperdiet elementum curae ante, maecenas arcu iaculis vestibulum augue vestibulum varius semper volutpat placerat sollicitudin volutpat vestibulum semper ad.
              mi vivamus a non condimentum sed eu purus malesuada dapibus consectetur, nec tincidunt cursus cubilia lacinia vestibulum facilisis hendrerit gravida, etiam ad neque vestibulum commodo sagittis imperdiet est quisque.
              curae consectetur justo inceptos morbi dictum augue quisque, purus accumsan mollis posuere placerat rhoncus, curabitur posuere lacus mattis condimentum senectus.
</p>
            <p>
              Venenatis habitasse eleifend tempor pharetra ligula metus blandit lacus, quam iaculis magna dapibus libero auctor congue dolor auctor, posuere aptent conubia felis fusce duis odio.
              ante nisi porttitor proin libero tortor ligula fermentum porttitor massa, lobortis ut risus odio arcu potenti molestie tellus sociosqu adipiscing, sociosqu curae habitant cubilia urna erat rutrum velit.
              mollis ut semper mauris malesuada nisi nec luctus inceptos sodales, vestibulum turpis inceptos fusce sociosqu etiam massa torquent, velit arcu duis fringilla ante habitasse congue phasellus.
              morbi ad auctor cubilia sagittis eleifend, nam netus nostra mi non, class sed mattis blandit.
</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
