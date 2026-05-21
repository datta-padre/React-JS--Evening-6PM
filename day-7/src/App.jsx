import {useState} from 'react'

function App(){

  const [firstName , SetFirstName] = useState("Datta")

  return(
    <>
    <h1>Welcome To {firstName}</h1>
    <button onClick={()=>SetFirstName("Vishal")}>Click</button>
    <button onClick={()=>SetFirstName("OM")}>Om</button>
    </>
  )
}


export default App;




