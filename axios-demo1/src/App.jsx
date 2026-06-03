import axios from "axios";  // npm i axios
import { useEffect , useState } from "react";

function App(){

  const [data , setData] = useState([]);

  useEffect(()=>{

    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((response)=>{

      console.log("Response ", response.data)
      setData(response.data)

    })

  },[]);

  return(
    <>
    <h1>Axios Demo1</h1>

   <table border={1}>

    {data.map((item,index)=>(

      <>
     <tr>
      <td>{item.slider_tbl_id}</td>
      <td>{item.slider_head}</td>
      <td>{item.slider_btn}</td>
      <td>
        <img width="100px" src={item.slider_img} alt="" />
      </td>
     </tr>
      </>

    ))}
</table>
    </>
  )
}

export default App;