import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget/>
        <ItemListContainer greeting ="Bienvenidos a Habemus"/>
        <ItemCount/>
       <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
