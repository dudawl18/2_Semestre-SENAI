// 5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.
import { useState } from "react"
import "./Atv_5_29.css"

function Atv_5_29() {
  const [resultado, setResultado] = useState()

    function processarNumero(){
      let numero = Number(prompt("Digite um número: "))
      if(numero > 0){
        setResultado('Número Positivo')

      }else if(numero < 0){
        setResultado('Número Negativo')

      }else{
        setResultado('Número Nulo')
      }

    }
    
  return (
    <div className="Copo-container">
      <h2>Copo meio cheio. Positivo, negativo ou nulo</h2>
      <div className="botao-container">
       <button onClick={processarNumero}>Processar</button>
      </div>  
    <div>
       {resultado}
      </div>
    </div>
  )
}

export default Atv_5_29
