import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//useRef for forms, capture values from any input
function App() {
  const sound = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" name="" id="" placeholder='Sound...'/>
        <input ref={color} type="color" name="" id="" />
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
