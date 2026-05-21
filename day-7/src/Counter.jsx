import {useState} from 'react'

function Counter(){

    const [count , SetCount] = useState(0)

    return(
        <>
        <h1>Counter </h1>

       <button onClick={()=>SetCount(count+1)}> + </button>
       <div>{count} </div>
       <button onClick={()=>SetCount(count-1)}> - </button>

        </>
    )
}

export default Counter;

// SetCount(count+1)