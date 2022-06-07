import InputCount from '../InputCount/InputCount'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'



const ItemDetail = ({title,precio,image,descripcion,stock}) =>{
    const handleOnAdd = (count) =>{
        console.log(count)

    }
    return(
      
        <div className="Camisetas">
            <h1>DETAILS</h1>
           <h2>{title}</h2>
           <img src={image} alt=""/>
           <p>{descripcion}</p>
           <p>Stock: {stock}</p>
           <h3>${precio}</h3>
           <button className='Boton'> COMPRAR </button>
           <footer className='footer'>
               {/*<ItemCount stock={stock}/>*/}
                <ItemCount stock={stock}/>
           </footer>
           
        </div>
        
        
    )
}


export default ItemDetail