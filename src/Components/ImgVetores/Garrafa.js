import React from "react";
import garrafa from "../../assets/ilustracao dicas 3.png"

function Garrafa() {
  return (
    <img
      style={{
        display: "flex",
        height: "150px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={garrafa}
      alt="Reciclagem"
      height={"150px"}
      width={"300px"}
      margin="10px"
    />
  );
}

export default Garrafa;