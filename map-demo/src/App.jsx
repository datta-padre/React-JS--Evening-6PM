import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [apidata , setApiData] = useState([])

  useEffect(()=>{

    axios.get('https://a2zithub.org/dairy/abi/slider_det').then((response)=>{

      console.log("response", response.data)

      setApiData(response.data)

    })

  },[])

  return (
    <>
    <h1>React js Day-17</h1>

    <table border={1}>

   {apidata.map((item,index)=>(

    <tr>
      <td>{item.slider_tbl_id}</td>
      <td>{item.slider_btn}</td>
      <td>{item.slider_head}</td>
      <td>
        <img src={item.slider_img} width="100px" />
      </td>
    </tr>

   ))}

   </table>

    </>
  )
}

export default App


// axios 
