import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Day01 from './pages/Day01.tsx'
import Day02 from './pages/Day02.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/day01' element={<Day01 />} />
      <Route path='/day02' element={<Day02 />} />
    </Routes>
  </BrowserRouter>
)
