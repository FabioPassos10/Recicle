import "./sobre.css";
import React from "react";
import { Row, Container, Col } from "reactstrap";
import { GithubOutlined } from "@ant-design/icons";

export default function sobre(props) {
  return (
    <section>
      <div id="Redsoc-Sobre">
        <a id="a_sobre" href="https://github.com/FabioPassos10" target="_blank">
          <GithubOutlined />
        </a>
      </div>
      <Container>
        <Row>
          <Col>
            <p>
              Lorem ipsum dapibus felis neque sociosqu magna vestibulum velit
              dictumst sodales pharetra enim, integer et a blandit fusce viverra
              eros quis suspendisse elementum habitant. conubia ornare vitae
              facilisis egestas lacus venenatis sem augue arcu magna phasellus
              platea sem imperdiet elementum curae ante, maecenas arcu iaculis
              vestibulum augue vestibulum varius semper volutpat placerat
              sollicitudin volutpat vestibulum semper ad. mi vivamus a non
              condimentum sed eu purus malesuada dapibus consectetur, nec
              tincidunt cursus cubilia lacinia vestibulum facilisis hendrerit
              gravida, etiam ad neque vestibulum commodo sagittis imperdiet est
              quisque. curae consectetur justo inceptos morbi dictum augue
              quisque, purus accumsan mollis posuere placerat rhoncus, curabitur
              posuere lacus mattis condimentum senectus.
            </p>
            <p>
              Venenatis habitasse eleifend tempor pharetra ligula metus blandit
              lacus, quam iaculis magna dapibus libero auctor congue dolor
              auctor, posuere aptent conubia felis fusce duis odio. ante nisi
              porttitor proin libero tortor ligula fermentum porttitor massa,
              lobortis ut risus odio arcu potenti molestie tellus sociosqu
              adipiscing, sociosqu curae habitant cubilia urna erat rutrum
              velit. mollis ut semper mauris malesuada nisi nec luctus inceptos
              sodales, vestibulum turpis inceptos fusce sociosqu etiam massa
              torquent, velit arcu duis fringilla ante habitasse congue
              phasellus. morbi ad auctor cubilia sagittis eleifend, nam netus
              nostra mi non, class sed mattis blandit.
            </p>
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
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
                Urna quam curabitur fermentum ullamcorper tortor metus ut arcu
                scelerisque hac donec vitae, eleifend consequat elementum justo
                suscipit libero nisl donec malesuada sapien suscipit ultrices
                fusce, ut faucibus nam est vel vivamus condimentum tincidunt
                senectus neque porttitor. tempus vivamus integer dictumst sit
                tristique ac eleifend odio eros, platea dapibus enim tempor per
                fermentum scelerisque suscipit, erat pellentesque justo orci in
                aptent purus netus. egestas himenaeos ullamcorper malesuada
                senectus pretium aenean, vivamus at tincidunt lacinia cubilia
                luctus proin, vulputate sodales dapibus tellus quisque.
                tristique facilisis risus ut mollis commodo fermentum aenean
                neque, in fusce id dictumst potenti vivamus aptent sodales
                mattis, porttitor per felis curabitur donec ornare interdum.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="Col-CardOrientador">
            <p>
              Lorem ipsum dapibus felis neque sociosqu magna vestibulum velit
              dictumst sodales pharetra enim, integer et a blandit fusce viverra
              eros quis suspendisse elementum habitant. conubia ornare vitae
              facilisis egestas lacus venenatis sem augue arcu magna phasellus
              platea sem imperdiet elementum curae ante, maecenas arcu iaculis
              vestibulum augue vestibulum varius semper volutpat placerat
              sollicitudin volutpat vestibulum semper ad. mi vivamus a non
              condimentum sed eu purus malesuada dapibus consectetur, nec
              tincidunt cursus cubilia lacinia vestibulum facilisis hendrerit
              gravida, etiam ad neque vestibulum commodo sagittis imperdiet est
              quisque. curae consectetur justo inceptos morbi dictum augue
              quisque, purus accumsan mollis posuere placerat rhoncus, curabitur
              posuere lacus mattis condimentum senectus.
            </p>
            <p>
              Venenatis habitasse eleifend tempor pharetra ligula metus blandit
              lacus, quam iaculis magna dapibus libero auctor congue dolor
              auctor, posuere aptent conubia felis fusce duis odio. ante nisi
              porttitor proin libero tortor ligula fermentum porttitor massa,
              lobortis ut risus odio arcu potenti molestie tellus sociosqu
              adipiscing, sociosqu curae habitant cubilia urna erat rutrum
              velit. mollis ut semper mauris malesuada nisi nec luctus inceptos
              sodales, vestibulum turpis inceptos fusce sociosqu etiam massa
              torquent, velit arcu duis fringilla ante habitasse congue
              phasellus. morbi ad auctor cubilia sagittis eleifend, nam netus
              nostra mi non, class sed mattis blandit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
