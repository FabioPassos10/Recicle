import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import pontos from "./pontos.json";
import { ButtonGroup, Button, Container, Col, Row, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import lixoMetal from '../../src/assets/lixo metal.png';
import lixoOleo from '../../src/assets/lixo oleo.png';
import lixoOrganico from '../../src/assets/lixo organico.png';
import lixoEletronico from '../../src/assets/lixo eletronico.png';
import lixoPapel from '../../src/assets/lixo papel.png';
import lixoVidro from '../../src/assets/lixo vidro.png';


import "./Styles/map.css";

const Mapa = () => {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");

  const pontosFiltrados = pontos
    .filter((pontos) => pontos.descricao?.includes(filtroTipo))
    .filter((pontos) => pontos.local?.includes(filtroCidade));
  const mudarFiltroTipo = (arg: string) => setFiltroTipo(arg);
  const mudarFiltroCidade = (arg: string) => setFiltroCidade(arg);

  return (
    <div className="container">
      <div id="divButtons">
        {/* <Container>
          <Row
            md="4"
            sm="4"
            xs="2"
          >
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Papel")}><img src={lixoPapel} width="50px" height="60px" /> Papel</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Metal")}><img src={lixoMetal} width="50px" height="60px" /> Metal</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Óleos")}><img src={lixoOleo} width="50px" height="60px" /> Óleos</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Pilhas")}><img src={lixoOleo} width="50px" height="60px" /> Pilhas</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Plástico")}><img src={lixoMetal} width="50px" height="60px" /> Plástico</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Eletrônicos")}><img src={lixoEletronico} width="50px" height="60px" /> Eletrônicos</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Orgânicos")}><img src={lixoOrganico} width="50px" height="60px" /> Ôrganicos</button>
            </Col>
            <Col className="bg-light">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("")}>Outros</button>
            </Col>
          </Row>
        </Container> */}
        <Button color="primary" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Papel")}><img src={lixoPapel} width="50px" height="60px" /> Papel</Button>
        <Button color="warning" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Metal")}><img src={lixoMetal} width="50px" height="60px" /> Metal</Button>
        <Button color="orange" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Óleos")}><img src={lixoOleo} width="50px" height="60px" /> Óleos</Button>
        <Button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Pilhas")}><img src={lixoOleo} width="50px" height="60px" /> Pilhas</Button>
        <Button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Plástico")}><img src={lixoMetal} width="50px" height="60px" /> Plástico</Button>
        <Button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Eletrônicos")}><img src={lixoEletronico} width="50px" height="60px" /> Eletrônicos</Button>
        <Button color="danger" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Orgânicos")}><img src={lixoOrganico} width="50px" height="60px" /> Ôrganicos</Button>
        <Button color="info" className="tiposDeLixo" onClick={() => mudarFiltroTipo("")}>Outros</Button>
      </div>
      <ButtonGroup id="cidades">
          <Button outline onClick={() => mudarFiltroCidade("Mogi Mirim")}>Mogi Mirim</Button>
          <Button outline onClick={() => mudarFiltroCidade("Mogi Guaçu")}>Mogi Guaçu</Button>
          <Button outline onClick={() => mudarFiltroCidade("Itapira")}>Itapira</Button>
          <Button outline onClick={() => mudarFiltroCidade("")}>Todas</Button>
        </ButtonGroup>
      <MapContainer
        id="mapa"
        center={[-22.4136, -46.9029]}
        zoom={13}
        scrollWheelZoom={false}
        fullscreenControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pontosFiltrados.map((pontos) => (
          <Marker position={[pontos.x, pontos.y]}>
            <Popup>
              <h5>{pontos.nome}</h5>
              <p>{pontos.descricao}</p>
              <p>{pontos.endereco}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
