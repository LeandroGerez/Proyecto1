import React, {} from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import CartItem from './components/CartItem/CartItem';



function App () {



  return (
    <div className="App">
      <header className="App-header">
      <CartContextProvider>
       <BrowserRouter>
       <NavBar />
       <Routes>
       <Route path='/category/:categoryId' element={<ItemListContainer greeting ="Producto Filtrado "/>} />
         <Route path='/' element={<ItemListContainer greeting ="Bienvenidos a Habemus"/>} />
         {/*<Route path='/about' element={<h1>About</h1>}/>*/}
         <Route path='/detail/:prodId' element={<ItemDetailContainer/>}/>
         <Route path='/cart' element={<CartItem />}/>
       </Routes>
       </BrowserRouter>
       </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
