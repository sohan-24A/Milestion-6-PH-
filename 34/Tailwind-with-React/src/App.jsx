
import { Suspense } from 'react';
import './App.css'
import Navber from './components/Navber/Navber'
import PricingOption from './components/PricingOption/PricingOption'
import ResultChart from './components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';



const pricingPromise = fetch('pricingData.json').then(res =>res.json());
const marksPromise = axios.get('marksData.json');
function App() {

  return (
    <>
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <ResultChart></ResultChart>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App
