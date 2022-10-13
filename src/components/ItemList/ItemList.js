import Item from "../Item/Item"

const ItemList = ({ products, setPage }) => {
    return (

        <div className="row row-cols-1 row-cols-md-5 g-4">
            {products.map(prod =>
                <Item key={prod.id} {...prod} setPage={setPage} />)
            }
        </div>
    )
}


export default ItemList