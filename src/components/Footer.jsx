import { Link } from "react-router-dom"
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container-info">
                <div className="container-info">
                    <p>Cooperativa de Trabajo I.G.N.E.A.S.</p>
                    <ul>
                        <li>Dirección</li>
                        <li>telefono</li>
                    </ul>
                </div>
                <div className="rutas">
                    <p>Nuestro trabajo</p>
                    <ul>
                        <li><Link className="link" to={'/acerca-de'}>Acerca de</Link></li>
                        <li><Link className="link" to={'/proyectos'}>Proyectos</Link></li>
                        <li><Link className="link" to={'/servicios'}>Servicios</Link></li>
                        <li><Link className="link" to={'/blog'}>Blog</Link></li>
                        <li><Link className="link" to={'/contacto'}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="derechos">
                <p>Desarrollado por <a href="https://tobiasmolinero.github.io/portfolio/" target="_blank" rel="noreferrer">Tobias Molinero</a> &#169; 2023</p>
            </div>
        </footer>
    )
}

export default Footer
