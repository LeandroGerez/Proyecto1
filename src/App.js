import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<NavBar />*/}
        {/*<CartWidget/>*/}
        {/*<ItemListContainer greeting ="Bienvenidos a Habemus"/>*/}
        {/*<ItemCount/>*/}
       {/*<ItemDetailContainer/>*/}
       <BrowserRouter>
       <NavBar />
       <Routes>
       <Route path='/category/:categoryId' element={<ItemListContainer greeting ="Producto Filtrado "/>} />
         <Route path='/' element={<ItemListContainer greeting ="Bienvenidos a Habemus"/>} />
         {/*<Route path='/about' element={<h1>About</h1>}/>*/}
         <Route path='/detail/:prodId' element={<ItemDetailContainer/>}/>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
