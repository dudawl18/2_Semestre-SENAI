import { useState } from 'react'

import './App.css'
import Maior_Idade from './components/Maior_Idade'
import Menor_Idade from './components/Menor_Idade'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)

  function processarIdade() {
     // Maior de idade
    if (inputIdade >= 18) {
      setMaior(true)
      setMenor(false)
     // Menor de idade
    } else {
      setMenor(true)
      setMaior(false)
    }

  }

  return (
    <>
      <h1>Input</h1>

      Idade:
      <input type="number" className='formularios'
        value={inputIdade}
        onChange={(event) => { setInputIdade(event.target.value) }}
      />
      <br /><br />
      <button onClick={processarIdade}>Processar idade</button>
      {/* {inputIdade} */}
      { maior && <Maior_Idade /> }
      { menor && <Menor_Idade /> }

    </>
  )
}

export default App
