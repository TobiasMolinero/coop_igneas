import '../css/Header.css'
import logo from '../assets/redes2.png'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const header = useRef()

  const [headActive, setHeadActive] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
      setHeadActive(true)
    } else {
      setHeadActive(false)
    }
  })

  useEffect(() => {
    header.current.style.animation = 'mostrar 1.3s ease-in'
  }, [])

  return (
    <header ref={header} className={headActive ? 'header-active' : 'header'}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
            <li><Link className='link' to='/acerca-de'>Acerca de</Link></li>
            <li><Link className='link' to='/prox'>Proyectos</Link></li>
            <li><Link className='link' to='/prox'>Servicios</Link></li>
            <li><Link className='link' to='/prox'>Blog</Link></li>
            <li><Link className='link' to='/prox'>Contacto</Link></li>
            <li><Link className='link' to='/prox'>Tienda</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
