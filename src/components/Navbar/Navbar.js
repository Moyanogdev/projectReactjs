import logo from './assets/hardfireLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>
                <img src={logo} className="logoNav" alt='logo' /> 
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="py-5 collapse navbar-collapse justify-content-center mb-5" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/category/Hardware'>
                        <button className="nav-item nav-link">Hardware</button>
                    </Link>
                    <Link to='/category/Monitores'>
                        <button className="nav-item nav-link">Monitores</button> 
                    </Link>
                    <Link to='/category/Periféricos'>
                        <button className="nav-item nav-link">Periféricos</button>
                    </Link>
                    <Link to='/category/Notebooks'>
                        <button className="nav-item nav-link">Notebooks</button>
                    </Link>

                </div>
            </div>
            <CartWidget />   
        </nav >
    )
}

export default NavBar 