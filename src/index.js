import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InMemoryApp from "./InMemoryApp";

let initialData = [
    {id:1,taskName:'Buy eggs',isChecked: false},
    {id:2,taskName:'Buy milk',isChecked: true},
    {id:3,taskName:'Walk dog',isChecked: false},
    {id:4,taskName:'Get haircut',isChecked: true},
]

ReactDOM.render(
  <React.StrictMode>
    <InMemoryApp initialData={initialData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
