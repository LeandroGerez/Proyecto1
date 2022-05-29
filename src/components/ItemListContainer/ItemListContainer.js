import { useState, useEffect } from "react"
import { getProducts } from "../asyncmock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)

        })

    },[])
    return (
    <div className="ItemListContainer"><h1>{props.greeting}</h1>
{/*products.map(product => <p>{product.name}</p>)*/}
<ItemList products={products}/>
</div>
    )
}

export default ItemListContainer