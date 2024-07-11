import { useRef, useState } from "react";

import './App.css'

function DashBoard() {
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

      <p className="read-the-docs">
        Página de Login Dular controle de OS.
      </p>
    </>
  )
}

export default DashBoard
