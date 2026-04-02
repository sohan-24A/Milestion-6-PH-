import Counter from './counter';
import Batxman from './batsman';
import Users from './User';
import Friends from './friends';
import './App.css'
import { Suspense } from 'react';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {
const friendsPromise = fetchFriends();
  function handleClick() {
    alert('I am Clicked.')
  }
  const handleClick3 = () => {
    alert('I am click 3')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum); 
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Friend all comming ....</h3>}>
        <Friends friendsPromise={friendsPromise}>

        </Friends>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading ....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Counter></Counter>
      <Batxman></Batxman>

      <button onClick={handleClick}>Click Me </button>
      <button onClick={function handleClick2() {
        alert('I am click 2')
      }}>Click Me </button>
      <button onClick={handleClick3}> Click 3</button>
      <button onClick={() => {
        alert('I am handle Click4')
      }}> Click 4</button>
      <button onClick={() => handleAdd5(5)}>click 5</button>
    </>
  )
}

export default App
