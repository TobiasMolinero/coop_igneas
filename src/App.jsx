/* eslint-disable no-unused-vars */

import './App.css'
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Error404 from './pages/Error404'
import Prox from './pages/Prox'
import { HashRouter, Routes, Route } from 'react-router-dom' 
import ScrollToTop from './components/scroll/ScrollToTop'
import Blog from './pages/Blog'

function App() {

  return (
    <HashRouter basename='/' hashType="noslash">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/acerca-de' element={<Acerca/>}></Route>
        <Route path='/proyectos' element={<Prox/>}></Route>
        <Route path='/servicios' element={<Prox/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contacto' element={<Prox/>}></Route>
        <Route path='/tienda' element={<Prox/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
