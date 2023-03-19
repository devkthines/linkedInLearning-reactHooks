import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//controlled component using useState, handle form inputs using state variables
function App() {
  const [sound,setSound] = useState("")
  const [color, setColor] = useState("#000000")


  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`)
    setSound("");
    setColor("#000000")
  }

  return (
    <>
      <form onSubmit={submit}>
        <input onChange={(e)=> setSound(e.target.value)}
        value={sound} type="text" name="" id="" placeholder='Sound...'/>
        <input
        onChange={(e)=> setColor(e.target.value)}
        value={color} type="color" name="" id="" />
        <button>ADD</button>
      </form>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
