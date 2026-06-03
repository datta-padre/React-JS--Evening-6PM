import axios from "axios"; // npm i axios 
import { useEffect } from "react";

function App(){

  useEffect(()=>{

    axios.get("https://dummyjson.com/users").then((response)=>{

      console.log("response data", response.data);

    })

  },[]);

  return(
    <>
    <h1>React js Day-16</h1>
    </>
  )
}

export default App;