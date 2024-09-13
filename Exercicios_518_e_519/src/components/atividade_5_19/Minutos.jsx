import { useState } from "react"
import "./Atv_5_19.css"

function Minutos() {
    const [resultado, setResultado] = useState()

function calcularMinutos(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorridaSeg = distanciaCorrida / velocidadeLuz


    if(tempoCorridaSeg > 60){
      let corridaMinutos = tempoCorridaSeg / 60
      setResultado(`O tempo da corrida em minutos é de ${corridaMinutos.toFixed(2)}`)
    }

}

  return (

    <div className='UberDois-container'>
      <h2 className="tituloFont">Tempo da Corrida em Minutos</h2>
      <button onClick={calcularMinutos}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Minutos
