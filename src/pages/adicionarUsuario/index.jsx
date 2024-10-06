import { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdicionarUsuario() {
  const [nome, setNome] = useState("")

  const { id } = useParams()

  async function salvar() {
    let paramCorpo = {
      "nome": nome
    }

    if (id == undefined) {
      const url = 'http://localhost:5050/usuario'
      let resp = await axios.post(url, paramCorpo)

      alert("Usuario adicionado. Id " + resp.data.id)
    } else {
      const url = `http://localhost:5050/usuario/${id}`
      let resp = await axios.put(url, paramCorpo)

      alert("Usuario alterado.")
    }
  }

  async function buscar() {
    const url = `http://localhost:5050/usuario/${id}`;
    let resp = await axios.get(url);
    console.log(resp.data);

    setNome(resp.data.nomeUsuario)
  }

  useEffect(() => {
    if(id != undefined) {
      buscar()
    }
  }, [])

  return (
    <div className="pagina-adicionar-usuario">
      <h1>CADASTRAR USUARIO</h1>

      <div className="form">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
      </div>

      <button onClick={salvar}> SALVAR </button>
    </div>
  );
}
