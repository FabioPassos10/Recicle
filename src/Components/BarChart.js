import React, { useState } from "react";
import { Chart } from "react-google-charts";

function Grafico() {
  const [options, setOptions] = useState({
    title: "Quantidade de Lixo produzida",
  });
  const [optionsBar, setOptionsBar] = useState({
    title: "Geração RSU Brasil",
  });

  const [dataBar, setDataBar] = useState([
    ["", "2010 Geração de RSU", "2019 Geração de RSU"],
    ["Norte", 4400000, 5800000],
    ["Nordeste", 17400000, 19700000],
    ["Centro Oeste", 2695000, 2896000],
    ["Suldeste", 2099000, 1953000],
    ["Sul", 2099000, 1953000],
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", height: "400px" }}>
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="BarChart"
            data={dataBar}
            options={optionsBar}
            backgroundcolor="red"
          />
        </div>
      </header>
    </div>
  );
}

export default Grafico;
