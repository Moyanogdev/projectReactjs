import Item from "../Item/Item"

const ItemList = ({ products, setPage }) => {
    return (

        <div className="container">
            <div className="row row-cols-md-4 g-4 py-5">
                {products.map(prod =>
                    <Item key={prod.id} {...prod} setPage={setPage} />)
                }
            </div>
        </div>
    )
}


export default ItemList