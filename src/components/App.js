
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";
 
const App = () => {
  const [islogin,setislogin] = useState(false);
  return (
    <div>
       <h1>Parent Component</h1>
        {
          islogin ? <p>You are logged in!</p>:<Login setislogin={setislogin}></Login>
        }
    </div>
  )
}

export default App
