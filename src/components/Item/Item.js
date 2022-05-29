import './Item.css'


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
    <button>More details</button>
    </div>
)
}

export default Item