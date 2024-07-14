import { useRef, useState } from "react";
import CadEquipment from "./CadEquipment";


export default function CadClient() {
    const inputName = useRef();
    const inputAddress = useRef();
    const inputPhone = useRef();
    const inputCpf = useRef();
    const inputCity = useRef();
    const [data, setData] = useState('');
    function handleClick() {


        console.log('this is:', "Me");
        console.log('this is inputName :', inputName.current.value)
        console.log('this is inputAddress:', inputAddress.current.value);
        console.log('this is Phone:', inputPhone.current.value);
        console.log('this is CPF:', inputCpf.current.value);
        console.log('this is Cyti:', inputCity.current.value);
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                name: inputName.current.value,
                email: inputAddress.current.value,
                cpf: inputCpf.current.value,
            })
        };
        fetch('http://localhost:8080/client-create', requestOptions)
            .then(response => response.json())
            .then(data => setData(data.id));

    }
    return (<>
        <br></br><br></br>
        <h2 style={{ 'color': 'white', "background-color": 'black' }} > Cadastro de ordem de serviço: </h2>
        <br></br> <br></br>
        <table>
            <tr>
                <td>Nome</td>
                <td><input type="text" ref={inputName}></input></td>
            </tr>
            <tr>
                <td>Endereço</td>
                <td><input type="text" ref={inputAddress}></input></td>
            </tr>
            <tr>
                <td>Telefone</td>
                <td><input type="text" ref={inputPhone}></input></td>
            </tr>
            <tr>
                <td>CPF</td>
                <td><input type="text" ref={inputCpf}></input></td>
            </tr>
            <tr>
                <td>Cidade</td>
                <td><input type="text" ref={inputCity}></input></td>
            </tr>
            <tr>

                <td><input value="Enviar" onClick={handleClick} type="button"></input></td>
            </tr>
        </table> <br></br> <br></br>
        <CadEquipment id={data} />
    </>
    );
}