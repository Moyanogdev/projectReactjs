import logo from './assets/logoFooter.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='container-lg'>
                <div className="row justify-content-center footer py-5">
                    <img src={logo} className="logoFooter py-2" alt='logo Footer' />
                    <p>Hardfire Gamingshop. Todos los derechos reservados.</p>
                    <p>Desarrollado por <a href='#'>Moyanogdev</a></p>
                </div>
            </div>
        </footer>
    )
}



export default Footer