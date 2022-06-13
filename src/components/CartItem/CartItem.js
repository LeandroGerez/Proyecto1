
import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const CartItem = () => {
    const {cart, removeItem} = useContext (CartContext)
    return (
        <div>
            <h1>Cart</h1>
            
            <div >{cart.map(prod => { 
                return (
                    <div key={prod.id} style={{display:'flex'}}>
            <div> {prod.title} </div>
            <div> Cantidad: {prod.quantity}</div>
            <div> Precio c/u: {prod.precio}</div>
            <button onClick={()=> removeItem(prod.id)}>X</button>
            </div>
            )})
                }    
            </div>
        </div>
    )
            }

export default CartItem