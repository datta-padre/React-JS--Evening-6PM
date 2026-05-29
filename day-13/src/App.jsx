import { useState ,useEffect} from "react";


function App(){

  const [product , setProduct] = useState("");
  const [price , setPrice] = useState(0);
  const [qty , setQty] = useState(0);
  const [data , setData] = useState([]);
  const [total , setTotal ] = useState(0);

  useEffect(()=>{

    console.log("Updated = ", data);

    var sum = 0;

    for(var i=0 ;i<data.length ; i++){
      sum = sum + data[i].total;
    }

    setTotal(sum);

  },[data])

  function saveData(){
    
    const newObj = {
      "product":product,
      "price":price,
      "qty":qty,
      "total":price*qty
    }
    
    const newData = [...data,newObj]
    setData(newData)

    setProduct(" ");
    setPrice(0)
    setQty(0)

  }

  return(
    <>
    <h1>Welcome</h1>
    <br />

    <table width={"100%"} border={1}>
      <tr>
        <th>product Name</th>
        <th>price</th>
        <th>Qty</th>
        <th>Total</th>
        <th>Action</th>
      </tr>

      <tr>
        <td>
          <input type="text"  onChange={(e)=>setProduct(e.target.value)} value={product}/>
        </td>
        <td>
          <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
        </td>
          <td>
          <input type="number" onChange={(e)=>setQty(e.target.value)} value={qty}/>
        </td>
          <td>
          <input type="number" value={price*qty} readOnly />
        </td>
        <td>
          <button onClick={saveData}>+</button>
        </td>
      </tr>
  

     {data.map((item,index)=>(

     <>
     <tr>
      <td>{item.product}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>{item.total}</td>
      <td>
        <button>X</button>
      </td>
     </tr>
     </>
      
     ))}

     <tr>
      <td colSpan={2}>Total</td>
      <td>QTY: 9</td>
      <td colSpan={2}>Total : {total}</td>
     </tr>

    </table>
    </>
  )
}

export default App;