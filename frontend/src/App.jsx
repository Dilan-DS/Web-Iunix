import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Videos from './pages/Videos'
import SobreCurso from './pages/SobreCurso'
import QuicesPage from './pages/Quices'            
import QuizSemana1 from './pages/QuicesSemana1'    
import Recursos from './pages/Recursos'
import Contacto from './pages/Contacto'
import Semanas from './pages/Semanas'
import Semana1 from './pages/Semana1'
import Semana2 from './pages/Semana2'
import Semana3 from './pages/Semana3'

const App = () => {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: '4.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Página principal */}
            <Route path="/" element={<Home />} />

            {/* Rutas generales */}
            <Route path="/sobre-curso" element={<SobreCurso />} />
            <Route path="/semanas" element={<Semanas />} />
            <Route path="/quices" element={<QuicesPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Semanas individuales */}
            <Route path="/semana1" element={<Semana1 />} />
            <Route path="/semana2" element={<Semana2 />} />
            <Route path="/semana3" element={<Semana3 />} />

            {/* Quices individuales */}
            <Route path="/quiz-1" element={<QuizSemana1 />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
