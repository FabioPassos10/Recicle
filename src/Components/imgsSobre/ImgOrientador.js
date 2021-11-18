import React from "react";
import imgorientador from "../../assets/foto dos membros.jpg";

function ImgOrientador() {
  return (
    <img
      style={{
        display: "flex",
        minHeight: "300px",
        marginTop: "25px",
        height: "90%",
      }}
      src={imgorientador}
      alt="Foto dos Membros"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default ImgOrientador;
