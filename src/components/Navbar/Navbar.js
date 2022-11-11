import logo from './assets/hardfireLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'


const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'categories')
        getDocs(collectionRef).then(response => {
            const categoriesAdapter = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                const name = doc.name
                return { id,name, ...data}
            })
            setCategories(categoriesAdapter)
        })
    }, [])

    return (
        <nav className="navbar navbar-expand-lg">
            <Link to='/'>
                <img src={logo} className="logoNav py-1" alt='logo' /> 
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="py-5 collapse navbar-collapse justify-content-center mb-5" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {
                        categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.name}`} className={'nav-item'}>{cat.name} </Link>
                        ))
                    }
                </div>
            </div>
            <CartWidget />   
        </nav >
    )
}

export default NavBar 