import './App.css'
import Introloader from './components/Introloader'
import LandingPage from './components/LandingPage'
import About from './components/About'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Traction from './components/Traction'
import Services from './components/Services'
import Partner from './components/Partner'
import Ecosystem from './components/Ecosystem'
import Gallery from './components/Gallery'
import Exit from './components/Exit'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <ReactLenis root>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/service" element={<Services />}/>
          </Routes>
        </Router>
        <Introloader />
        
        
         <Traction />
       
        <Ecosystem />
        <Partner />
        <Gallery /> 
        <Footer/>
          {/* <Exit /> */}
        
      </div>
      </ReactLenis>
  )
}

export default App
