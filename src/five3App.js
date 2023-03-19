import './App.css';
import { useContext } from 'react';
import { TreesContext } from './';


//any component that is wrapped in context provider can read the context and data
function App() {
const {trees} = useContext(TreesContext);
// const result = useContext(TreesContext);
// console.log(result)
    return (
      <>
        <h1>Trees I've heard of</h1>
        <ul>
            {trees.map(tree => (
                <li key={tree.id}>{tree.type}</li>
            ))}
        </ul>
      </>
    )
  };


export default App;