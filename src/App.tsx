import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleClient from './clients/sampleClient';
import { json } from 'stream/consumers';

function App() {
  //const [text, setText] = useState('data');
  const [forecast, setForecast] = useState<any>(null);

  const buttonClick = async () => {
    const text = await SampleClient.getDataAsync();
    //console.log("app" + text);
    //const weather = JSON.parse(text);
    setForecast(text);
    //setText(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={buttonClick}>Get data</button>
        <p>{forecast}</p>
        {
          //forecast.map((m: { temperatureC: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {<h1>{m.temperatureC}</h1>})
        }
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
  );
}

export default App;
