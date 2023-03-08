import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleClient from './clients/sampleClient';
import { json } from 'stream/consumers';

function App() {
  //const [text, setText] = useState('data');
  //const [forecast, setForecast] = useState<any>(null);

  const buttonClick = async () => {
    //const text = await SampleClient.getDataAsync();
    //console.log("app" + text);
    console.log("TESTING DIS SHIT IF IT WORKS");
    //const weather = JSON.parse(text);
    //setForecast(text);
    //setText(text);
  }

  //https://www.youtube.com/watch?v=A9oUTEP-Q84&ab_channel=PedroTech

  return <div className="App">
    <header className="App-header">
      <button onClick={buttonClick}>Test</button>
    </header>
    
  </div>;/*(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={buttonClick}>Get data</button>
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
    </div>
    
  )*/
}

export default App;
