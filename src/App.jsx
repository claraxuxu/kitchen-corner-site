import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App