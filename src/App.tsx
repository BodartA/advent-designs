import './App.css'
import { Link } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <div className=' pt-12 sm:pt-16'>
        <Link to={"/day01"}>Day 01</Link >
        <Link to={"/day02"}>Day 02</Link>
        <Link to={"/day03"}>Day 03</Link>
      </div>
    </div>
  )
}

export default App
