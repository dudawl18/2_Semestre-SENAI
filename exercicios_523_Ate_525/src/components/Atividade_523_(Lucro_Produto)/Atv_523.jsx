// 5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
// 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
// será de 30%. Faça um programa que entre com o valor do produto e mostre 
// o valor de venda.

import { useState } from "react"
import './Atv_523.css'


function Atv_523() {
  const [resultado, setResultado] = useState()

  function mostrarLucro() {
    let valorProduto = Number(prompt('Digite o valor do produto:'))
    let valorVenda
    let lucro = 0

    if (valorProduto < 20) {
      lucro = 0.45  //   0.45 = 45% / 100
      valorVenda = (lucro * valorProduto) + valorProduto

    } else {
      lucro = 0.30   //   0.30 = 30% / 100
      valorVenda = (lucro * valorProduto) + valorProduto
    }

    setResultado(valorVenda)

  }

  return (
    <div className="produto-container">
      <h2 className="tituloPosicao">Verificação de lucro de produtos</h2>
      <div className="botao-container">
        <button onClick={mostrarLucro}>Mostrar</button>
      </div>
      <div className="resultado-container">
        <h4>O valor de venda é de: </h4> <p>R$</p>{resultado}
      </div>

    </div>
  )
}

export default Atv_523
