import React from "react";
import plastico from "../../assets/icone vermelho.png";

function Papel() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={plastico}
      alt="Simbolo Plástico"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Papel;
