import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget/>
        <ItemListContainer greeting ="Bienvenidos a Habemus"/>
        <ItemCount/>
      </header>
    </div>
  );
}

export default App;
