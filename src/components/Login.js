import React from 'react'

const Login = (props) => {
    const {setislogin} = props;

    const handlesubmit=(e)=>{
       e.preventDefault();
       setislogin(true);
    };

  return (
    <div>
     <form onSubmit={handlesubmit}>
        <label>Username:</label>
        <input type="text"></input>
        <br></br>
        <br></br>
        <label>Password:</label>
        <input type="password"></input>

        <br></br>
        <br></br>
        <button type="submit">Login</button>
     </form>
    </div>
  )
}

export default Login