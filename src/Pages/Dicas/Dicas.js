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
              <h4>Importância da Reciclagem</h4>
              <p className="text-grafico">
              A reciclagem auxilia na conservação de recursos naturais, reduzindo a extração de novas 
              matérias-primas, além de proporcionar economia de energia e de gastos com limpeza urbana, 
              já que também evita a poluição. Tal prática reduz emissões de gases do efeito estufa e, 
              dessa forma, garante um meio ambiente sustentável.
              <br/>
              O processo também funciona como Educação Ambiental a seus praticantes, gera empregos a catadores 
              e funcionários da coleta seletiva e reduz quantias de lixo enviadas a aterros sanitários.
              <br/>
              Devido aos aterros sanitários serem tão densamente compactados, grande parte da degradação que ocorre é 
              anaeróbia (processo de decomposição da matéria orgânica por bactérias em um meio onde não há a presença 
              de oxigênio). Processos anaeróbicos geram enorme quantidade de gás metano, um dos principais contribuintes 
              para o aquecimento global.  
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="graf">
            <PieChart />

            <div className="col-12">
                <h4>Produção de Lixo no Brasil</h4>
              <p className="text-chart">
              Conforme cita Karin Lehnardt, mais da metade do lixo brasileiro é orgânico, ou seja, originário 
              de seres vivos e, do total produzido, apenas 3% são reciclados. São Paulo consiste na cidade 
              brasileira que mais produz lixo, porém a região Nordeste localiza a maior quantidade de resíduos 
              sem destinação adequada. Um brasileiro produz, em média, 1 kg de lixo por dia, assim, o país 
              produz cerca de 250 mil toneladas de lixo diariamente. 
              </p>
            </div>
          </div>
        </div>
      </div>
        <h4 id="tituloRM">A Reciclagem no Mundo</h4>
      <div className="container text-mid">
        
        <p>
          Segundo dispõe Karin Lehnrdt, a probabilidade de que norte-americanos reciclem é maior do que
          votem e, mulheres normalmente expressam maior preocupação com o meio ambiente, sendo melhores
          recicladoras do que os homens.
        </p>
        <p>
          No final dos anos 1800, os vendedores ambulantes agiam como recicladores iniciais, carregando
          sacos de itens reutilizáveis em seus vagões para vender para lojas gerais. À medida que menos
          pessoas criavam seus próprios bens após a Revolução Industrial, o conhecimento especializado de
          habilidades e materiais de trabalho manual tornou-se antigo. As sobras e sucatas que antes eram
          consideradas valiosas e reutilizáveis se tornaram lixo.
        </p>
        <p>
          A primeira incineração organizada de lixo começou na Inglaterra em 1874. Porém, reciclagem economiza
          duas vezes mais energia do que a queima de lixo em um incinerador.
        </p>
        <p>
          Suíça lidera taxas de reciclagem, com 52% do lixo sendo reciclado. Austrália ocupa segunda posição com
          49,7% , seguida por Alemanha (48%), Países Baixos (46%) e Noruega (40%).
        </p>

        <p>
          Antes do século XX, ossos foram um dos itens mais reciclados. Estes eram frequentemente
          usados para fabricação de botões, papel e gelatina. Também eram utilizados no processamento
          de alimentos, fotografia e cola.
        </p>
        <p>
          Depois de fazer uma cirurgia de lipoaspiração, um capitão da Nova Zelândia reciclou sua gordura
          em biocombustível para alimentar seu barco ecológico.
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
                      A cada tonelada de aço reciclada, deixa-se de extrair cerca de 1,5 toneladas de minério de 
                      ferro da natureza e, a cada 75 embalagens de aço recicladas, salva-se o equivalente a uma 
                      árvore (já que árvores são utilizadas como carvão vegetal para produção de matéria-prima virgem). 
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
