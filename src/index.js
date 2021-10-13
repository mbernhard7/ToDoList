import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from "./InMemoryApp";

let initialData = [
    {id: 1, taskName: 'Buy eggs', isChecked: false},
    {id: 2, taskName: 'Buy milk', isChecked: true},
    {id: 3, taskName: 'Walk dog', isChecked: false},
    {id: 4, taskName: 'Get haircut', isChecked: true},
]

ReactDOM.render(
    <React.StrictMode>
        <InMemoryApp initialData={initialData}/>
    </React.StrictMode>,
    document.getElementById('root')
);
