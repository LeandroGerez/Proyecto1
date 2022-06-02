import { useState, useEffect } from "react"
import { getProducts, getProductsById } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../asyncmock"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()


    useEffect(()=>{
        if(!categoryId){
        getProducts().then(response =>{
            setProducts(response)

        })
    }else{
        getProductsByCategory(categoryId).then(response =>{
            setProducts(response)
        })
    }
    },[categoryId])
    return (
    <div className="ItemListContainer"><h1>{props.greeting}</h1>
{/*products.map(product => <p>{product.name}</p>)*/}
<ItemList products={products}/>
</div>
    )
}

export default ItemListContainer