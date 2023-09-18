/* eslint-disable no-unused-vars */
import '../css/Header.css'
import logo from '../assets/redes2.png'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const header = useRef()

  const [headActive, setHeadActive] = useState(false)
  const [abrirMenu, setAbrirMenu] = useState(false)
  const [menuDesplegable, setMenuDesplegable] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
      setHeadActive(true)
    } else {
      setHeadActive(false)
    }
  })

  const abrirCerrarMenu = () => {
    abrirMenu ? setAbrirMenu(false) : setAbrirMenu(true)
    menuDesplegable ? setMenuDesplegable(false) : setMenuDesplegable(true)
  }

  useEffect(() => {
    header.current.style.animation = 'mostrar 1.2s ease-out'
  }, [])

  return (
    <header ref={header} className={headActive ? 'header-active' : 'header'}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" title="Ir a inicio"/>
        </Link>
      </div>
      <nav className='menu'>
        <ul>
            <li><Link className='link' to='/' onClick={abrirCerrarMenu}>Inicio</Link></li>
            <li><Link className='link' to='/acerca-de' onClick={abrirCerrarMenu}>Acerca de</Link></li>
            <li><Link className='link' to='/proyectos' onClick={abrirCerrarMenu}>Proyectos</Link></li>
            <li><Link className='link' to='/servicios' onClick={abrirCerrarMenu}>Servicios</Link></li>
            <li><Link className='link' to='/blog' onClick={abrirCerrarMenu}>Blog</Link></li>
            <li><Link className='link' to='/contacto' onClick={abrirCerrarMenu}>Contacto</Link></li>
            <li><Link className='link' to='/tienda' onClick={abrirCerrarMenu}>Tienda</Link></li>
        </ul>
      </nav>
      <div className="boton-menu">
        <i className={abrirMenu ? 'bi bi-x-lg' : "bi bi-list"} onClick={abrirCerrarMenu}></i>
      </div>
      <div className={menuDesplegable ? 'menu-desplegable_activo' : 'menu-desplegable_inactivo'}>
        <nav>
          <ul>
            <li><Link className='link' to='/'>Inicio</Link></li>
            <li><Link className='link' to='/acerca-de'>Acerca de</Link></li>
            <li><Link className='link' to='/proyectos'>Proyectos</Link></li>
            <li><Link className='link' to='/servicios'>Servicios</Link></li>
            <li><Link className='link' to='/blog'>Blog</Link></li>
            <li><Link className='link' to='/contacto'>Contacto</Link></li>
            <li><Link className='link' to='/tienda'>Tienda</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


{/* <i class="bi bi-x-lg"></i> */}
export default Header
