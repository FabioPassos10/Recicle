import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Styles/map.css";

const Mapa = () => {
  return (
    <> <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      fullscreenControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer></>
   
  );
};

export default Mapa;
