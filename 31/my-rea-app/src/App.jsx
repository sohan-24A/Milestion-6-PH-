import './App.css'
import Todo from './Todo';  

function App() {


  return (
    <>
     <h1>React core concepts</h1>  
     <Todo task="learn -react"></Todo> 
     <Todo task="learn -js" Demo="true"></Todo> 
     <Todo task="learn -python"></Todo> 
     {/* <Person name="sohan" tect="python"></Person> 
     <Person name="sohanA" tect="java"></Person> 
     <Person name="sami" tect="css"></Person> 
     <Player name="sadia" runs="100"></Player>
     <Player name="sabina" runs="100"></Player> */}
    </>
  )
}

function Person(name){
  console.log(name);
  // const name = 'sohan'
  return(
    <div className="person">
    <p>I am a {name.name}</p>
    <p>I  {name['tect']}</p>

    </div>
  )
}

function Player({name,runs}){
  return(
    <div className="student">
    <h3>Name: {name}</h3>
    <p style={{color: "red"}}>Runs:{runs} </p>
  </div>
  )
}

export default App
