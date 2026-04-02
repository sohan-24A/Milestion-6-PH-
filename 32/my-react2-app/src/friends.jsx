import { use } from "react"
import Friend from "./friend";

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise)
    // console.log(friends);
            console.log(friends);
    return(
        <div className="card">
            <h3>Friends</h3>
            {
                friends.map(friend => <Friend Friend={friend}></Friend>)
            }
        </div>
    )
}