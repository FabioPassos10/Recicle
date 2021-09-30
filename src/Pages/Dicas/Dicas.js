import React from "react";
import PieChart from "../../Components/PieChart";
import BarChart from "../../Components/BarChart";
import "./dicas.css";

export default function Dicas() {
  return (
    <section>
      <div id="grafico">
        <PieChart /> {/*Gráfico de pizza */}
        {/* Eu separei os graficos em dois para você conseguir colocar eles nolocal correto*/}
        <div id="divtextDicas">
          {" "}
          <p>
            Lorem ipsum dolor sit amet. Eos iste nemo sit animi sunt vel enim
            dignissimos sed alias voluptatem eos nostrum quis sed eaque vero et
            Quis cupiditate. Est labore excepturi aut maxime distinctio eos
            cumque quos sit facilis expedita. In ipsa dolor et molestiae
            doloremque et impedit reprehenderit est voluptate dolores ea
            corrupti suscipit. Qui galisum consequatur ut totam sequi ex vitae
            ipsum.{" "}
          </p>
          <p>
            Sed quas consequatur qui laboriosam veritatis est molestiae velit
            aut nihil delectus sed dolor molestiae hic eius optio qui deserunt
            accusantium. Eos nisi aliquid et perspiciatis corrupti vel dolor
            molestiae sed rerum quae.{" "}
          </p>
        </div>
      </div>
      {/* <BarChart /> */}
      {/*  Gráfico de Barra */}
      {/* usa esses de exemplo caso não qeira apaga tudo */}
    </section>
  );
}
