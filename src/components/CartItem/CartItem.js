
import { useContext } from "react"
import {useCart} from "../../Context/CartContext"
import { useState } from "react"
import './CartItem.css'
const CartItem = () => {
    const [loading, setLoading] = useState(false)
    const {cart, removeItem, totalProductsAdded, totalToPay} = useCart ()
    return (
        
        <div>
            <h1>Cart</h1>
            
            <div >{cart.map(prod => { 
                return (
                    <div  key={prod.id} style={{display:''}}>
            <h1> {prod.title} </h1>
            <h2> Cantidad: {prod.quantity}</h2>
            <h3> Precio c/u: {prod.precio}</h3>
            <button onClick={()=> removeItem(prod.id)}>X</button>
             <p> Total:  {totalToPay}  </p>
            </div>
            
            )})
                }    
            </div>
            
        </div>
    ) 
    if(!totalProductsAdded){
        return(
            <h1>Tu carrito esta vacio </h1>
        )
    }    
            } 

            

export default CartItem