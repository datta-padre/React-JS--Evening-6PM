import { useState } from "react";

function Color(){

    const [color , SetColor ] = useState({"background":"red"})

    return(
        <>
        <h1>Styleling...!</h1>

        <p style={color}> Hay I am Datta</p>

        <button onClick={()=>SetColor({"background":"blue"})}>Blue</button>
        <button onClick={()=>SetColor({"background":"green"})}>green</button>
        <button onClick={()=>SetColor({"background":"yellow"})}>yellow</button>
        <button onClick={()=>SetColor({"background":"black","color":"white"})}>Black + White</button>
        </>
    )
}

export default Color;


