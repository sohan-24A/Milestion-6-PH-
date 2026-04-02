import { useState } from "react"

export default function Batxman(){
    const [runs,setRuns]= useState(0)
    const handleSingle =() =>{
        const upDateRuns = runs + 1
        setRuns(upDateRuns)
    }
    const handleSix =() =>{
        const upDateRuns = runs + 6
        setRuns(upDateRuns)
    }
    const handleFour =() =>{
        const upDateRuns = runs + 4
        setRuns(upDateRuns)
    }
    return(
        <div>
            <h3>Player:Bangla Batsman </h3>
            {
                runs > 50 && <p>You Score : 50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}