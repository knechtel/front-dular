import { useRef, useState } from "react";

import './App.css'

function Login() {
  const [val, setVal] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const inputLogin = useRef();
  const inputPassword = useRef();

  function handleClick() {
    setLogin(inputLogin.current.value);
    setPassword(inputPassword.current.value);
    
    console.log('this is:', "Me");
    console.log('this is login :',inputLogin.current.value)
    console.log('this is password:',inputPassword.current.value);
  }



  return (
    <>
      <table>
        <tr>
          <td>Login</td>
          <td><input type="text" ref={inputLogin}/></td>
        </tr>
        <tr>
          <td>Senha</td>
          <td><input type="password" ref={inputPassword}/></td>
        </tr>
        <button onClick={handleClick} type="button">Enviar</button>
      </table>
      <p className="read-the-docs">
        Página de Login Dular controle de OS.
      </p>
    </>
  )
}

export default Login