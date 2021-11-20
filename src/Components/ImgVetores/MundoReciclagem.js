import React from "react";
import mundoreciclagem from "../../assets/mundo reciclagem.png"

function MundoReciclagem() {
  return (
    <img
      style={{
        display: "flex",
        height: "300px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={mundoreciclagem}
      alt="Reciclagem"
      height={"400px"}
      width={"400px"}
      margin="10px"
    />
  );
}

export default MundoReciclagem;