import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
<nav>
    <Link to='/'>
    <h1 className='botonEstilo'>Habemus Store</h1>
    </Link>
    <div>
        {/*<Link to='/about' className='botonEstilo'>About</Link>*/}
        <Link to='/category/indumentaria'className='botonEstilo'>Indumentaria</Link>
        {/*<button className='botonEstilo'>Zapatillas</button>*/}
        <Link to='/category/Camiseta'className='botonEstilo'>Camiseta de Futbol</Link>
    <Link to='/category/Botin' className='botonEstilo'>Botines</Link>
    </div>
</nav>
    )
}

export default NavBar