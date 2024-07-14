import { useRef, useState } from "react";


export default function CadEquipment({ id }) {
    console.log("compoenten = " + id)
    const inputEquipment = useRef();
    const inputSerial = useRef();
    const inputModel = useRef();
    const inputObs = useRef();
    const inputCostValue = useRef();
    const inputBrand = useRef();
    function handleClick() {


        console.log('this is:', "Me");
      //  console.log('this is inputEquipment :', inputEquipment.current.value);
        console.log('this is inputAddress:', inputSerial.current.value);
        console.log('this is Phone:', inputModel.current.value);
        console.log('this is CPF:', inputObs.current.value);
        console.log('this is Cyti:', inputCostValue.current.value);
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                brand: inputBrand.current.value,
                model: inputModel.current.value,
                serial: inputSerial.current.value,
                  costValue: inputCostValue.current.value,
            })
        };
        fetch('http://localhost:8080/equipment-create', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));

    }
    return (<>

        <table>
            <tr>
                <td>Aparelho</td>
                <td><input type="text" ref={inputEquipment}></input></td>
            </tr>
            <tr>
            <td>Marca</td>
                <td><input type="text" ref={inputBrand}></input></td>
            </tr>
            <tr>
                <td>Serial</td>
                <td><input type="text" ref={inputSerial} ></input></td>
            </tr>
            <tr>
                <td>Modelo</td>
                <td><input type="text" ref={inputModel}></input></td>
            </tr>
            <tr>
                <td>Obs</td>
                <td><input type="text" ref={inputObs}></input></td>
            </tr>
            <tr>
                <td>preço</td>
                <td><input type="text" ref={inputCostValue}></input></td>
            </tr>
            <tr>

                <td><input value="Enviar" type="button" onClick={handleClick}></input></td>
            </tr>
        </table>
    </>
    );
}