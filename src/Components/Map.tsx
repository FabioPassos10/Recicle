import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import pontos from "./pontos.json";
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button, Container, Col, Row } from "reactstrap";
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
        <Container>
          <Row
            md="8"
            sm="4"
            xs="2"
          >
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Papel")}><img src={lixoPapel} width="50px" height="60px" /> Papel</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Metal")}><img src={lixoMetal} width="50px" height="60px" /> Metal</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Óleos")}><img src={lixoOleo} width="50px" height="60px" /> Óleos</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Pilhas")}><img src={lixoOleo} width="50px" height="60px" /> Pilhas</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Plástico")}><img src={lixoMetal} width="50px" height="60px" /> Plástico</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Eletrônicos")}><img src={lixoEletronico} width="50px" height="60px" /> Eletrônicos</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("Orgânicos")}><img src={lixoOrganico} width="50px" height="60px" /> Ôrganicos</button>
            </Col>
            <Col className="bg-light border">
              <button className="tiposDeLixo" onClick={() => mudarFiltroTipo("")}>Outros</button>
            </Col>
          </Row>
        </Container>
        {/* <button onClick={() => mudarFiltroCidade("Mogi Mirim")}>
          Mogi Mirim
        </button>
        <button onClick={() => mudarFiltroCidade("Mogi Guaçu")}>
          Mogi Guaçu
        </button>
        <button onClick={() => mudarFiltroCidade("Itapira")}>Itapira</button>
        <button onClick={() => mudarFiltroCidade("")}>Todas</button> */}

        <ButtonDropdown toggle={function noRefCheck() { }}>
          <DropdownToggle caret>
            {filtroCidade === "" ? "Filtrar cidade" : filtroCidade}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem MogiMirim onClick={() => mudarFiltroCidade("Mogi Mirim")}>Mogi Mirim</DropdownItem>
            <DropdownItem MogiGuacu onClick={() => mudarFiltroCidade("Mogi Guaçu")}>Mogi guaçu</DropdownItem>
            <DropdownItem Itapira onClick={() => mudarFiltroCidade("Itapira")}>Itapira</DropdownItem>
            <DropdownItem Todas onClick={() => mudarFiltroCidade("")}>Todas</DropdownItem>
            <DropdownItem divider />
          </DropdownMenu>
        </ButtonDropdown>
      </div>

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
