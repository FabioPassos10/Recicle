import React from "react";
import Grafico from "../../Components/BarChart";
import PieChart from "../../Components/PieChart";
import LixoAmarelo from "../../Components/lixoAmarelo";
import LixoAzul from "../../Components/lixoAzul";
import LixoMarrom from "../../Components/lixoMarrom";
import LixoVerde from "../../Components/lixoVerde";
import LixoVermelho from "../../Components/lixoVermelho";
import Table from "../../Components/Table";
import Garrafa from "../../Components/ImgVetores/Garrafa"

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
                <h4>Importância da Reciclagem</h4>
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

              <p className="text-chart">
                <h4>Produção de Lixo no Brasil</h4>
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

      <div className="container text-mid">

        <p>
          <h4 className="tituloRM">A Reciclagem no Mundo</h4>
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
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10 vl">
            <p>
              Em conformidade a dados apresentados por Júlia Azevedo e por um artigo presente no site Brasil Escola, segue-se a tabela de tempo de decomposição de alguns materiais:
            </p>
          </div>
        </div>
        <Table />


        <p>
          <h4 className="tituloRM">Coleta Seletiva</h4> <br />
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
        </p><br /><br />

        <p className="p_dicasPLM">
          <h4>Produção de Lixo no Mundo</h4>
          Como exposto por Karin Lehnardt e Gabriela Dobre: 
        </p>
        <p>
          <ul>
            <li className="listaPro">Seis milhões de toneladas de lixo são jogadas no mar todos os dias; </li>
            <li className="listaPro">Nos últimos 100 anos, a quantidade de resíduos produzidos por humanos aumentou em mais de 10.000%; </li>
            <li className="listaPro">Mais de 1 milhão de aves marinhas morrem anualmente devido à poluição oceânica; </li>
            <li className="listaPro">No Oceano Pacífico, há a “Grande Porção de Lixo do Pacífico”, onde por cada 2,2 quilos de plâncton existem cerca de 13,2 quilos de lixo, incluindo cigarros, latas, sacos plásticos, garrafas, isopor, escova de dentes, balões e muito mais. O lixo se estende por mais de 6 metros para baixo da água e contém mais de 3,5 milhões de toneladas. Estima-se que a quantidade dobre nos próximos 5 anos; </li>
            <li className="listaPro">Enterrar caixões também significa que 90.272 toneladas de aço, 2.700 toneladas de cobre e bronze e mais de 9.140 quilômetros de madeira dura cobertos de laminados tóxicos também são enterrados por ano; </li>
            <li className="listaPro">O primeiro despejo municipal (lixão) foi criado entre os  anos 500 a.C. e 400 a.C em Atenas. </li>
            <li className="listaPro">Adesivos, etiquetas, fita-crepe, papel-carbono, papel-toalha e papel higiênico, guardanapos com gordura, fotografias, papéis metalizados ou plastificados não são recicláveis; </li>
            <li className="listaPro">No mar, uma linha de nylon demora 650 anos para decompor-se; </li>
            <li className="listaPro">No processo de incineração, o lixo é queimado a temperaturas de 800 ºC a 1000 ºC. </li>
          </ul>
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
                      <p>
                        <h4>Metal</h4>

                        Segundo dados apresentados por Recicla Sampa e Karin Lehnardt:
                      
                        A cada tonelada de aço reciclada, deixa-se de extrair cerca de 1,5 toneladas de minério de ferro da natureza e, a cada 75 embalagens de aço recicladas, salva-se o equivalente a uma árvore (já que árvores são utilizadas como carvão vegetal para produção de matéria-prima virgem).
                        </p><p>
                        A decomposição de uma lata de aço leva de 3 a 10 anos e não compromete o solo nem o meio ambiente. A mesma retorna a seu estado de óxido de ferro;

                        O material é infinitamente reciclável, ou seja, pode passar pelo processo de reciclagem inúmeras vezes quando coletada e destinada corretamente ás usinas recicladores;
                        </p><p>
                        100 quilos reciclados desse material economizam uma quantidade de energia equivalente a três horas de TV ligada, além de que, com a reciclagem do aço, siderúrgicas conseguem economizar energia equivalente ao abastecimento de 18 milhões de residências por ano;
                        </p><p>
                        Mais de 20 milhões de latas de aço são recicladas por ano e, todas elas, são fabricadas com até 25% de sucata;
                        </p><p>
                        Reciclar as latinhas e transformar em aço gera economia de, 70% de gasto energético de uma siderúrgica, 90% do uso de uma matéria prima virgem, 40% do consumo de água e reduz 76% dos poluentes na água, 86% dos poluentes do ar e de 97% dos resíduos de mineração;
                        </p><p>
                        Se colocadas de ponta a ponta, todas as latas de alumínio reciclado em todo o mundo no ano de 2010 dariam a volta na Terra cerca de 169 vezes;

                          Reciclar latas de alumínio gasta 95% menos energia que produzir uma nova.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>
                      <p>
                        <h4>Papel</h4>
                      Em congruência a dados apresentados por Bioresíduos Ambiental e Karin Lehnardt:
                      </p>
                      <p>
                      Reciclar uma tonelada de papel economiza 2,5 mil litros de petróleo, 26,5 mil litros de água e evita que 17 árvores sejam derrubadas;
                      </p><p>
                      27 mil árvores são derrubadas diariamente para a produção de papel higiênico;
                      </p><p>
                      A reciclagem de papel foi realizada pela primeira vez no Japão, em 1031;
                      </p><p>
                      Se norte-americanos reciclassem apenas 1/10 de seus jornais, mais de 25 milhões de árvores seriam salvas a cada ano;
                      </p><p>
                      São consumidos 70% menos energia e 30% menos água para reciclar o papel do que para fazê-lo a partir da matéria-prima;
                      </p><p>
                      A produção de papel é a terceira que consome mais energia de todas as indústrias, correspondendo a 12% de toda a energia do setor industrial;
                      </p><p>
                      A indústria de celulose e papel utiliza aproximadamente 10 litros de água por folha durante o processamento de matérias-primas;
                      </p><p>
                      Dentro da área de fabricação, a indústria de celulose e papel é o quarto maior emissor de gases de efeito estufa;
                      </p><p>
                      O papel representa um dos principais componentes de resíduos sólidos em aterros, com aproximadamente 16% deles;
                      </p><p>
                      Quando o papel se decompõe em um aterro, libera metano, um gás de efeito estufa muito mais potente que o dióxido de carbono;
                      </p><p>
                      Papel reciclado é diferente do papel ecológico. O papel ecológico é necessariamente aquele que não utiliza cloro como alvejante;
                      </p><p>
                      Para produzir uma tonelada de papel, é necessário aproximadamente 115.000 litros de água;
                      </p><p>
                      A fabricação de papel a partir de resíduos de papel economiza cerca de 85% da água usada na produção normal de papel e reduz a poluição da água em 92%;
                      </p><p>
                      Uma tonelada de papel reciclado economiza aproximadamente 0,4 hectares de floresta;
                      </p><p>
                      Uma família utiliza, em média, 6 árvores de papel por ano;
                      </p><p>
                      45% de todas as cópias impressas e fotocópias acabam no depósito de lixo antes do final do dia em que são produzidas;
                      </p><p>
                      O papel pode ser reciclado até 11 vezes em diferentes tipos de papelão.
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-9 col-sm-7 m-2 text-dicas">
                    <div>

                      <div>
                        <h4>Vidro</h4>
                        <p>
                         De acordo com o que aponta Monik da Silveira Suçuarana, o vidro é infinitamente
                        reciclável, podendo passar pelo processo muitas vezes sem perder suas qualidades.
                        Também é 100% reciclável, ou seja, não há perda de material durante o processo. Para
                        cada tonelada de caco de vidro, uma tonelada de vidro novo é produzida. Porém, para que
                        a mesma quantia seja produzida, são necessárias 1,2 toneladas de matéria-prima.
                        </p>
                        <p>
                        O vidro coletado é encaminhado para as empresas responsáveis pela triagem, limpeza e
                        comercialização de vidros. Nesses locais, o vidro é separado por tipo e cor, e passa por
                        um rigoroso processo de limpeza, através do qual todas as impurezas como tampas, gargalos
                        de metal, papéis, restos de produtos químicos, etc. são removidas.
                        </p>
                        Posteriormente, são triturados e transformados em cacos de tamanho homogêneo, que são
                        aquecidos a temperaturas acima dos 1300°C. O material se funde e, como o vidro derretido
                        é maleável, pode assumir diferentes formas, originando novos produtos.
                        <p>
                        Existem alguns tipos de vidros que não são recicláveis, como os espelhos, vidros de
                        automóveis, vidros de janelas e box de banheiro, lâmpadas e utensílios de vidro temperado.
                        Isso porque geralmente não existem tecnologias suficientes para a reciclagem destes, ou o
                        processo é trabalhoso e desvantajoso economicamente.
                        </p>
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
                      <p>
                        <h4>Plástico</h4>
                      Reciclar uma garrafa de plástico pode economizar energia suficiente para manter uma lâmpada de 600W acesa durante seis horas;
                      </p>
                      <p>
                      Cerca de 46.000 peças de plástico flutuam em cada quilômetro quadrado de nossos oceanos;
                      </p>
                      <p>
                      Em todo o mundo, se utiliza cerca de 1 trilhão de sacolas plásticas, o equivalente a 100 milhões de barris de petróleo;
                      </p><p>
                      Henderson é uma ilha remota do Pacífico Sul onde está localizada a maior densidade de lixo plástico do planeta, estimada em 37,7 milhões de pedaços de plástico;
                      </p><p>
                      Reciclar uma tonelada de plástico economiza 130 kg de petróleo.
                      </p>
                    </div>
                  </div>
                </div>
                    <Garrafa/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
