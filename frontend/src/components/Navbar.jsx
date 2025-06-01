import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { semanas } from '../data/semanas'
import { quices } from '../data/quices'
import '../styles/components/Navbar.css'

const Navbar = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(null) // null | 'semanas' | 'quices'

  return (
    <nav className="navbar">
      {/* Logo principal */}
      <div className="navbar-logo">📡 Introducción a Unix</div>

      <div className="navbar-links-container">
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/sobre-curso" className="nav-link">Sobre el curso</Link>

          {/* === Dropdown de SEMANAS === */}
          <div
            className="nav-link dropdown-trigger"
            onMouseEnter={() => setMostrarDropdown('semanas')}
            onMouseLeave={() => setMostrarDropdown(null)}
          >
            <Link to="/semanas" className="nav-link">Semanas ⬇</Link>
            {mostrarDropdown === 'semanas' && (
              <div className="dropdown-menu">
                {semanas.map((semana) => (
                  <Link key={semana.id} to={semana.ruta} className="dropdown-item">
                    {semana.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* === Dropdown de QUICES === */}
          <div
            className="nav-link dropdown-trigger"
            onMouseEnter={() => setMostrarDropdown('quices')}
            onMouseLeave={() => setMostrarDropdown(null)}
          >
            <Link to="/quices" className="nav-link">Quizzes ⬇</Link>
            {mostrarDropdown === 'quices' && (
              <div className="dropdown-menu">
                {quices.map((quiz) => (
                  <Link key={quiz.id} to={quiz.ruta} className="dropdown-item">
                    {quiz.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Enlaces directos */}
          <Link to="/videos" className="nav-link">Videos</Link>
          <Link to="/recursos" className="nav-link">Recursos</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
