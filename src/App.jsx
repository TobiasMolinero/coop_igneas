/* eslint-disable no-unused-vars */

import './App.css'
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Error404 from './pages/Error404'
import { HashRouter, Routes, Route } from 'react-router-dom' 
import Prox from './pages/Prox'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/acerca-de' element={<Acerca/>}></Route>
        <Route path='/prox' element={<Prox/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
