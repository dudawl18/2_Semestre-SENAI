import { useState } from "react"
import "./Atv_5_19.css"

function Anos() {
    const [resultado, setResultado] = useState()

function calcularAnos(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorridaSeg = distanciaCorrida / velocidadeLuz


    if(tempoCorridaSeg > 31536000){
      let corridaAnos = tempoCorridaSeg / 31536000
      setResultado(`O tempo da corrida em Anos é de ${corridaAnos.toFixed(4)}`)
    }

}

  return (

    <div className='UberDois-container'>
      <h2 className="tituloFont">Tempo da Corrida em Anos</h2>
      <button onClick={calcularAnos}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Anos
