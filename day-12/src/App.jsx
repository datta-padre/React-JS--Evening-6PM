import { useState ,useEffect} from "react";

function App(){

  const [name , setName] = useState("");
  const [mobile , setMobile] = useState();
  const [email , setEmail] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{

    console.log("new data ", data )

  },[data]);

  function submit(){
   const newObj = {
    "name":name,
    "mobile":mobile,
    "email":email
   }

   const newData = [...data ,newObj ]
   setData(newData);
  }

  return(
    <>
    <h1>React js Day 12</h1>
    <br />

    Enter Student Name <br />
    <input type="text" onChange={(e)=>setName(e.target.value)}/> 
    <br /><br />
    Enter Student Mobile <br />
    <input type="number" onChange={(e)=>setMobile(e.target.value)}/> 
    <br /><br />
    Enter Student Email <br />
    <input type="email" onChange={(e)=>setEmail(e.target.value)}/> 
    <br /><br />

    <button onClick={submit}>Submit</button>


    {data.map((item,index)=>(
      <>
      <h1>{item}</h1>
      </>
    ))}

    </>
  )
}

export default App;