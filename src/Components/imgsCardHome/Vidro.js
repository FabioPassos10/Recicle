import React from "react";
import vidro from "../../assets/icone verde.png";

function Vidro() {
  return (
    <img
      style={{
        display: "flex",
        height: "200px",
        marginTop: "25px",
        marginBottom: "15px",
      }}
      src={vidro}
      alt="Simbolo Plástico"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Vidro;
