import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"



function App() {
 
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div><h1>404 - PAGINA NÃO ENCONTRADA  : ( </h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
