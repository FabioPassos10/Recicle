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
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Eletronico;
