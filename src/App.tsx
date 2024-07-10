

import './App.css'

function App() {
  function handleClick() {
    console.log('this is:', "Me");
  }



  return (
    <>
      <table>
        <tr>
          <td>Login</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>Senha</td>
          <td><input type="password" /></td>
        </tr>
        <button onClick={handleClick} type="button">Enviar</button>
      </table>
      <p className="read-the-docs">
        Página de Login Dular controle de OS.
      </p>
    </>
  )
}

export default App
