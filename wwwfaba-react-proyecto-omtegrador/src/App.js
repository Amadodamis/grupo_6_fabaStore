import logo from './logo.svg';
import Index from "./components/index"
import Login from "./components/login"
import Register from "./components/register"
import Profile from "./components/profile"
import EditUser from "./components/editUser"
import ProductDetail from "./components/productDetail"

import {Route,Routes,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
    
    <ProductDetail/>

    </div>
  );
}

export default App;
