import { useState } from "react";

function App(){

  const [uname , setName] = useState("");
  const [mobile , setMobile] = useState("");
  const [email ,setEmail] = useState("");

  function Submitdata(){
    console.log("UserName = ",uname);
    console.log("UserMobile = ",mobile);
    console.log("UserEmail = ",email);
  }

  return(
    <>
    <h1>React Js Day-9</h1>

    Enter UserName <br />
    <input type="text" onChange={(event)=>setName(event.target.value)}/>
    <br /><br />
    Enter Mobile <br />
    <input type="number" onChange={(event)=>setMobile(event.target.value)}/> 
    <br /><br />
     Enter Email <br />
    <input type="email"  onChange={(event)=>setEmail(event.target.value)}/> 
    <br /><br />
    <button onClick={Submitdata}>Submit</button>
    </>
  )
}

export default App;