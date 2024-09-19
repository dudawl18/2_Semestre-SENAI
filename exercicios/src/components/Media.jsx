import { useState } from "react"
import "./Media.css"

function Media() {
  const [resultado, setResultado] = useState()

  function calcularMedia() {
    let notaUm = Number(prompt("Digite o 1° número: "))
    let notaDois = Number(prompt("Digite o 2° número: "))
    let media = (notaUm + notaDois) / 2
    setResultado(media)

  }

  return (

    <div className="Media-container">
      <h2>Exercício para calcular a média de 2 números</h2>
      <div className="botao-container">
        <button onClick={calcularMedia}>Calcular</button>
      </div>
      <div>
        <br /> Média: {resultado}
      </div>

    </div>
  )
}

export default Media
