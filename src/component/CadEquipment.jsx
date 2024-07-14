import { useRef, useState } from "react";


export default function CadEquipment() {
    const inputEquipment = useRef();
    const inputSerial = useRef();
    const inputModel = useRef();
    const inputObs = useRef();
    const inputCostValue = useRef();
    function handleClick() {


        console.log('this is:', "Me");
        console.log('this is inputName :', inputName.current.value)
        console.log('this is inputAddress:', inputAddress.current.value);
        console.log('this is Phone:', inputPhone.current.value);
        console.log('this is CPF:', inputCpf.current.value);
        console.log('this is Cyti:', inputCity.current.value);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        //     body: JSON.stringify({
        //         name: inputName.current.value,
        //         email: inputAddress.current.value,
        //         cpf: inputCpf.current.value,
        //     })
        // };
        // fetch('http://localhost:8080/client-create', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data.id));

    }
    return (<>

        <table>
            <tr>
                <td>Aparelho</td>
                <td><input type="text" rel={inputEquipment}></input></td>
            </tr>
            <tr>
                <td>Serial</td>
                <td><input type="text" rel={inputSerial} ></input></td>
            </tr>
            <tr>
                <td>Modelo</td>
                <td><input type="text" rel={inputModel}></input></td>
            </tr>
            <tr>
                <td>Obs</td>
                <td><input type="text" rel={inputObs}></input></td>
            </tr>
            <tr>
                <td>preço</td>
                <td><input type="text" rel={inputCostValue}></input></td>
            </tr>
            <tr>

                <td><input value="Enviar" type="button" onClick={handleClick}></input></td>
            </tr>
        </table>
    </>
    );
}