// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from "react"
import "./Atv_5_31.css"
import RelatorioEmprestimo from './RelatorioEmprestimo'

function Atv_5_31_input() {
  const [salarioInput, setSalarioInput] = useState('')
  const [emprestimoInput, setEmprestimoInput] = useState('')
  const [prestacoesInput, setPrestacoesInput] = useState('')
  const [stateRelatorio, setStateRelatorio] = useState()

  function informarCalculo() {
    let porcenSalario = (salarioInput * 30) / 100
    let valorPrestacao = emprestimoInput / prestacoesInput



    if (valorPrestacao < porcenSalario) {
      let infosRelatorio = {
        situacao: "aprovado",
        maxPrestacao: porcenSalario,
        prestacao: valorPrestacao,
        emprestimo: emprestimoInput,
        prestacoes: prestacoesInput
      }
      setStateRelatorio(infosRelatorio)

    } else {
      let infosRelatorio = {
        situacao: "reprovado",
        maxPrestacao: porcenSalario,
        prestacao: valorPrestacao,
        emprestimo: emprestimoInput,
        prestacoes: prestacoesInput
      }
      setStateRelatorio(infosRelatorio)
    }
  }

  return (
    <div className="Garcom-container">
      <h2>Linha de crédito para funcionários (inputs)</h2>
      <div className="campoInformacoes-container">
        <label htmlFor="inpSalario">Salário</label>
        <input type="text" id="inpSalario"
          value={salarioInput}
          onChange={(event) => setSalarioInput(event.target.value)} />

        <label htmlFor="inpEmprestimo">Empréstimo</label>
        <input type="text" id="inpEmprestimo"
          value={emprestimoInput}
          onChange={(event) => setEmprestimoInput(event.target.value)} />

        <label htmlFor="inpPrestacoes">Quantidade de prestações</label>
        <input type="text" id="inpPrestacoes"
          value={prestacoesInput}
          onChange={(event) => setPrestacoesInput(event.target.value)} />
      </div>
      <div className="botao-container">
        <button className="botao-container" onClick={informarCalculo}>Informar</button>
      </div>

      {stateRelatorio &&
        <RelatorioEmprestimo infos={stateRelatorio} />
      }

    </div>
  )
}

export default Atv_5_31_input
