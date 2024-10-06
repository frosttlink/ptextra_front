import { useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ConsultarCanal() {
  const [canal, setCanal] = useState([]);

  async function buscar() {
    const url = "http://localhost:5050/canal";
    let resp = await axios.get(url);
    console.log(resp.data);
    setCanal(resp.data);
  }

  return (
    <div className="pagina-consulta-canal">
      <h1>Consultar Canal</h1>

      <button onClick={buscar}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Numero</th>
            <th>Aberto</th>
          </tr>
        </thead>

        <tbody>
          {canal.map((item) => (
            <tr>
              <td>{item.idCanal}</td>
              <td>{item.nomeCanal}</td>
              <td>{item.numeroCanal}</td>
              <td>{item.canalAberto ? "Sim" : "Não"}</td>
              <td> <Link to={'/adicionarCanal/' + item.idCanal} className="alterar-link"> Alterar </Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
