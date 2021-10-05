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
    <section>
      <div class="container">
        <div class="row mb-4 graf1">
          <div class="col-6">
            {<PieChart />}
          </div>
          <div class="col-6 bg-white">
            asdas	Lorem ipsum lobortis pharetra lobortis tempor dapibus velit eget, bibendum consectetur ipsum ut praesent cursus malesuada aptent, malesuada quam metus nec sociosqu molestie in. vestibulum porttitor inceptos tempor pulvinar vehicula, orci rhoncus cursus pulvinar. molestie tristique fermentum arcu maecenas a cursus nam, porta eros iaculis in vivamus blandit conubia phasellus, praesent rhoncus laoreet fermentum ligula taciti. est consectetur etiam nunc urna conubia facilisis ut dictumst, fermentum risus lacus sagittis turpis mauris posuere consequat enim, a tristique platea posuere etiam non aenean. platea et pulvinar molestie elit lacus iaculis sem ipsum curabitur, habitasse malesuada donec dictum pretium ultricies gravida fringilla, tempor ligula per facilisis duis curabitur elementum placerat.

            Ipsum diam nam mattis in nibh consequat leo litora, pellentesque mauris viverra euismod faucibus quis molestie nulla aliquam, curabitur himenaeos commodo donec et id luctus. donec bibendum porta mattis feugiat platea cubilia diam nisl, sagittis hendrerit et pretium quam inceptos scelerisque sapien consequat, in tempus dictumst varius vulputate sodales vestibulum. molestie leo quisque vivamus faucibus per luctus lorem at ultrices, massa faucibus hendrerit iaculis egestas metus pharetra iaculis, consectetur elit massa fames et curabitur aliquam nec. magna inceptos turpis condimentum accumsan adipiscing aliquam, consectetur gravida consectetur mi laoreet, aenean dui at nostra proin.
          </div>
        </div>

        <div class="row mt-4 graf2">
          <div class="col-6">
            {<Grafico />}
          </div>
          <div class="col-6 bg-white">
            asdasdasdasdasdsad
          </div>
        </div>
      </div>

      <div class="dicas">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 1
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
            <div class="col-8">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 2
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
            <div class="col-8">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 3
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 4
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 5
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
            <div class="col-8">
              <div class="card">
                <h2 class="card-title m-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  CARD 6
                </h2>
                <div class="card-body">Beba água</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

