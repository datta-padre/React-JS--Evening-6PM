import { useState ,useEffect } from "react";

function App(){

    const [name , setName] = useState("");
    const [array , setArray] = useState([]);

  function submit(){
    console.log(name);
    var newArray = [...array ,name];
    setArray(newArray);
  }

  useEffect(()=>{

    console.log("new Array =" , array)

  },[array])


  return(
    <>
    <h1>React js Day 10 </h1>
    <br /><br />
    <input type="text"  onChange={(e)=>setName(e.target.value)}/>
    <br /><br />
    <button onClick={submit}>Submit</button>
    </>
  )
}

export default App;



