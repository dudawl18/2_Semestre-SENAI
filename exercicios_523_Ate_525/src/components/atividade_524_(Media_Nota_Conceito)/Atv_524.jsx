import { useState } from "react"
import './Atv_524.css'

function Atv_524() {
    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [media, setMedia] = useState()
    const [conceito, setConceito] = useState('')

    function calcularResultado() {
        let notaUm = Number(prompt('Digite a sua primeira nota: '))
        let notaDois = Number(prompt('Digite a sua segunda nota: '))
        let mediaNotas = (notaUm + notaDois) / 2
        let conceitoNota

        if (mediaNotas >= 9 && mediaNotas <= 10) {
            conceitoNota = 'A'

        } else if (mediaNotas >= 7.5 && mediaNotas < 9) {
            conceitoNota = 'B'

        } else if (mediaNotas >= 6 && mediaNotas < 7.5) {
            conceitoNota = 'C'

        } else if (mediaNotas >= 4 && mediaNotas < 6) {
            conceitoNota = 'D'

        } else if (mediaNotas >= 0 && mediaNotas < 4) {
            conceitoNota = 'E'
        }else{
            alert('Nota inválida! Digite uma nota existente')
        }

        setNota1(notaUm)
        setNota2(notaDois)
        setMedia(mediaNotas)
        setConceito(conceitoNota)

    }

    return (
        <div className="notas-container">
            <h2 className="tituloPosicao">Calcular a média e conceito</h2>
            <div className="botao-container">
                <button onClick={calcularResultado}>Calcular</button>
            </div>
            <div>
                <h4>A notas digitadas foram: </h4>
                <p>Primeira nota: {nota1}</p>
                <p>Segunda nota: {nota2}</p> 
                <h4>A média atingida foi: {media}</h4>
                <h4>O conceito atintigo foi: {conceito}</h4>
            </div>

        </div>
    )
}

export default Atv_524
