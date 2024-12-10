import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Day01 from './pages/Day01.tsx'
import Day02 from './pages/Day02.tsx'
import Day03 from './pages/Day03.tsx'
import Day04 from './pages/Day04.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/day01' element={<Day01 />} />
      <Route path='/day02' element={<Day02 />} />
      <Route path='/day03' element={<Day03 />} />
      <Route path='/day04' element={<Day04 />} />
    </Routes>
  </BrowserRouter>
)
