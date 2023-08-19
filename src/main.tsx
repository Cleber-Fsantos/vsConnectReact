//Importar index.css[Global] 
import './index.css'
//Importar React/React-Dom/React-Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes, BrowserRouter } from "react-router-dom"
//Importar as páginas
import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'
import ListaDevs from './pages/ListaDevs'
import PerfilUsuario from './pages/PerfilUsuario'
//Importar os Componentes
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={ <ListaDevs /> } />
        <Route path='perfil/:idUsuario' element={ <PerfilUsuario /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

