import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./pages/home/App";
import AdicionarCanal from "./pages/adicionarCanal";
import ConsultarCanal from "./pages/consultaCanal";
export default function Navegacao() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App/> } />
          <Route path="/adicionarCanal" element={ <AdicionarCanal/> } />
          <Route path="/adicionarCanal/:id" element={ <AdicionarCanal/> } />
          <Route path="/consultarCanal" element={ <ConsultarCanal/> } />
        </Routes>
    </BrowserRouter>
  )
}