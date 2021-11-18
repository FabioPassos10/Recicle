import React from "react";
import eletronico from "../../assets/icone branco.png";

function Eletronico() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={eletronico}
      alt="Reciclagem"
      height={"95%"}
      width={"95%"}
      margin="10px"
    />
  );
}

export default Eletronico;
