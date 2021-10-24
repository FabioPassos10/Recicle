import React from "react";
import Grafico from "../../Components/BarChart";
import PieChart from "../../Components/PieChart";
import "../../Pages/Dicas/dicas.css";

function handleMouseOver(e) {
  e.target.style.transform = "scale(1.02)";
}

function handleMouseOut(e) {
  e.target.style.transform = "scale(1)";
}

export default function Dicas() {
  return (
    <main>
      <article className="divBarChart">
        <Grafico />
        <div className="divTexto">
          <p>
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto
          </p>
        </div>
      </article>
      <div className="linha"></div>
      <article className="divPieChart">
        <PieChart />
        <div className="divTexto">
          <p>
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto
          </p>
        </div>
      </article>
      <article className="textos">
        <p>textos textos textos textos textos </p>
        <p>textos textos textos textos textos </p>
      </article>
      <section className="sectionCards"></section>
    </main>
  );
}
