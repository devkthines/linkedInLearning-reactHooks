import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useFetch} from './five5useFetch.js'
//building a fetch component
//fetching data with customhook
function App({login}){
const {loading,data,error} = useFetch(
  `https://api.github.com/users/${login}`);
if(loading) return <h1>Loading...</h1>;
if(error) return (<pre>{JSON.stringify(error, null, 2)}</pre>);
return(
  <div>
    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
    <img
    src={data.avatar_url}
     alt={data.login}
      />
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
  </div>
)


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App login={"devkthines"}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
