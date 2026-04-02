import { useState } from "react";

export default function Count(){
    const [runs ,setruns] = useState(0)
    const count1 = () =>{
        const upDate= runs + 1
        setruns(upDate)
    }
    const count2 = () =>{
        const upDate= runs - 1
        setruns(upDate)
    }
    const count3 = () =>{
        const upDate= 0
        setruns(upDate)
    }
    return(
        <div>
            <h1>Score = {runs}</h1>
            <button onClick={count1}>count++</button>
            <button onClick={count2}>count--</button>
            <button onClick={count3}>count = 0</button>
        </div>
    )
}
