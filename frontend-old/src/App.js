// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DropdownMenu from './dropdown';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://clipartix.com/wp-content/uploads/2017/02/Video-clip-art-tumundografico.png" className="App-logo" alt="logo" />
        <p>
          BiopiCreator
        </p>
        <p className="App-link">
          Select an event to add to your video
        </p>
        <DropdownMenu></DropdownMenu>
        {/*<div>
          <button onClick={(e) => download(e)}> Download </button>
        </div> */}
      </header>
    </div>
  );
}

export default App;
