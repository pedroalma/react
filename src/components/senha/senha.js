import './senha.css'
import { useState } from "react";

function Senha(){
    const[nome, setNome] = useState();
    const[senha, setsenha] = useState();
    function enviaNome(e){
        e.preventDefault();
        if((nome === "io") && (senha === "0000")){
         console.log(`seja bem vindo ${nome}`)
        }else{
            console.log("senha errada! (voce esta tentando oque aqui) ")
        }
        // console.log(`${nome}`);
        // console.log(`${senha}`);
    }
    return(
     <>
             <form>
             <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
             <br/>
             <input type="text" value={senha} onChange={(e) => setsenha(e.target.value)}/>
             <button type="submit" onClick={enviaNome}>Enviar</button>
             </form>

     </>
    )
}

export default Senha ;