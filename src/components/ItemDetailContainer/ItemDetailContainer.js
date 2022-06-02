import { useState, useEffect } from "react"
import { getProductsById } from "../asyncmock"
import Itemdetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product , setproduct] = useState()

    const {prodId} = useParams()
    

    useEffect(()=>{
        getProductsById (prodId).then(response =>{
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