import { useState } from "react"
import "./Atv_5_19.css"

function Meses() {
    const [resultado, setResultado] = useState()

function calcularMeses(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorridaSeg = distanciaCorrida / velocidadeLuz


    if(tempoCorridaSeg > 2592000){
      let corridaMeses = tempoCorridaSeg / 2592000
      setResultado(`O tempo da corrida em Meses é de ${corridaMeses.toFixed(4)}`)
    }

}

  return (

    <div className='UberDois-container'>
      <h2 className="tituloFont">Tempo da Corrida em Meses</h2>
      <button onClick={calcularMeses}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Meses
