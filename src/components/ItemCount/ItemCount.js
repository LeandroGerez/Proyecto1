import { useState } from "react"


const ItemCount = ({onConfirm, stock, initial =1}) => {
    const [count, setCount] = useState(initial)
const handleOnAdd = (count) =>{
    console.log(count)
    console.log('Agregado')
}
const decrement = () => {
    if(count > 0){
        setCount(count - 1)
    }
    
}
const increment = () =>{
    if(count < stock)
    
        setCount(count + 1)
    
    
}

return(
    <div style={{ display: 'flex'}}>
        <button onClick={decrement}>-</button>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
</div>
)

}

export default ItemCount 