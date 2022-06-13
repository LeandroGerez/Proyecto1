import { useContext } from "react"
import CartContext  from "../../Context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
const { getQuantity} = useContext(CartContext)


const quantity = getQuantity()
    return (
        <button to='/cart'><img src="/images/logocart.png"/>
        { quantity } 
        </button>
    )
}
 
export default CartWidget