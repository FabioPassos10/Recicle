import React from "react";
import organico from "../../assets/icone marrom.png";

function Organico() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={organico}
      alt="Reciclagem"
      height={"95%"}
      width={"95%"}
      margin="10px"
    />
  );
}

export default Organico;
