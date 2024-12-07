// root é onde fica o componente principal da aplicação
//React.StrictMode vai ajudar a previnir erro te ajuda indicando o que esta errado no código mostra no console.
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


