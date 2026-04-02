export default function Friend({Friend}){
    // console.log(Friend);
    const {name,email} = Friend
    return(
        <div className="card">
            <h4>Name:{name} <br /> Email : {email}</h4>
        </div>
    )
}