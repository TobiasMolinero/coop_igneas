import '../css/EntradasRec.css'
import foto from '../assets/fondo.jpg'

const EntradasRec = () => {
  return (
    <section className="entradas_recientes">
        <h2>Entradas Recientes</h2>
        <div className='grid-noticias'>
            <div className='noticia'>
                <img src={foto} alt="foto-noticia" />
                <h4>Noticia 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,</h4>
                <p>28 oct. 2023</p>
            </div>
            <div className='noticia'>
                <img src={foto} alt="foto-noticia" />
                <h4>Noticia 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,</h4>
                <p>28 oct. 2023</p>
            </div>
            <div className='noticia'>
                <img src={foto} alt="foto-noticia" />
                <h4>Noticia 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,</h4>
                <p>28 oct. 2023</p>
            </div>
        </div>
    </section>
  )
}

export default EntradasRec
