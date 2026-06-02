import axios from "axios"
import { useEffect } from "react"


function App(){

  useEffect(async ()=>{

    var data = await axios.get("https://dummyjson.com/quotes");

    console.log(data)

  },[])

  return(
    <>
    <h1>Welcome</h1>
    </>
  )
}