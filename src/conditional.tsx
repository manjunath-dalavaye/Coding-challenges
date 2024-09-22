import { useState } from "react";


const Conditional: React.FC=()=>{
    const [isLoggedIn,seLoggedIn]=useState<boolean>(false);

    const Handle=()=>{
        seLoggedIn((Prestatus)=>!Prestatus);
    }
    return(
        <>
       {isLoggedIn ? (
        <h2>Welcome back to user...!</h2>
       ):(
        <button onClick={Handle}>Login </button>
       )}
        </>
    )
}

export default Conditional;

// Using prevStatus ensures that no matter how many times you click the button, 
// the state will always accurately reflect the current light status. 
// This is important in cases where multiple updates might happen in quick succession,
//  preventing potential issues with state inconsistencies.