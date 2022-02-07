import React from "react";
import DashBoard from "./components/dashboard"
import {Route,Routes} from "react-router-dom"



function App() {

  return (
    <React.Fragment>  
      <Routes> 
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes> 
   </React.Fragment>
  );
}

export default App;
