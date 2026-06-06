import axios from "axios";  //  npm i axios
import { useState } from "react"

function App() {

  const [city , setCity] = useState();
  const [ apidata , setAPiData] = useState();

  function weather(){
    
    axios.get("https://api.weatherstack.com/current?access_key=3f65d0cc7d85ad5746ab08effe0fea9c&query="+city).then((response)=>{

      console.log("response", response.data)
      setAPiData(response.data)

    })

  }
  return (
    <>
    <input type="text" onChange={(e)=>setCity(e.target.value)}/>
    <br /><br />
    <button onClick={weather}>Search</button>
    <br /><br />

    {apidata && (
      <>
       <h1>City Name : {apidata.location.name}</h1>
       <h1></h1>
      </>
    )}

    </>
  )
}

export default App

//axios
