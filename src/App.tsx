import './App.css'
import { Link } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <div className=''>
        <p className=''><Link to={"/day01"}>Day 01</Link ></p>
      </div>
    </div>
  )
}

export default App
