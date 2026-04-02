
import './App.css'
import Tabs from './Tabs'

function App() {

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>

      <div className="navbar bg-base-300">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>

      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>
      <Tabs></Tabs>
    </>
  )
}

export default App
