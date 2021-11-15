import React from "react";
import papel from "../../assets/icone azul.png";

function Papel() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={papel}
      alt="Reciclagem"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Papel;
