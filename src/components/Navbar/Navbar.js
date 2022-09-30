import logo from '../CartWidget/assets/hardfireLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <img src={logo} className="logoNav" alt='logo' />   
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="py-5 collapse navbar-collapse justify-content-center mb-5" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button className="nav-item nav-link">Hardware</button>
                    <button className="nav-item nav-link">Monitores</button>
                    <button className="nav-item nav-link">Periféricos</button>
                    <button className="nav-item nav-link">Notebooks</button>
                </div>
            </div>
            <CartWidget />   
        </nav >
    )
}

export default NavBar 