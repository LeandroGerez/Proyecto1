import './ItemDetails.css'


const ItemDetail = ({title,precio,image,descripcion,stock}) =>{
    return(
      
        <div className="Camisetas">
            <h1>DETAILS</h1>
           <h2>{title}</h2>
           <img src={image} alt=""/>
           <p>{descripcion}</p>
           <p>Stock: {stock}</p>
           <h3>${precio}</h3>
           <button className='Boton'> COMPRAR </button>
           
        </div>
        
        
    )
}


export default ItemDetail