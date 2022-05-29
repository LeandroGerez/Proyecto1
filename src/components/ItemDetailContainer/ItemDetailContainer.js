import { useState, useEffect } from "react"
import { getProductsById } from "../asyncmock"
import Itemdetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product , setproduct] = useState()

    useEffect(()=>{
        getProductsById ('1').then(response =>{
            setproduct(response)
        })
    },[])

    return(
        <div>
            <Itemdetail title={product?.name} precio={product?.price} image={product?.img} descripcion={product?.description} stock={product?.stock}/>
        </div>
    )
}

export default ItemDetailContainer