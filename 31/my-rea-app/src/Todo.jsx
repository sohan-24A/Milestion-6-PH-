// export default function ToDo({ task }) {
//     return (
//         <li>Task: {task}</li>
//     )
// }
export default function ToDo({ task, Demo}) {
    if(Demo === true){
        return (
        <li>Task: {task}</li>
    )
    }
    else{
        return(
            <li>sohan</li>
        )
    }
}