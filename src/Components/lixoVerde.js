import React from "react";
import imglixo from "../assets/lixo verde.png";

function Verde() {
  return (
    <img style={{ display: "flex", height: "150px", marginTop: "25px", marginBottom: "15px"}}
      src={imglixo}
      alt="Reciclagem"
      height={"100%"}
      width={"100px"}
      margin="10px"
    />
  );
}

export default Verde;
