import '../css/Prox.css'
import { Link } from 'react-router-dom'
import arquitecto from '../assets/arquitecto.png'

const Prox = () => {
    return (
        <div className="prox">
            <h1>Estamos trabajando en ello</h1>
            <div>
                <img src={arquitecto} alt="" />
            </div>
            <h2>Disponible Próximamente...</h2>
            <p><Link className='link' to={'/'}>Volver a la página principal</Link></p>
        </div>
    )
}

export default Prox
