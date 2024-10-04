import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-home">
      <Link to="/adicionarCanal"> Adicionar canal </Link>
      <Link to="/consultarCanal"> Consultar canal </Link>
    </div>
  )
}

