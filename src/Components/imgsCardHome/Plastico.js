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
      height={"95%"}
      width={"95%"}
      margin="10px"
    />
  );
}

export default Papel;
