import {useState} from 'react'

function App(){

  const [name , SetName] = useState();

  return(
    <>
    <h1>React js Day-8</h1>

    <br /><br />

    <input type="text" onChange={(event)=>SetName(event.target.value)} />

    <p>Hiii {name} </p>
    </>
  )
}

export default App;

