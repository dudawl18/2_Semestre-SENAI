import { useState } from "react"
import "./Atv_5_19.css"

function Horas() {
    const [resultado, setResultado] = useState()

function calcularHoras(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorridaSeg = distanciaCorrida / velocidadeLuz


    if(tempoCorridaSeg > 3600){
      let corridaHoras = tempoCorridaSeg / 3600
      setResultado(`O tempo da corrida em Horas é de ${corridaHoras.toFixed(4)}`)
    }

}

  return (

    <div className='UberDois-container'>
      <h2 className="tituloFont">Tempo da Corrida em Horas</h2>
      <button onClick={calcularHoras}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Horas
