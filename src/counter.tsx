import { useState } from "react";


const CounterApp: React.FC=()=>{

const [Contee,SetCountee]=useState(0);
    const HandleChange=()=>{
        SetCountee(Contee+2);
    }

    const HandlChange2=()=>{
        if(Contee>0)
        SetCountee(Contee-2);
    }
    return(
        <>
        <h2>Counter {Contee}</h2>
        <button onClick={HandleChange}>Increment</button>
        <br></br>
        <button onClick={HandlChange2}>decrement</button>
        </>
    )
}

export default CounterApp;