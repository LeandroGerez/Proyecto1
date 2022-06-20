import { useState, createContext, useEffect, useContext } from "react";

const CartContext = createContext ()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)
    const [totalToPay, setTotalPay] = useState(0)

    useEffect(() =>{
        updateTotalProductsAdded()
        updateTotalPay()
    },[cart])

    const addItem = (productToAdd ) => {

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else {
            const newCart = cart.map(prod =>{

                if(prod.id === productToAdd.id ){

                const newProduct = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return newProduct
            }else {
                return prod
            }
            })
            setCart(newCart)
        }
        
    }

    const updateTotalProductsAdded= () =>{
        let count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        })
        setTotalProductsAdded(count)
    }


    const updateTotalPay = () => {
        let total = 0 
        cart.forEach(prod =>{
            total +=prod.quantity * prod.precio
        })
        setTotalPay(total)
    }


    const getQuantity = () =>{
        let accu = 0 
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu 
    }

const getProduct = (id) =>{
   return  cart.find (prod => prod.id === id)
   
}


    const isInCart= (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const getProductQuantity = (id) => {
        return cart.find (prod => prod.id=== id)?.quantity
    }



    return (
        <CartContext.Provider value ={{cart, addItem, getQuantity, getProduct, removeItem,getProductQuantity, totalToPay, totalProductsAdded}}>
            
            {children}
        </CartContext.Provider>
       
    )
}

export default CartContext