import InputCount from '../InputCount/InputCount'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const ItemDetail = ({id,title,precio,image,descripcion,stock}) =>{
    const [quantity, setQuantity] = useState(0)

    const {addItem, getProduct} = useContext(CartContext) 

    const handleOnAdd = (quantity) =>{
        console.log('Agregado al carrito')
        console.log(quantity)
        setQuantity(quantity)
       addItem({id, title, precio, quantity,})
    }
    return(
      
        <div className="Camisetas">
            <h1>DETAILS</h1>
           <h2>{title}</h2>
           <img src={image} alt=""/>
           <p>{descripcion}</p>
           <p>Stock: {stock}</p>
           <h3>${precio}</h3>
           
           <footer className='footer'>
               { quantity > 0 ? <Link to='/cart'>Finalizar orden</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProduct(id)?.quantity}/>}
           </footer>
           
        </div>
        
        
    )
}


export default ItemDetail