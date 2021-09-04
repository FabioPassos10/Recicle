
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
                <NavLink href="/Mais">Mais</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </header>

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
  <p>teste</p>
   
  </>
      
    

  )
}










