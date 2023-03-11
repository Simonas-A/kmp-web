import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleClient from './clients/sampleClient';
import { json } from 'stream/consumers';
import { useTable, UseTableRowProps } from "react-table";
import fakeData from "./MOCK_DATA.json";

function App() {

const [contracts, setContracts] = useState();

return (
  //<div><text>saaaaAAAAAAAAAAa</text>
  //<text>ASDFASFFAS</text></div>
  <div className="Page">
    <div className="App-container">
    <table>
      <thead>
        <tr>
          <th>Car</th>
          <th>Year</th>
          <th>Price</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wolswagen</td>
          <td>2020</td>
          <td>10000</td>
          <td>862185475</td>
        </tr>
        <tr>
          <td>Audi</td>
          <td>2009</td>
          <td>5000</td>
          <td>862184565</td>
        </tr>
        <tr>
          <td>Fiat Multipla</td>
          <td>2022</td>
          <td>15000</td>
          <td>86211234</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
)


  //const [text, setText] = useState('data');
  //const [forecast, setForecast] = useState<any>(null);
  /*const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup : any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column : any) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row : any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell : any) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );*/




  /*const buttonClick = async () => {
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
    
  </div>;(
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
