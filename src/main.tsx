import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'

import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListaServicos />
  </React.StrictMode>,
)

