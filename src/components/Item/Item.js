import './Item.css'


const Item = ({id,name,price,img,category,description}) =>{
return(
    <div className='Item'>
    <h1>{name}</h1>
<img
src={img} alt='img'

/>
<h2>{description}</h2>


    <p>CATEGORIA: {category}</p>
    
    
    <p>${price}</p>
    <button>More details</button>
    </div>
)
}

export default Item