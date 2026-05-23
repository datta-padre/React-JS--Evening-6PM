import { useState , useEffect} from "react";



function App(){

  const [name , setName] = useState("");
  const [arr ,setArr] = useState([])


  useEffect(()=>{

    console.log("Array =" ,arr)

  },[arr]);


  function Submit(){

    console.log(name)    //  0 s
    setArr(name);       

  }

  return(
    <>
    <h1>Demo 1</h1>
    <br /><br />
    Enter Name <br />
    <input type="text" onChange={(event)=>setName(event.target.value)}/>
    <br /><br />
    <button onClick={Submit}>Submit</button>
    </>
  )
}

export default App;


