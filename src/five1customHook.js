import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useInput } from './five1useInput';

//custom hook created if youre ever writing a lot of same code in components, might be able to
//extract logic into a hook, abstracted logic to hook, just import custom hook function, and just seperate function from componenet
function App() {
  const [titleProps,resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`)
    resetTitle();
    resetColor();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
        {...titleProps}
        type="text"
        placeholder='Sound...'/>
        <input
        {...colorProps}
         type="color"
         />
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
