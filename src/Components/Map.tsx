import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Styles/map.css";

const Mapa = () => {
  return (
    <MapContainer
      center={[-22.432, -46.9582]}
      zoom={15}
      scrollWheelZoom={false}
      fullscreenControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-22.42535322294484, -46.9647394661826]}>
        <Popup>
          <h3>Hospital 22 de outubro</h3>
          <p>pilhas - baterias</p>
        </Popup>
      </Marker>
      <Marker position={[-22.426459414665985, -46.95148736206531]}>
        <Popup>
          <h3>Unidade de reciclagem de resíduos</h3>
          <p>eletrônicos</p>
        </Popup>
      </Marker>
      <Marker position={[-22.431625344502855, -46.938099329403144]}>
        <Popup>
          <h3>Santa Rita Reciclagem</h3>
        </Popup>
      </Marker>
      <Marker position={[-22.43084032629549, -46.9594548331026]}>
        <Popup>
          <h3>Nelson Sucatas</h3>
          <p>metal</p>
        </Popup>
      </Marker>
      <Marker position={[-22.418894546959958, -46.97793400111249]}>
        <Popup>
          <h3>RBM Comércio Reciclagem e Beneficiamento de Metais</h3>
          <p>metais</p>
        </Popup>
      </Marker>
      <Marker position={[-22.372842415387957, -46.9542089465968]}>
        <Popup>
          <h3>Ecorecicla</h3>
        </Popup>
      </Marker>
      <Marker position={[-22.415497503455164, -46.962247002417406]}>
        <Popup>
          <h3>Rei Fer (ferro velho)</h3>
          <p>metal</p>
        </Popup>
      </Marker>
      <Marker position={[-22.418425233503182, -46.971520289469275]}>
        <Popup>
          <h3>Pro Vaso Comércio Fertilizantes Orgânicos</h3>
          <p>orgânicos</p>
        </Popup>
      </Marker>
      <Marker position={[-22.434673516033623, -46.98502202642122]}>
        <Popup>
          <h3>Eco Óleo Comércio de Óleos</h3>
          <p>óleo</p>
        </Popup>
      </Marker>
      <Marker position={[-22.41516279382412, -46.96197569501861]}>
        <Popup>
          <h3>R J Pereira Mogi Mirim</h3>
          <p>papel</p>
        </Popup>
      </Marker>
    </MapContainer>
   
  );
};

export default Mapa;
