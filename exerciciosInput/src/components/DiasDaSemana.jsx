import { useState } from "react"
import "./DiasDaSemana.css"

function DiasDaSemana() {
  const[diaSemana, setDiaSemana] = useState()

  return (

    <div className="semana-container">
      <h1>Dia da semana</h1>
      <h4>Insira um número de 1 a 7 para corresponder a um dia da semana (Domingo é o primeiro dia)</h4>

      <input type="number" 
        value={diaSemana}
        onChange={(event) => { setDiaSemana(event.target.value) }}
      />

    </div>
  )
}

export default DiasDaSemana
