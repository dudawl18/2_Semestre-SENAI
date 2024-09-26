import { useState } from 'react'
import './Atv_525.css'

function Atv_525() {
    const [dinheiroTotal, setDinheiroTotal] = useState()
    const [precoProduto, setPrecoProduto] = useState()
    const [total1R, setTotal1R] = useState()
    const [total50Cent, setTotal50Cent] = useState()
    const [total25Cent, setTotal25Cent] = useState()
    const [total10Cent, setTotal10Cent] = useState()
    const [total5Cent, setTotal5Cent] = useState()
    const [orcamento, setOrcamento] = useState('')

    function verificarPorco() {
        let valorProduto = Number(prompt('Digite o valor do produto: '))
        let quant1Real = Number(prompt('Digite a quantidade de moedas de 1 real que há no porquinho: '))
        let quant50Cent = Number(prompt('Digite a quantidade de moedas de 50 centavos que há no porquinho: '))
        let quant25Cent = Number(prompt('Digite a quantidade de moedas de 25 centavos que há no porquinho: '))
        let quant10Cent = Number(prompt('Digite a quantidade de moedas de 10 centavos que há no porquinho: '))
        let quant5Cent = Number(prompt('Digite a quantidade de moedas de 5 centavos que há no porquinho: '))
        let orcamentoUsuario

        //Valor total de cada moeda

        let valorTotal1Real = quant1Real * 1
        let valorTotal50Cent = quant50Cent * 0.50
        let valorTotal25Cent = quant25Cent * 0.25
        let valorTotal10Cent = quant10Cent * 0.10
        let valorTotal5Cent = quant5Cent * 0.05

        let totalDinheiroPorco = valorTotal1Real + valorTotal50Cent + valorTotal25Cent + valorTotal10Cent + valorTotal5Cent

        if (totalDinheiroPorco >= valorProduto) {
            orcamentoUsuario = 'É possível efetuar a compra! :D'
        } else {
            orcamentoUsuario = 'Não é possível efetuar a compra! :('
        }

        setTotal1R(valorTotal1Real)
        setTotal50Cent(valorTotal50Cent)
        setTotal25Cent(valorTotal25Cent)
        setTotal10Cent(valorTotal10Cent)
        setTotal5Cent(valorTotal5Cent)
        setDinheiroTotal(totalDinheiroPorco)
        setOrcamento(orcamentoUsuario)

    }

    return (
        <div className='porco-container'>
            <h2 className="tituloPosicao">Descobrir o valor total que está no cofrinho</h2>
            <div className="botao-container">
                <button onClick={verificarPorco}>Verificar</button>
            </div>
            <div>
                <h3>Valor total de cada moeda</h3>
                <p>Moedas de 1 Real: R${total1R}</p>
                <p>Moedas de 50 centavos: R${total50Cent}</p>
                <p>Moedas de 25 centavos: R${total25Cent}</p>
                <p>Moedas de 10 centavos: R${total10Cent}</p>
                <p>Moedas de 5 centavos: R${total5Cent}</p>
                <h4>Valor Total: R${dinheiroTotal}</h4>
                <h4>{orcamento}</h4>
            </div>

        </div>
    )
}

export default Atv_525
