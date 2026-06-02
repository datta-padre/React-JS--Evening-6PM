import { useState } from "react";

function App(){

  const [name , setName] = useState("");
  const [mobile , setMobile] = useState();
  const [age , setAge] = useState();

  function handlesubmit(event){
    event.preventDefault()
    console.log("Hiii")

  }

  return(
    <>
    <h1>Welcome  to Day-14</h1>
    <br />
      
    <form onSubmit={handlesubmit}>

    Enter Student Name <br />
    <input type="text"  onChange={(event)=>setName(event.target.value)}/> 
    <br /><br />
    Enter Student Mobile <br />
    <input type="number"  onChange={(event)=>setMobile(event.target.value)}/> 
    <br /><br />
    Enter Student Age <br />
    <input type="number"  onChange={(event)=>setAge(event.target.value)}/> 
    <br /><br />
    <button>Submit</button>

    </form>

    </>
  )
}

export default App;


