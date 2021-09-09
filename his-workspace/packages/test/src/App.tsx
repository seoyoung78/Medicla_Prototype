import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OBTButton } from 'luna-orbit';
import { LUXButton } from 'luna-rocket';
import './init';

function App() {
  const handleClick = () => {
    alert("버튼 클릭");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <OBTButton labelText="OrbitButton" onClick={handleClick}/>
      <LUXButton type="confirm" label="Confirm Blue" blue={true} onClick={handleClick}/>
    </div>
  );
}

export default App;
