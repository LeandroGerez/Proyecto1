import { useState } from "react"


const ItemCount = ({onConfirm, stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)
    

const decrement = () => {
    if(count > 1){
        setCount(count - 1)
    }
    
}
const increment = () =>{
    if(count < stock)
    
        setCount(count + 1)
    
    
}

return(
    <div style={{ display: 'flex'}}>
        <button className="Boton" onClick={decrement}>-</button>
    <h1>{count}</h1>
    <button className="Boton" onClick={increment}>+</button>
    <button className="Boton" onClick={() => onConfirm(count)}>Agregar al Carrito</button>
</div>
)

}

export default ItemCount 