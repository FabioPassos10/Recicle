import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import pontos from "./pontos.json";

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
        <button onClick={() => mudarFiltroTipo("Papel")}>Papel</button>
        <button onClick={() => mudarFiltroTipo("Metal")}>Metal</button>
        <button onClick={() => mudarFiltroTipo("Óleos")}>Óleos</button>
        <button onClick={() => mudarFiltroTipo("Pilhas")}>Pilhas</button>
        <button onClick={() => mudarFiltroTipo("Eletrônicos")}>
          Eletrônicos
        </button>
        <button onClick={() => mudarFiltroTipo("Orgânicos")}>Orgânicos</button>
        <button onClick={() => mudarFiltroTipo("")}>Outros</button>
        <button onClick={() => mudarFiltroCidade("Mogi Mirim")}>
          Mogi Mirim
        </button>
        <button onClick={() => mudarFiltroCidade("Mogi Guaçu")}>
          Mogi Guaçu
        </button>
        <button onClick={() => mudarFiltroCidade("Itapira")}>Itapira</button>
        <button onClick={() => mudarFiltroCidade("")}>Todas</button>
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
