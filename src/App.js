
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sobre from "./Sobre";
import Home from "./Home";
import Mais from "./Mais";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from 'reactstrap';
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (

    <Router>
      <Container className="themed-container" fluid={true}>

        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Mais">Mais</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Recicle</NavbarText>

          </Collapse>
         

        </Navbar>
      </Container>





      <Switch>
        <Route path="/Sobre">
          <Sobre />
        </Route>
        <Route path="/Mais">
          <Mais />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>





    </Router>

  );
}










