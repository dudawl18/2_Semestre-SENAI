import { useState } from "react"
import Home from './pages/Home'
import Ajuda from "./pages/Ajuda"
import Contato from './pages/Contato'
import Render from "./pages/Render"
import './App.css'

function App() {
  const [pagina, setPagina] = useState(<Home />)


  function mostrarHome(){
    setPagina(<Home />)
  }
  return (
    <>
      <nav>
       <button onClick={ mostrarHome } >Home</button>
       <button onClick={ () => {setPagina(<Contato />)} }>Contato</button>
       <button onClick={ () => {setPagina(<Ajuda />)} }>Ajuda</button>
       <button onClick={ () => {setPagina(<Render />)} }>Render</button>
      </nav>
      {pagina}
       
    </>
  )
}

export default App
