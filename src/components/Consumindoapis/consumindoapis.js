import { useState } from "react";
import axios from 'axios';
function Consumindoapis(){
    const[buscaUser,setBuscaUser] = useState();
    const api = 'https://api.postmon.com.br/v1/cep/' + buscaUser;
      function buscapis(e){
        e.preventDefault();
        axios.get(api)
        .then(Response => {
            console.log(Response.data);
        }).catch(error => {
            console.log(error);
        })
      }
    return(
        <form>
            <label>Pesquisar usuario:</label>
            <br/>
            <input type="text" value={buscaUser} onChange={(e) => setBuscaUser(e.target.value)}/>
            <br/>
            <button onClick={buscapis}>Pesquisar</button>
        </form>
    )
}
export default Consumindoapis;