import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Home from "./Home";
import Dicas from "./Dicas";
import Logo from "./Componentes/logo";
import Footer from "./Componentes/Footer";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Router>
        <header className="header">
          <Navbar color="dark" dark expand="md" className="navbar">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavLink className="LinksNav" href="/">
                  Home
                </NavLink>
                <NavItem>
                  <NavLink href="/Sobre">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Dicas">Dicas</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <Logo className="logo" />
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

      <Footer />
    </>
  );
}
