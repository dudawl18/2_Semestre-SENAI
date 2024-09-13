import { useState } from "react"
import "./Atv_5_19.css"

function Dia() {
    const [resultado, setResultado] = useState()

function calcularDia(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorridaSeg = distanciaCorrida / velocidadeLuz


    if(tempoCorridaSeg > 86400){
      let corridaDia = tempoCorridaSeg / 86400
      setResultado(`O tempo da corrida em Dias é de ${corridaDia.toFixed(4)}`)
    }

}

  return (

    <div className='UberDois-container'>
      <h2 className="tituloFont">Tempo da Corrida em Dias</h2>
      <button onClick={calcularDia}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Dia
