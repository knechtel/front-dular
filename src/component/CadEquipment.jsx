import { useRef,useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import Alert from '@mui/material/Alert';
import { CREATE_EQUIPMENT } from "./urls";
const sleep = ms => new Promise(r => setTimeout(r, ms));
export default function CadEquipment({ id }) {
    const [flagAlert, setFlag] = useState(false);
    console.log("compoenten = " + id)

    const inputEquipment = useRef();
    const inputSerial = useRef();
    const inputModel = useRef();
    const inputObs = useRef();
    const inputCostValue = useRef();
    const inputBrand = useRef();
    async function handleClick() {
        setFlag(true)

        console.log('this is:', "Me");
      //  console.log('this is inputEquipment :', inputEquipment.current.value);
        console.log('this is inputAddress:', inputSerial.current.value);
        console.log('this is Phone:', inputModel.current.value);
        console.log('this is CPF:', inputObs.current.value);
        console.log('this is Cyti:', inputCostValue.current.value);
        if(id !== null && id !== '') {
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
                price: inputCostValue.current.value,
                idClient:id
            })
        };
        fetch(CREATE_EQUIPMENT, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
            await sleep(5000)
            setFlag(false);
    }else{
        if(id !== null && id !== '') {
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
                    price: inputCostValue.current.value,
                   
                })
            };
            fetch(CREATE_EQUIPMENT, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data.id));
                await sleep(5000)
                setFlag(false);}}
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
                <td><CurrencyInput
                id="input-example"
                name="input-name"
                ref={inputCostValue}
                defaultValue={100.00}
                decimalsLimit={2}
                fixedDecimalLength={2}
                prefix="R$"
                onValueChange={(value, name, values) => console.log(value, name, values)}/>
                </td>
            </tr>
            <tr>

                <td><input value="Enviar" type="button" onClick={handleClick}></input></td>
            </tr>
        </table>
        {flagAlert &&
            <Alert severity="success">Aparelho cadastrado com sucesso.</Alert>}
    </>
    );
}