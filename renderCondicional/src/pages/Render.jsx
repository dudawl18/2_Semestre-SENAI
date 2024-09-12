import { useState } from 'react'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import Login from '../components/Login'
import './Render.css'


function Render() {
   const [adm, setAdm] = useState(true)
   const [idade, setIdade] = useState(0)
   const [usuario, setUsuario] = useState(true)

  return (
    <div className='paginaRender-container'>
      <h1 className='titulosFont'>Render Condicionais</h1>
       <div className='render-container'>
        <button onClick={ () => {setAdm(true)}} >Adm</button>
        <button onClick={ () => {setAdm(false)}} >Não Adm</button>
        { adm && <PainelAdm />}
       </div>

       <div className='render-container'>
        <h2 className='titulosFont'>Idade</h2>
        <button onClick={ () => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={ () => {setIdade(idade+1)}}>+</button>
        { idade>=18 && <ProdutosParaMaiores /> }
       </div>

       <div className='render-container'>
       <button onClick={ () => {setUsuario(true)}}>Logar</button>
       <button onClick={ () => {setUsuario(false)}}>Logout</button>
        { usuario ? <UsuarioLogado /> : <Login /> }
       </div>

    </div>
  )
}

export default Render
