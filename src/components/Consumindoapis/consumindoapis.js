import { useState } from "react";
import axios from 'axios';
function Consumindoapis(){
    const[busCep,setBusCep] = useState();
    const[ data , setData] = useState([]);
    const api = `https://viacep.com.br/ws/${busCep}/json`; 
      function buscapis(e){
        e.preventDefault();
        axios.get(api)
        .then(Response => {
            if(Response.data.erro == true){
                setData([])
            }else{
                setData(Response.data)
            }
        }).catch(error => {
            console.log(error);
        })
      }
    return(
        <>
        <form>
            <label>Pesquisar cep:</label>
            <br/>
            <input type="text" value={busCep} onChange={(e) => setBusCep(e.target.value)}/>
            <br/>
            <button onClick={buscapis}>Pesquisar</button>
        </form>
        <p>
        { data.length === 0 ? 'digite um cep para buscar'
        :
        `${data.cep} 
                   ${data.bairro} 
                                 ${data.localidade} 
                                                   ${data.logradouro}
            `}
        </p>
        </>
    )
}
export default Consumindoapis;