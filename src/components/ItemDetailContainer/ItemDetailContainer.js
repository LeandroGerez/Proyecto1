import { useState, useEffect } from "react"
import { getProductsById } from "../asyncmock"
import Itemdetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product , setproduct] = useState()
    const [loading, setLoading] = useState(true)
    const {prodId} = useParams()
    

    useEffect(()=>{
        getProductsById (prodId).then(response =>{
            setproduct(response)
        }).finally(()=>{
            setLoading(false)
        })
    },[prodId])

    if(loading){
        return<h1>loading...</h1>
    }

    return(
        <div>
            <Itemdetail id={prodId} title={product?.name} precio={product?.price} image={product?.img} descripcion={product?.description} stock={product?.stock}/>
        </div>
    )
}

export default ItemDetailContainer