import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//want values avaialble to entire component tree, using
// context so child components can know all values being passed down.
// this is hooks way of using context

export const TreesContext = createContext();

const trees = [
  { id: '1', 'type': "maple" },
  { id: '2', 'type': "oak" },
  { id: '3', 'type': "family" },
  { id: '4', 'type': "component" }
]

function App() {

  return (
    <>
      <h1>Trees I've heard of</h1>
    </>
  )
};

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
