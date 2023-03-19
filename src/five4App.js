import './App.css';
import { useTrees } from './';


//any component that is wrapped in context provider can read the context and data
function App() {
const {trees} = useTrees();
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