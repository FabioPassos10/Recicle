import React from "react";
import Grafico from "../../Components/BarChart";
import PieChart from "../../Components/PieChart";
import LixoAmarelo from "../../Components/lixoAmarelo";
import LixoAzul from "../../Components/lixoAzul";
import LixoMarrom from "../../Components/lixoMarrom";
import LixoVerde from "../../Components/lixoVerde";
import LixoVermelho from "../../Components/lixoVermelho";
import Table from "../../Components/Table";

import "../../Pages/Dicas/dicas.css";

export default function Dicas() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="graf row">
            <div className="col-xs-7 col-md-7 col-sm-12 grafico">
              <Grafico />
            </div>
            <div className="col-xs-5 col-md-5 col-sm-12">
              <p className="text-grafico">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus minima dolorem facere optio quam. Aliquam possimus ab
                qui facere placeat magnam laboriosam quod temporibus iure autem,
                exercitationem i usto! Laudantium, quod? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Possimus minima dolorem
                facere optio quam. Aliquam possimus ab qui facere placeat magnam
                laboriosam quod temporibus iure autem, exercitationem i usto!
                Laudantium, quod? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Possimus minima dolorem facere optio quam.
                Aliquam possimus ab qui facere placeat magnam laboriosam quod
                temporibus iure autem, exercitationem i usto! Laudantium, quod?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus minima dolorem facere optio quam. Aliquam possimus ab
                qui facere placeat magnam laboriosam quod temporibus iure autem,
                exercitationem i usto! Laudantium, quod?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="graf">
            <PieChart />

            <div className="col-12">
              <p className="text-chart">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus minima dolorem facere optio quam. Aliquam possimus ab
                qui facere placeat magnam laboriosam quod temporibus iure autem,
                exercitationem i usto! Laudantium, quod? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Possimus minima dolorem
                facere optio quam. Aliquam possimus ab qui facere placeat magnam
                laboriosam quod temporibus iure autem, exercitationem i usto!
                Laudantium, quod? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Possimus minima dolorem facere optio quam.
                Aliquam possimus ab qui facere placeat magnam laboriosam quod
                temporibus iure autem, exercitationem i usto! Laudantium, quod?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus minima dolorem facere optio quam. Aliquam possimus ab
                qui facere placeat magnam laboriosam quod temporibus iure autem,
                exercitationem i usto! Laudantium, quod?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-mid">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima dolorem facere optio quam. Aliquam possimus ab qui facere
          placeat magnam laboriosam quod temporibus iure autem, exercitationem i
          usto! Laudantium, quod?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima dolorem facere optio quam. Aliquam possimus ab qui facere
          placeat magnam laboriosam quod temporibus iure autem, exercitationem i
          usto! Laudantium, quod?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima dolorem facere optio quam. Aliquam possimus ab qui facere
          placeat magnam laboriosam quod temporibus iure autem, exercitationem i
          usto! Laudantium, quod?
        </p>
        <Table />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10 vl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              minima dolorem facere optio quam. Aliquam possimus ab qui facere
              placeat magnam laboriosam quod temporibus iure autem,
              exercitationem i usto! Laudantium, quod?
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima dolorem facere optio quam. Aliquam possimus ab qui facere
          placeat magnam laboriosam quod temporibus iure autem, exercitationem i
          usto! Laudantium, quod?
        </p>
      </div>

      <div className="dicas d-flex">
        <div className="container">
          <div className="external">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-2 col-sm-6 m-2 div-img d-flex justify-content-center">
                    <div className="img-dica mt-3">{<LixoAmarelo />}</div>
                  </div>
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus...
                      <div className="more-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus minima dolorem facere optio quam. Aliquam
                        possimus ab qui facere placeat magnam laboriosam quod
                        temporibus iure autem, exercitationem i usto!
                        Laudantium, quod?Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus minima dolorem facere optio
                        quam. Aliquam possimus ab qui facere placeat magnam
                        laboriosam quod temporibus iure autem, exercitationem i
                        usto! Laudantium, quod?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus...
                      <div className="more-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus minima dolorem facere optio quam. Aliquam
                        possimus ab qui facere placeat magnam laboriosam quod
                        temporibus iure autem, exercitationem i usto!
                        Laudantium, quod?Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus minima dolorem facere optio
                        quam. Aliquam possimus ab qui facere placeat magnam
                        laboriosam quod temporibus iure autem, exercitationem i
                        usto! Laudantium, quod?
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 m-2 div-img d-flex justify-content-center">
                    <div className="img-dica mt-3">{<LixoAzul />}</div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-2 col-sm-6 m-2 div-img img-dica d-flex justify-content-center">
                    <div className="img-dica mt-3">{<LixoMarrom />}</div>
                  </div>
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus...
                      <div className="more-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus minima dolorem facere optio quam. Aliquam
                        possimus ab qui facere placeat magnam laboriosam quod
                        temporibus iure autem, exercitationem i usto!
                        Laudantium, quod?Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus minima dolorem facere optio
                        quam. Aliquam possimus ab qui facere placeat magnam
                        laboriosam quod temporibus iure autem, exercitationem i
                        usto! Laudantium, quod?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus...
                      <div className="more-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus minima dolorem facere optio quam. Aliquam
                        possimus ab qui facere placeat magnam laboriosam quod
                        temporibus iure autem, exercitationem i usto!
                        Laudantium, quod?Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus minima dolorem facere optio
                        quam. Aliquam possimus ab qui facere placeat magnam
                        laboriosam quod temporibus iure autem, exercitationem i
                        usto! Laudantium, quod?
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 m-2 div-img d-flex justify-content-center">
                    <div className="img-dica mt-3">{<LixoVerde />}</div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-2 col-sm-6 m-2 div-img d-flex justify-content-center">
                    <div className="img-dica mt-3">{<LixoVermelho />}</div>
                  </div>
                  <div className="col-md-9 col-sm-6 m-2 text-dicas">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus...
                      <div className="more-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus minima dolorem facere optio quam. Aliquam
                        possimus ab qui facere placeat magnam laboriosam quod
                        temporibus iure autem, exercitationem i usto!
                        Laudantium, quod?Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus minima dolorem facere optio
                        quam. Aliquam possimus ab qui facere placeat magnam
                        laboriosam quod temporibus iure autem, exercitationem i
                        usto! Laudantium, quod?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
