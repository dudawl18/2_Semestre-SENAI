
import { useState } from "react"
import "./Atv_5_18.css"

function Atv_5_18() {
    const [resultado, setResultado] = useState()

function calcularCorrida(){
   let distanciaCorrida = Number(prompt("Digite a distância da próxima corrida (km): "))
   let velocidadeLuz = 300000000.00
   let tempoCorrida = distanciaCorrida / velocidadeLuz

   setResultado(`O tempo que a irá demorar será de ${tempoCorrida} segundos`)

}

  return (

    <div className='UberUm-container'>
      <h2 className="tituloFont">Tempo da Corrida em Segundos</h2>
      <button onClick={calcularCorrida}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Atv_5_18
