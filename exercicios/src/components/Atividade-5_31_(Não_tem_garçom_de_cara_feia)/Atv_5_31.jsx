// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from "react"
import "./Atv_5_31.css"

function Atv_5_31() {
    const [resultado, setResultado] = useState()

    function informarCalculo(){
      let salario = Number(prompt("Digite seu salário: "))
      let valorEmprestimo = Number(prompt("Digite o valor de empréstimo desejado: "))
      let numeroPrestacoes = Number(prompt("Digite o número de prestações: "))
      let valorPrestacao = valorEmprestimo / numeroPrestacoes 

      let porcenSalario = (salario * 30) / 100

      if(salario <= 0 || valorEmprestimo <= 0 || numeroPrestacoes <= 0){
        setResultado("O empréstimo não pode ser feito")

      }else if(porcenSalario < valorPrestacao){
        setResultado("Você não pode realizar o empréstimo")

      }else if(porcenSalario >= valorPrestacao){
        setResultado("O empréstimo pode ser realizado")

      }

    }

  return (
    <div className="Garcom-container">
         <h2>Linha de crédito para funcionários</h2>
      <button onClick={informarCalculo}>Informar</button>
      <div>
       {resultado}
      </div>
    </div>
  )
}

export default Atv_5_31
