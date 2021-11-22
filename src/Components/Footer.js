import React from "react";
import "./Styles/footer.css";
import { Row, Container, Col } from "reactstrap";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <React.Fragment>
      <footer id="Footer">
        <br />
        <Container>
          <Row xs="2">
            <Col>
              <p>Referências</p>
              <div className="divRef">
                <p>
                <a className="a_footer" href="http://www.freepik.com">Designed by Vecteezy / Freepik</a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="gitFooter">
                <p>
                Acesse nosso GitHub
                </p>
              <a
                className="a_sobre"
                href="https://github.com/FabioPassos10/Recicle"
                target="_blank"
              >
                <GithubOutlined style={{}} />
              </a>
                
              </div>
            </Col>
          </Row>
          
        </Container>
        <p>® Copyright 2021</p>
      </footer>
    </React.Fragment>
  );
}
