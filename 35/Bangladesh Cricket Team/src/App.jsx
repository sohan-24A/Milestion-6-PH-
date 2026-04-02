
import { Suspense, useState } from 'react'
import './App.css'
import HomePage from './components/Navber/HomePage'
import Navber from './components/Navber/Navber'
import Players from './components/players/Players'
import { ThreeDot } from 'react-loading-indicators'



const fetchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  const playerPromise = fetchPlayer()
  const [coin,setCoin] =useState(400000)
  return (
    <>
      <Navber coin={coin} />
      <HomePage />
      <Suspense
        fallback={
          <div className="flex justify-center items-center mt-3">
           <ThreeDot color="#32cd32" size="medium" text="" textColor="" />
          </div>
        }
      >
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
