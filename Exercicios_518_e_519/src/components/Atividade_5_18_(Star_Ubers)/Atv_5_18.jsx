
import { useState } from "react"
import "./Atv_5_18.css"

function Atv_5_18() {
    const [resultado, setResultado] = useState()

  return (

    <div className='Uber-container'>
      <h2>STAR Ubers</h2>
      <button onClick={calcularCorrida}>Calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Atv_5_18
