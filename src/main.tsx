import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaServicos from './pages/ListaServicos'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    {/* < ListaServicos /> */}
    {/* <Footer /> */}

  </React.StrictMode>,
)


