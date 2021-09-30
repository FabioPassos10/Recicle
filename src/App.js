import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./Pages/Sobre/Sobre";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Teste/Test.js";
import Dicas from "./Pages/Dicas/Dicas";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
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
          <NavBar />
        </header>
        <Switch>
          <Route path="/Sobre">
            <Sobre />
          </Route>
          <Route path="/Test">
            <Test />
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
