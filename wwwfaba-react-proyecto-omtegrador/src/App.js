import logo from './logo.svg';
import Index from "./components/index"
import {Route,Routes,Link} from "react-router-dom"

const Home = () =>
  <h2>HOLA!!!!</h2>

const Amado= ()=> <h2>AMado!!!!</h2>


function App() {
  return (
    <div className="App">
    
    <Index />

    </div>
  );
}

{/* <Routes>
  <Route path="/"  element={<Home />}/>
  <Route path="/Amado"  element={<Amado />}/>
</Routes> */}

export default App;
