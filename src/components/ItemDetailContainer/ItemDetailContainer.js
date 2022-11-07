import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import useAsync from '../Hooks/useAsync.js'
import { getProductById } from '../../services/firebase/firestore/products'


const ItemDetailContainer = () => {
    
    const { productId } = useParams()
    const productsAdapterFirestore = () => getProductById(productId)

    const {data:products, error, cargando} = useAsync(productsAdapterFirestore, [productId])
    const navigate = useNavigate()

    if (cargando) {
        return ( 
        <div className= "center">
        <h3 className= "center mt-5">Cargando el detalle del producto</h3>
        <Ring  size={50} speed={2} color="black" className= "center"/>
        </div>
        )
    }

    if (error) {
        return (
            <div className='center'>
                <h1> Lo sentimos, ha ocurrido un error</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 className= "center">Detalle de producto</h1>
            <ItemDetail key={products.id} {...products} />
            <div>
            <button className="center" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    )
}

export default ItemDetailContainer