import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numero715() {
    const [inputNumero, setInputNumero] = useState()
    const [verificacao, setVerificacao] = useState()
    const [mostrarResultado, setMostrarResultado] = useState(false)

    function verificarNumeros() {
        let numeroDigitado = parseInt(inputNumero)
        let maiorNumDigitado = 0

        if (numeroDigitado === -1) {
            setMostrarResultado(true)
            return
        }

        if (numeroDigitado > 0) {
            if (numeroDigitado > maiorNumDigitado) {
                numeroDigitado = maiorNumDigitado
                setVerificacao(numeroDigitado)
            }
        } else {
            alert('É necessário que um número inteiro positvo seja digitado')
        }

    }

    

    return (
        <div>
            <Navbar />
            <h1>Maior Número Inteiro Positivo</h1>
            <p>Digite números inteiros e positivos no input abaixo para descobrir qual deles é o maior número</p>
            <p>Obs.: Para encerrar a sequência digitar "-1"</p>

            <input type="number"
                onChange={(event) => setInputNumero(event.target.value)}
            />
            <button onClick={verificarNumeros}>Verificar</button>
            {/* <button onClick={aparecerResultado}>Resultado</button> */}
            <h4>O maior número inteiro positivo é o</h4>
            {mostrarResultado &&
                <div>
                    {verificacao}
                </div>
            }

        </div>
    )
}

export default Numero715
