import Atv_5_18 from "./components/Atividade_5_18_(Star_Ubers)/Atv_5_18"
import "./App.css"
import Minutos from "./components/atividade_5_19/Minutos"
import Horas from "./components/atividade_5_19/Horas"
import Dia from "./components/atividade_5_19/Dia"
import Meses from "./components/atividade_5_19/Meses"
import Anos from "./components/atividade_5_19/Anos"

function App() {

  return (
    <>
     <div>
     <h1 className="tituloPosicao">STAR Ubers</h1>
    </div>
    
    <Atv_5_18 />
    <Minutos />
    <Horas />
    <Dia />
    <Meses />
    <Anos />

    </>
  )
}

export default App
