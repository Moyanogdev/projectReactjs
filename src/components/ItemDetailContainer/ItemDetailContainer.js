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
        <div className= "center py-5 mb-5">
            <h3 className= "center py-5 my-5 cargando">CARGANDO DETALLE DE PRODUCTO</h3>
            <Ring  size={50} speed={2} color="black" className= "center"/>
        </div>
        )
    }

    if (error) {
        return (
            <div className='center py-5 my-5'>
                <h1>LO SENTIMOS, HA OCURRIDO UN ERROR</h1>
            </div>
        )
    }
    console.log(products);
    return (
        
        <div className='container-lg'>
            <h1 className= "center py-5">Detalle de producto</h1>
            <ItemDetail key={products.id} {...products} />
            <div className='justify-content-center py-5'>
                <button onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    )
}

export default ItemDetailContainer