import { useEffect, useState } from "react" 
import './ItemDetailContainer.css'
// import { getProductById } from "../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) 
    const [cargando, setCargando] = useState(true)
    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            console.log(response)
            const data = response.data()
            const productsAdapted = { id: response.id, ...data}
            setProduct(productsAdapted)
        }).finally(() => {
            setCargando(false)
        })
        // setCargando(true)
        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        //     setCargando(false)
        // })
    }, [productId])

    if (cargando) {
        return ( 
        <div className= "center">
        <h3 className= "center mt-5">Cargando el detalle del producto</h3>
        <Ring  size={50} speed={2} color="black" className= "center"/>
        </div>
        )
    }

    return (
        <div>
            <h1 className= "center">Detalle de producto</h1>
            <ItemDetail key={product.id} {...product} />
        </div>
    )
}

export default ItemDetailContainer