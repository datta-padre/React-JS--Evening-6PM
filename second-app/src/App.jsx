import "./App.css"
import {useState} from "react"

function App(){

 const [age,SetAge] = useState(21);
 const [name,SetName] = useState();

  return(
    <>
    <div>
      <h1> I Am {age} Year old , welcome To {name}</h1>
    </div>
    </>
  )
}

export default App;




