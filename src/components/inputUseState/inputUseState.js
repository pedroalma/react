import axios from 'axios';
import './inpu.css';
import { useState } from 'react';
function InputUseState () {  
    const [login,setLogin] = useState();
    const [senha,setSenha] = useState();
    const [vLogin,setvlogin] = useState();
    function verificaLogin(e){
              e.preventDefault();
           if(login.toLowerCase() === 'io' && senha === '0000'){
            setvlogin(true)
           }else{
                  if(login.toLowerCase() !== 'io' && senha === '0000'){
                    setLogin('Login incorreto!');
                  }else if (login.toLowerCase() === 'io' && senha !== '0000'){
                    setvlogin('senha incoreta');  
                }else{
                    setvlogin("Logi e senha incoretos !");
                }
            
           }
    }
    return(
       <form>
         <label>login:</label>
         <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
         <p>{login}</p>
         <br/>
         <label>Senha:</label>
         <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
         <br/>
         <button onClick={verificaLogin}>logar</button>
         {
            vLogin === true 
            ? <p>Logado com sucesso!</p>
            : ''
         }
         {
            vLogin !== true 
            ? <p>{vLogin}</p>
            : ''
         }
       </form>
    )
}
export default InputUseState;