import React from "react";
import imglixo from "../assets/lixo vermelho.png";

function Vermelho() {
  return (
    <img style={{ display: "flex", height: "150px", marginTop: "25px", marginBottom: "15px"}}
      src={imglixo}
      alt="Reciclagem"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Vermelho;
