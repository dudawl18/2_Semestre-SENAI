import { useState } from "react"
import Navbar from "../components/Navbar"


function Numero713() {
  const [inputUmNumero, setInputUmNumero] = useState('')
  const [inputDoisNumero, setInputDoisNumero] = useState('')
  const [resultadoNumeros, setResultadoNumeros] = useState([])

  function analisarNumeros() {
    let primeiroNum = Number(inputUmNumero)
    let segundoNum = Number(inputDoisNumero)
    let max
    let min
    let arrayPares = []

    if (primeiroNum > segundoNum) {
      max = primeiroNum
      min = segundoNum
    } else {
      min = primeiroNum
      max = segundoNum
    }
    for (let i = min + 1; i < max; i++) {
      if (i % 2 === 0) {
        arrayPares.push(i)
      }
    }

    setResultadoNumeros(arrayPares)
  }

  return (
    <div>
      <Navbar />
      <h1>Números Pares</h1>
      <p>Digite um número mínimo em um input e um número superior no outro para descobrir os números pares entre eles.</p>

      <input type="number"
        value={inputUmNumero}
        onChange={(event) => setInputUmNumero(event.target.value)}
      /> <br />
      <input type="number"
        value={inputDoisNumero}
        onChange={(event) => setInputDoisNumero(event.target.value)}
      />
      <br /><button onClick={analisarNumeros}>Analisar</button>

      <div>
        <p>Números pares entre {inputUmNumero} e {inputDoisNumero}: {resultadoNumeros.join(", ")}</p>
      </div>

    </div>
  )
}

export default Numero713
