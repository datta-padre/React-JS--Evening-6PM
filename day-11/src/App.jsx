
import { useState , useEffect} from "react";

function App(){

  const [uname , setName ] = useState("")
  const [umobile , setMobile ] = useState()
  const [uemail , setEmail] = useState("")
  const [Array, setArray] = useState([]);

  useEffect(()=>{

    console.log("New Array = ",Array)

  },[Array])

  function printData(){
    
    const newObj = {
      "userName":uname,
      "userMobile":umobile,
      "userEmail":uemail
    }

  const newArray = [...Array,newObj]

    setArray(newArray);

  }

  return(
    <>
    <h1>React js Day 11 </h1>

    <br />

    Enter UserName <br />
    <input type="text" onChange={(event)=>setName(event.target.value)}/>
    <br /><br />
     Enter UserMobile <br />
    <input type="number" onChange={(event)=>setMobile(event.target.value)}/>
    <br /><br />
     Enter UserEmail <br />
    <input type="email"  onChange={(event)=>setEmail(event.target.value)}/>
    <br /><br />

    <button onClick={printData}>Submit</button>
    </>
  )
}

export default App;