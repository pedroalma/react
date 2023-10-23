import { useState } from "react";

function Eventos() {
    const textop = useState('Botao clicado');

    const [conta, setConta] = useState(0);
    const [nome, setnome] = useState();

    function enviaNome(e){
        e.preventDefault();
        console.log(`Nome ${nome} enviado com sucesso!`);
    }
   

    return(
        <>
            <p>o botao foi clicado {conta}</p>
             <button onClick={() => setConta(conta + 1)}>Clique aqui!</button>
             <form>
             <input type="text" value={nome} onChange={(e) => setnome(e.target.value)}/>
             <br/>
             <button type="submit" onClick={enviaNome}>Enviar</button>
             <p>O nome é: {nome}</p>
             </form>
        </>
   
    )
}
export default Eventos;