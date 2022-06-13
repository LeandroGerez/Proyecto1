import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
const CartContainer = () => {
    
    
    const {cart,removeItem} = useContext (CartContext)
    return (
        <div>
            <h1>Cart</h1>
            {<CartItem cart={cart} remove={removeItem}/>}
        </div>
    )
}

export default CartContainer


