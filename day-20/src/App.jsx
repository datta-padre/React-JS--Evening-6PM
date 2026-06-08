import { useState } from "react"
import axios from "axios";


function App() {

  const [user_name , setName ] = useState();
  const [user_mobile , setMobile] = useState();
  const [user_email , setEmail ] = useState()
  const [user_password , setPassword] = useState()

  function create_account(){

    var obj = {
      "user_name":user_name,
      "user_mobile":user_mobile,
      "user_email":user_email,
      "user_password":user_password
    }

    console.log(obj)

    axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((response)=>{

      console.log("response", response.data)

    })

  }

  return (
    
    <>
    <h1>Welcome' Create New Account</h1>
    <br />

    Enter Name 
    <input type="text" onChange={(e)=>setName(e.target.value)} /> <br /><br />
    Enter Mobile 
    <input type="number" onChange={(e)=>setMobile(e.target.value)}/> <br /><br />
    Enter Email 
    <input type="email"  onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
    Enter Password 
    <input type="password"  onChange={(e)=>setPassword(e.target.value)}/> <br /><br />

    <button onClick={create_account}>submit </button>
    </>
  )
}

export default App


// axios =>   npm i axios 
