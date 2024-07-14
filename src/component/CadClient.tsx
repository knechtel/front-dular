import { useRef, useState } from "react";
import CadEquipment from "./CadEquipment";
import { CREATE_CLIENT } from './urls'
import Alert from '@mui/material/Alert';


export default function CadClient() {

    const [flagAlert, setFlag] = useState(false);
    const inputName = useRef();
    const inputAddress = useRef();
    const inputPhone = useRef();
    const inputCpf = useRef();
    const inputCity = useRef();
    const [data, setData] = useState('');
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function handleClick() {
        setFlag(true)



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
        fetch(CREATE_CLIENT, requestOptions)
            .then(response => response.json())
            .then(data => setData(data.id));
        await sleep(5000)
        setFlag(false);

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
        </table>
        {flagAlert &&
            <Alert severity="success">Usuário cadastrado com sucesso.</Alert>}

        <CadEquipment id={data} />
    </>
    );
}