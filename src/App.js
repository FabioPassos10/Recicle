import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Home from "./Home";
import Dicas from "./Dicas";
import Logo from "./Componentes/logo";
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
} from "reactstrap";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
<>
    <Router>
      <header className="header"> <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavItem>
                <NavLink href="/Sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Dicas">Dicas</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </header>

      <Switch>
        <Route path="/Sobre">
          <Sobre />
        </Route>
        <Route path="/Dicas">
          <Dicas />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

   
  </>
      
    

  )
}
