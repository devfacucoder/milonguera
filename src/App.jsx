import Header from "./componets/Header";
import "./App.css";
import { AiOutlineArrowDown } from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="sec_presentacion">
          <div className="presentacion">
            <div className="presentacion_info">
              <p>
                Vendemos Las Mejores Milanesas de San Juan. Caseras Hechas en el
                Momento con Gran Variedad De tipos
              </p>
            </div>

            <div className="box_img_presentacion">
              <img src="img/milapollo1.jpg" alt="" />
            </div>
            <div className="presentacion_indicador">
              <p>
                <a href="#footer">Menu</a>
              </p>
              -<AiOutlineArrowDown className="indicador" />-
            </div>
          </div>
        </section>
        <section>
          <div id="Menu" className="menu">
            <div className="menu_articles">
              <article className="article_color_val1">
                <div className="box_article_till ">
                  <h3>Milas De Cerdo</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>


                </div>

                <div className="box_img">
                  <img src="img/milacerdo1.jpg" />
                </div>
              </article>
              <article className="article_color_val2">
                <div className="box_article_till ">

                  <h3>Milas De Cerdo</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                </div>

                <div className="box_img">
                  <img src="img/milacarne1.jpg" />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">hola</footer>
    </div>
  );
}

export default App;
