import '../css/BotonUp.css'
import { useState } from 'react'

const BotonUp = () => {

    const [boton, setBoton] = useState()

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 400){
            setBoton(true)
          } else {
            setBoton(false)
          }
    })

    const irArriba = () => {
        window.scrollTo(0, 0)
    }


    return (
        <>
            <button className='boton-up' title='Ir arriba' onClick={irArriba} hidden={boton ? false : true}>
                <i className="bi bi-arrow-up"></i>
            </button>
        </>
    )
}

export default BotonUp