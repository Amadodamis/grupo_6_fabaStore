import Index from "./components/index"
import Login from "./components/login"
import Register from "./components/register"
import Profile from "./components/profile"
import EditUser from "./components/editUser"
import ProductDetail from "./components/productDetail"
import Products from "./components/products"
import EditProducts from "./components/editProducts"
import UploadProducts from './components/uploadProducts';
import ProductCart from './components/productCart';
import Apis from "./components/apis"
import ApiHook from "./components/apiHook"

import {Route,Routes} from "react-router-dom"


function App() {

  return (
    <div className="App">
      
    <Routes> 
      <Route path="/" element={<Index />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/editUser" element={<EditUser />}/>
      <Route path="/productDetail" element={<ProductDetail cant={1}/>}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/EditProducts" element={<EditProducts />}/>
      <Route path="/uploadProducts" element={<UploadProducts />}/>
      <Route path="/productCart" element={<ProductCart />}/>
      <Route path="/apis" element={<Apis />}/>
      <Route path="/apihook" element={<ApiHook />}/>
    </Routes>

    </div>
  );
}

export default App;
