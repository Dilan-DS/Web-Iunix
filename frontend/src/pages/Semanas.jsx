import React from 'react'
import { Link } from 'react-router-dom'
import { semanas } from '../data/semanas'
import '../styles/pages/Semanas.css'

const Semanas = () => {
  return (
    <div className="semanas-container">
      <h1>📅 Todas las semanas del curso</h1>
      <ul className="lista-semanas">
        {semanas.map((semana) => (
          <li key={semana.id} className="semana-item">
            <span>{semana.titulo}</span>
            <Link to={semana.ruta} className="btn-ver">Ver</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Semanas
