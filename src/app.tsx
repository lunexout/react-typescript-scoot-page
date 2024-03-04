import About from '@/pages/about'
import Home from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import Careers from './pages/careers'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/careers' element={<Careers />} />
    </Routes>
  )
}

export default App
