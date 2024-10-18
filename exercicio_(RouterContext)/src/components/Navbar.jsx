import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/dragoes" >Dia da Semana</Link>
        <Link to="/exercicio712">Exercício 7.12</Link>
        <Link to="/numPares" >Exercício 7.13</Link>
        <Link to="/maiorNumIntPosit">Exercício 7.15</Link>
    </nav>
  )
}

export default Navbar
