import React from "react";
import metal from "../../assets/icone amarelo.png";

function Metal() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={metal}
      alt="Reciclagem"
      height={"95%"}
      width={"95%"}
      margin="10px"
    />
  );
}

export default Metal;
