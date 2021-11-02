import React from "react";
import Grafico from "../../Components/BarChart";
import PieChart from "../../Components/PieChart";

import LixoAmarelo from "../../Components/lixoAmarelo";
import LixoAzul from "../../Components/lixoAzul";
import LixoMarrom from "../../Components/lixoMarrom";
import LixoVerde from "../../Components/lixoVerde";
import LixoVermelho from "../../Components/lixoVermelho";
// import { Container, Row, Col } from 'reactstrap';

import "../../Pages/Dicas/dicas.css";

export default function Dicas() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="graf row">
            <div className="col-xs-7 col-md-7 col-sm-12 grafico">
              {<Grafico />}
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
            <div className="col-12 justify-content-center chart">
              {<PieChart />}
            </div>
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
                  <div className="col-2 div-img d-flex justify-content-center">
                    <div className="img-dica">{<LixoAmarelo />}</div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-9">
                    <p className="text-dicas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?
                    </p>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-9">
                    <p className="text-dicas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?
                    </p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-2 div-img d-flex justify-content-center">
                    <div className="img-dica">{<LixoAzul />}</div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-2 div-img img-dica d-flex justify-content-center">
                    <div className="img-dica">{<LixoMarrom />}</div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-9">
                    <p className="text-dicas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?
                    </p>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-9">
                    <p className="text-dicas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?
                    </p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-2 div-img d-flex justify-content-center">
                    <div className="img-dica">{<LixoVerde />}</div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-2 div-img d-flex justify-content-center">
                    <div className="img-dica">{<LixoVermelho />}</div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-9">
                    <p className="text-dicas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Possimus minima dolorem facere optio quam. Aliquam
                      possimus ab qui facere placeat magnam laboriosam quod
                      temporibus iure autem, exercitationem i usto! Laudantium,
                      quod?
                    </p>
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
