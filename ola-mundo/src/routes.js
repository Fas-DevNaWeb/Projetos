import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {

  return(
    <BrowserRouter>

    <Menu />
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="*" element={<h1>404 - Pagina nao encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
