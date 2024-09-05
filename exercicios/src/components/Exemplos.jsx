import { useState } from "react"

function Exemplos() {

    const [resultado, setresultado] = useState(0)

    function aumentar(){
         setresultado(resultado + 1)
    }

    function diminuir(){
        setresultado(resultado - 1)
   }

  return (

    <div>
       <button onClick={aumentar}>+</button>
       {resultado}
       <button onClick={diminuir}>-</button>
    </div>
  )
}

export default Exemplos

 