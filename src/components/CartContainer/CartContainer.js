import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
const CartContainer = () => {
    
    
    const {cart,removeItem, totalToPay} = useContext (CartContext)
    return (
        <div>
            {<CartItem cart={cart} removeItem={removeItem} totalToPay={totalToPay} />}
           
        </div>
    )
   
}

export default CartContainer


