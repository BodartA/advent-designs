import './App.css'
import { Link } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <div className=' pt-12 sm:pt-16'>
        <div className=' grid grid-cols-3 p-4 gap-4 text-center text-2xl font-bold font-roboto'>
          <Link to={"/day01"}>Day 01</Link>
          <Link to={"/day02"}>Day 02</Link>
          <Link to={"/day03"}>Day 03</Link>
          <Link to={"/day04"}>Day 04</Link>
        </div>

      </div>
    </div>
  )
}

export default App
