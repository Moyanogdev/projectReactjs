import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from ".."
import {getDoc, doc} from 'firebase/firestore'
import {productsAdapterFirestore} from '../../../Adapter/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        console.log(categoryId)
        const collectionRef = categoryId
            
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        
        getDocs(collectionRef).then(response => {  
            const productsAdapted = response.docs.map(doc => {
                return productsAdapterFirestore(doc)
            })
        
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
            const docRef = doc(db, 'products', productId) 
            
        getDoc(docRef)
            .then(response => {
                const productAdapted = productsAdapterFirestore(response)
                resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}