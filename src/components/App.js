
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";
 
const App = () => {
  const [islogin,setislogin] = useState(false);
  return (
    <div>
         {
          islogin ? (       <h1>Parent Componet</h1>
):<Login setislogin={setislogin}></Login>
        }
    </div>
  )
}

export default App
