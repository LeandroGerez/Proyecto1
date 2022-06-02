import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id,name,price,img,category,description}) =>{
return(
    <div className='Item'>
    <h1>{name}</h1>
   
<img
src={img} alt='img'

/>

<h2>{}</h2>


    <p>{}</p>
    
    
    <p>{}</p>
    {/*<button className='Boton2'>More details</button>*/}
    <Link to={`/detail/${id}`} className='Boton2'>More Details </Link>    
    </div>
)
}

export default Item