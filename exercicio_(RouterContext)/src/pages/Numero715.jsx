import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Numero715() {
    const [inputNumero, setInputNumero] = useState('')
    const [listaNuns, setListaNuns] = useState([])
    const [result, setResult] = useState(null)
    const [controle, setControle] = useState(false)

    function verificarNumeros() {
        const numero = parseInt(inputNumero, 10)

        if (numero > 0) {
            setListaNuns([...listaNuns, numero]) // Adiciona o número na listaNuns

            if (listaNuns.length === 0 || numero > Math.max(...listaNuns)) {  // Atualiza o maior número
                setResult(numero)
            } else {
                setResult(Math.max(...listaNuns))
            }
        } else if (numero === -1) {
            setControle(true)
        } else {
            alert('É necessário que um número inteiro positivo seja digitado')
        }

        setInputNumero('')
    }

    return (
        <div>
            <Navbar />
            <h1>Maior Número Inteiro Positivo</h1>
            <p>Digite números inteiros e positivos no input abaixo para descobrir qual deles é o maior número</p>
            <p>Obs.: Para encerrar a sequência digitar "-1"</p>

            <input
                type="number"
                onChange={(event) => setInputNumero(event.target.value)}
                value={inputNumero}
            />
            <button onClick={verificarNumeros}>Enviar Número</button>

            <h4>O maior número inteiro positivo é:</h4>
            {controle && (
                <div>
                    {result}
                </div>
            )}
        </div>
    );
}

export default Numero715;
