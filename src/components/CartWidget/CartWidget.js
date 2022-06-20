import { useContext } from "react"
import CartContext  from "../../Context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
const { getQuantity} = useContext(CartContext)


const quantity = getQuantity()
    return (
        <Link to='/cart'>
         <img src="/images/logocart.png"/>{ quantity }
         
        </Link>
    )
}
 
export default CartWidget