import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import FormularioCliente from '../Form/Form'
import Swal from "sweetalert2";

const Checkout = () => {
    const [loading, setCargando] = useState(false)
    const [personalData, setPersonalData] = useState(false)
    const [datosCompra, setDatosCompra] = useState({})


    const completoDatos = (name, surname, address, phone, email) => {
        setDatosCompra({ name, surname, address, phone, email })
        setPersonalData(true)
    }

    const { cart, totalQuantity, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setCargando(true)

        try {
            const objOrder = {
                buyer: datosCompra,
                items: cart,
                total: totalQuantity
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
            
            docs.forEach(doc => {
                
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                 Swal.fire({
                     title: "Muchas Gracias por tu compra",
                     text:`orden n°: ${orderAdded.id}`,
                     icon: "success",
                     buttons: true,
                     dangerMode: true,
                
                 })
            } else {
                 Swal.fire({
                     title: "Lo sentimos, el producto seleccionado no se encuentra disponible",
                     icon: "warning",
                     buttons: true,
                     dangerMode: true,
                
                 })
            }


        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }

    }

    if (loading) {
        return <h1>Se esta procesando su pedido...</h1>
    }

    return (
        <div>
            {}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <FormularioCliente completoDatos={completoDatos} />
            {personalData
                ? <button onClick={createOrder}>Generar Pedido</button>
                : ""}
        </div>
    )
}

export default Checkout