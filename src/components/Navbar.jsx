import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { semanas } from '../data/semanas'
import { quices } from '../data/quices'
import '../styles/components/Navbar.css'

const Navbar = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(null) // null | 'semanas' | 'quices'
  const [menuAbierto, setMenuAbierto] = useState(false) // controla menú hamburguesa

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  const cerrarMenu = () => {
    setMenuAbierto(false)
    setMostrarDropdown(null)
  }

  // Toggle dropdown con botón flecha
  const toggleDropdown = (tipo) => {
    setMostrarDropdown(mostrarDropdown === tipo ? null : tipo)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">📡 Introducción a Unix</div>

      <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links-container ${menuAbierto ? 'activo' : ''}`}>
        <div className="navbar-links">
          <Link to="/" className="nav-link" onClick={cerrarMenu}>Inicio</Link>
          <Link to="/sobre-curso" className="nav-link" onClick={cerrarMenu}>Sobre el curso</Link>

          {/* === Dropdown SEMANAS con botón separado === */}
          <div className="nav-link dropdown-trigger">
            {/* Link que siempre está visible */}
            <Link to="/semanas" className="nav-link" onClick={cerrarMenu}>Semanas</Link>
            {/* Botón para abrir dropdown */}
            <button
              aria-label="Toggle dropdown Semanas"
              className="dropdown-toggle-btn"
              onClick={() => toggleDropdown('semanas')}
              type="button"
            >
              ⬇
            </button>
            {/* Dropdown menu */}
            {mostrarDropdown === 'semanas' && (
              <div className="dropdown-menu">
                {semanas.map((semana) => (
                  <Link key={semana.id} to={semana.ruta} className="dropdown-item" onClick={cerrarMenu}>
                    {semana.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* === Dropdown QUIZ con botón separado === */}
          <div className="nav-link dropdown-trigger">
            <Link to="/quices" className="nav-link" onClick={cerrarMenu}>Quizzes</Link>
            <button
              aria-label="Toggle dropdown Quizzes"
              className="dropdown-toggle-btn"
              onClick={() => toggleDropdown('quices')}
              type="button"
            >
              ⬇
            </button>
            {mostrarDropdown === 'quices' && (
              <div className="dropdown-menu">
                {quices.map((quiz) => (
                  <Link key={quiz.id} to={quiz.ruta} className="dropdown-item" onClick={cerrarMenu}>
                    {quiz.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Enlaces normales */}
          <Link to="/videos" className="nav-link" onClick={cerrarMenu}>Videos</Link>
          <Link to="/recursos" className="nav-link" onClick={cerrarMenu}>Recursos</Link>
          <Link to="/contacto" className="nav-link" onClick={cerrarMenu}>Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
