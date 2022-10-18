import './pageStyle.css'
function Home() {
	return (
		<div className="Home">
      <div className='Presentacion'>
        
        <div className='Presentacion_img'>
          <img src='img/backgroudImg.jpg'/>
        
        </div>
        <div className='Presentacion_text'>
          <h2>Milanesas Familiares</h2>
        </div>
      </div>
      <section className='sec_excibicion'>
        <article>
          <img src='img/milapollo1.jpg' />
          <p>
            Milanesa de Pollo
          </p>
        </article>

        <article>
        <img src='img/milacerdo1.jpg' />
          <p>
            Milanesa de Cerdo
          </p>
        </article>
        <article>

        <img src='img/milacarne1.jpg' />
          <p>
            Milanesa de Cerdo
          </p>
        </article>
      </section>
		</div>
	);
}

export {Home};