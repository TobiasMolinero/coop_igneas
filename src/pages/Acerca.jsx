import '../css/Acerca.css'
import Header from '../components/Header'
import Equipo from '../components/Equipo'
import Footer from '../components/Footer'

const Acerca = () => {

  // window.scrollTo(0, 0)

  return (
    <>
      <Header/>
      <section className='banner-acerca'>
        <h2>Creando poderes transformadores del Arte y la Cultura como herramientas para el crecimiento personal, social y artístico.</h2>
      </section>
      <Equipo/>
      <Footer/>
    </>
  )
}

export default Acerca
