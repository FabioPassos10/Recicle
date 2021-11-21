import React, { useState } from "react";
import { Chart } from "react-google-charts";

function PieChart() {
  const [options, setOptions] = useState({
    title: "Lixo potencialmente reciclavel",
  });
  const [optionsBar, setOptionsBar] = useState({
    title: "Geração RSU Brasil",
  });
  const [data, setData] = useState([
    ["Lixo", "Quantidade produzida em toneladas por ano"],
    ["Lixo Total", 39],
    ["Lixo Reciclavel", 16],
    ["Lixo Efetivamente Recicaldo", 50],
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", paddingTop: "12px", height: "500px" }}>
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
      </header>
    </div>
  );
}

export default PieChart;
