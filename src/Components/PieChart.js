import React, { useState } from "react";
import { Chart } from "react-google-charts";

function PieChart() {
  const [options, setOptions] = useState({
    title: "Quantidade de Lixo produzida",
  });
  const [optionsBar, setOptionsBar] = useState({
    title: "Geração RSU Brasil",
  });
  const [data, setData] = useState([
    ["Lixo", "Quantidade produzida em toneladas por ano"],
    ["Papel", 39],
    ["metais", 16],
    ["Metal", 50],
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Chart
            width={"600px"}
            height={"400px"}
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
