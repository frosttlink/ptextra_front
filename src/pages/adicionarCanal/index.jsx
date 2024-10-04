import { useEffect, useState} from "react";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function AdicionarCanal() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState(0)
  const [aberto, setAberto] = useState(false)


  const { id } = useParams()

  async function salvar() {
    let paramCorpo = {
      "nome": nome,
      "numero": numero,
      "aberto": aberto
    }

    if (id == undefined) {
      const url = 'http://localhost:5050/canal'
      let resp = await axios.post(url, paramCorpo)

      alert("Canal adicionado. Id " + resp.data.id)
    } else {
      const url = `http://localhost:5050/canal/${id}`
      let resp = await axios.put(url, paramCorpo)

      alert("Canal alterado.")
    }
  }

async function buscar() {
  const url = `http://localhost:5050/canal/${id}`;
  let resp = await axios.get(url);
  console.log(resp.data);

  setNome(resp.data.nomeCanal);
  setNumero(resp.data.numeroCanal);
  setAberto(resp.data.canalAberto);
}
 
useEffect(() => {
  if (id != undefined) {
    buscar()
  }
}, [])



  return (
      <div className="pagina-adicionar-canal">
        <h1>CADASTRAR</h1>

          <div className='form'>
            <div>
                <label>Nome:</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>Numero:</label>
                <input type='number' value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>
            <div>
                <label>Aberto:</label>
                <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
            </div>
        </div>

        <button onClick={salvar}> SALVAR </button>
    </div>
  );
}
