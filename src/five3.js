import React, { createContext,useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './five3App.js'
//read from context using hook
//meant to mimic real life context application

export const TreesContext = createContext();

const trees = [
  { id: '1', 'type': "maple" },
  { id: '2', 'type': "oak" },
  { id: '3', 'type': "family" },
  { id: '4', 'type': "component" }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
