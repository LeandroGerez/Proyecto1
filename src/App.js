import React from 'react'
import logo from './logo.svg';
import './App.css';


const AvatarJSX = (props) => {
  console.log(props)
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`

  return (
<picture>
<img src={src} alt='lego 1'/> 
{props.name}


</picture>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <AvatarJSX id={2} name="Leonel" />
      <AvatarJSX id={3} name="Leandro" />
      </header>
    </div>
  );
}

export default App;
