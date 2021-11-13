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
import lixoPlastico from '../../src/assets/lixo plastico.png';


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
        <Button id="botaoPapel" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Papel")}><img src={lixoPapel} width="50px" height="60px" /> Papel</Button>
        <Button id="botaoMetal" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Metal")}><img src={lixoMetal} width="50px" height="60px" /> Metal</Button>
        <Button id="botaoVidro" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Vidro")}><img src={lixoVidro} width="50px" height="60px" /> Vidro</Button>
        <Button id="botaoPlastico" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Plástico")}><img src={lixoPlastico} width="50px" height="60px" /> Plástico</Button>
        <Button id="botaoOrganicos" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Orgânicos")}><img src={lixoOrganico} width="50px" height="60px" /> Ôrganicos</Button>
        <Button id="botaoEletronicos" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Eletrônicos")}><img src={lixoEletronico} width="50px" height="60px" /> Eletrônicos</Button>
        <Button id="botaoOleos" className="tiposDeLixo" onClick={() => mudarFiltroTipo("Óleos")}><img src={lixoOleo} width="50px" height="60px" /> Óleos</Button>
        <Button id="botaoLimpar" className="tiposDeLixo" onClick={() => mudarFiltroTipo("")}>Limpar Filtros</Button>
      </div>
      <div>
        <ButtonGroup id="cidades">
          <Button outline onClick={() => mudarFiltroCidade("Mogi Mirim")}>Mogi Mirim</Button>
          <Button outline onClick={() => mudarFiltroCidade("Mogi Guaçu")}>Mogi Guaçu</Button>
          <Button outline onClick={() => mudarFiltroCidade("Itapira")}>Itapira</Button>
          <Button outline onClick={() => mudarFiltroCidade("")}>Todas</Button>
        </ButtonGroup>
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
