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
              <br />
                O processo também funciona como Educação Ambiental a seus praticantes, gera empregos a catadores
                e funcionários da coleta seletiva e reduz quantias de lixo enviadas a aterros sanitários.
              <br />
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
      <h4 className="tituloRM">A Reciclagem no Mundo</h4>
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

        <h4>Coleta Seletiva</h4> <br />
        <p>
          Segundo Bruna Gentil, coleta seletiva trata-se da separação entre resíduo e lixo. Entende-se como lixo ou rejeitos tudo
          aquilo que não pode ser reutilizado e resíduo como sendo todo tipo de descarte que pode ser reciclado.
        </p>
        <p>
          É através da coleta seletiva que ocorre a reciclagem de materiais, resultando na economia de recursos naturais e alívio de mais acúmulo de resíduos nos aterros sanitários. Ela faz parte da Política Nacional de Resíduos Sólidos (PNRS), lei federal nº 12.305/2010 criada em 2010, que objetiva a gestão adequada dos resíduos sólidos do Brasil. Nessa lei, está previsto que a responsabilidade pelo descarte correto é de todos que participam da elaboração, produção ou consumo de um produto.
        </p>
        <p>
          No Brasil é comum a coleta porta a porta, realizada por caminhões especiais e a coleta por Pontos de Entrega Voluntária (PEVs), que pode ser feita por prestadores de serviço público de limpeza ou por associações e cooperativas de catadores de material reciclável.
        </p>
        <p>
          Além de ser benéfica para a diminuição da poluição ambiental, do desperdício de recursos naturais e superlotação dos aterros sanitários, a Coleta Seletiva é uma grande fonte geradora de empregos nas cidades, principalmente para trabalhadores marginalizados nas cooperativas.
        </p>
        <p>
          A contribuição para a Coleta Seletiva pode ser feita dentro de casa, separando materiais recicláveis (metais, embalagens, papel, papelão e vidro) do lixo orgânico (restos de alimento) e de rejeitos (como fraldas, absorventes, cotonetes e papel higiênico usado).
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

                      <div className="more-text">
                        De acordo com o que aponta Monik da Silveira Suçuarana, o vidro é infinitamente
                        reciclável, podendo passar pelo processo muitas vezes sem perder suas qualidades.
                        Também é 100% reciclável, ou seja, não há perda de material durante o processo. Para
                        cada tonelada de caco de vidro, uma tonelada de vidro novo é produzida. Porém, para que
                        a mesma quantia seja produzida, são necessárias 1,2 toneladas de matéria-prima.

                        O vidro coletado é encaminhado para as empresas responsáveis pela triagem, limpeza e
                        comercialização de vidros. Nesses locais, o vidro é separado por tipo e cor, e passa por
                        um rigoroso processo de limpeza, através do qual todas as impurezas como tampas, gargalos
                        de metal, papéis, restos de produtos químicos, etc. são removidas.

                        Posteriormente, são triturados e transformados em cacos de tamanho homogêneo, que são
                        aquecidos a temperaturas acima dos 1300°C. O material se funde e, como o vidro derretido
                        é maleável, pode assumir diferentes formas, originando novos produtos.

                        Existem alguns tipos de vidros que não são recicláveis, como os espelhos, vidros de
                        automóveis, vidros de janelas e box de banheiro, lâmpadas e utensílios de vidro temperado.
                        Isso porque geralmente não existem tecnologias suficientes para a reciclagem destes, ou o
                        processo é trabalhoso e desvantajoso economicamente.
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
