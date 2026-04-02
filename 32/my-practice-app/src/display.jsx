import { useState } from "react";

export default function Display(){
    const [show,setShow] = useState(false)
    return(
        <div>
            <button onClick={() =>setShow(true)}>Show</button>
            <button onClick={() =>setShow(false)}>Hidden</button>
            {show && <p>Hello React Learner ! </p>}
        </div>
    )
}  