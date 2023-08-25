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
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login'
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
        <Route path='visualizar/servico/:idServico' element={ <VisualizarServico /> } />
        <Route path='cadastro/usuario' element={ <CadastroUsuario /> } />
        <Route path='cadastro/servico' element={ <CadastroServico /> } />
        <Route path='login' element={ <Login /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

