import { useState } from 'react'
import './Atv_525.css'

function Atv_525() {
   const [dinheiroTotal, setDinheiroTotal] = useState(0)

   function verificarPorco(){}

    return (
        <div className='porco-container'>
            <h2 className="tituloPosicao">Descobrir o valor total que está no cofrinho</h2>
            <div className="botao-container">
                <button onClick={verificarPorco}>Verificar</button>
            </div>

        </div>
    )
}

export default Atv_525
