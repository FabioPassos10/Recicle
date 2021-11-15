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
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Organico;
