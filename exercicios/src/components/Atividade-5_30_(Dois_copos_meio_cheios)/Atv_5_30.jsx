// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import { useState } from 'react'
import "./Atv_5_30.css"

function Atv_5_30() {
   const [resultado, setResultado] = useState()
  
    function realizarNumero(){
      let numero = Number(prompt("Digite um número: "))
      if(numero % 2 === 0 && numero > 0){
       setResultado('O número é par e positivo')

      }else if(numero % 2 != 0 && numero > 0){
        setResultado('O numero não é par mas é positivo')

      }else if(numero % 2 === 0 && numero < 0){
        setResultado('O numero é par mas não é positivo')

      }else{
        setResultado('O número não é positivo nem par')
      }

    }

  return (
    <div className='Doiscopo-container'>
       <h2>Dois copos meio cheios. Positivo e par</h2>
       <div className="botao-container">
      <button onClick={realizarNumero}>Realizar</button>
      </div>
      <div>
       {resultado}
      </div>
    </div>
  )
}

export default Atv_5_30
