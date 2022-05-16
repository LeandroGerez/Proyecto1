import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget/>
        <CountFunction/>
        <ItemListContainer greeting ="Bienvenidos a Habemus"/>
      </header>
    </div>
  );
}

export default App;
