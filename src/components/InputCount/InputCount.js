import { useState } from "react"


const InputCount = ({onconfirm,stock,initial=0})=>{
const [count, setCount] = useState(initial)

const handleChange = (e) => {
    if(e.target.value <= stock){
        setCount(e.target.value)
    }
}
return(
    <div>
        <input type='number' onChange={handleChange} value={count}/>
        <button onClick={() => onconfirm(count)}>Agregar al Carrito</button>
    </div>
)
}

export default InputCount