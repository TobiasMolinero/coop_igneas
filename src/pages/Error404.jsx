import { Link } from 'react-router-dom'
import '../css/Error404.css'

const Error404 = () => {
    return (
        <div className="error404">
            <h1>Error 404</h1>
            <h2>La página que buscas no existe.</h2>
            <p><Link className='link' to={'/'}>Volver a la página principal</Link></p>
        </div>
    )
}

export default Error404
