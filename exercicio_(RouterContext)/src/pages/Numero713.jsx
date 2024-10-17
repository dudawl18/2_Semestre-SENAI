import { useState } from "react"
import Navbar from "../components/Navbar"


function Numero713() {
  const [inputUmNumero, setInputUmNumero] = useState()
  const [inputDoisNumero, setInputDoisNumero] = useState()
  const [resultadoNumeros, setResultadoNumeros] = useState()

  function analisarNumeros() {
    let max
    let min
    let isContrario = false
    let arrayPares = []

    if (inputUmNumero > inputDoisNumero) {
      inputUmNumero = max
      inputDoisNumero = min
      isContrario = true
    } else {
      inputUmNumero = min
      inputDoisNumero = max
      isContrario = false
    }
    for (let index = min; index < max; index++) {
      if (index % 2 === 0) {
        arrayPares.push(index)
      }
    }
    if(isContrario){
      
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Números Pares</h1>
      <p>Digite um número mínimo em um input e um número superior no outro para descobrir os números pares entre eles.</p>

      <input
        value={inputUmNumero}
        onChange={(event) => setInputUmNumero(event.target.value)}
      /> <br />
      <input
        value={inputDoisNumero}
        onChange={(event) => setInputDoisNumero(event.target.value)}
      />
      <br /><button onClick={analisarNumeros}>Analisar</button>

      <div>
        <p>Números pares entre {inputUmNumero} e {inputDoisNumero}: </p>
      </div>

    </div>
  )
}

export default Numero713
