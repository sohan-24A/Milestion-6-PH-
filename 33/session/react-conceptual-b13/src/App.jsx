
import { Suspense } from 'react'
import './App.css'
import FoodSection from './components/FoodSection/FoodSection'
import Navbar from './components/Navbar/Navbar'

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res=> res.json())

function App() {

  return (
    <>
    
    <Navbar></Navbar>
   <Suspense fallback={<p>loading....</p>}>
     <FoodSection foodDataRes={foodDataRes}></FoodSection>
   </Suspense>

    
    </>
  )
}

export default App
