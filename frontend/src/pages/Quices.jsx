import React from 'react'
import { Link } from 'react-router-dom'
import { quices } from '../data/quices'
import '../styles/pages/Quices.css'

const Quices = () => {
  return (
    <div className="quices-container">
      <h1>📝 Quizzes del curso</h1>
      <p className="intro-text">Selecciona un quiz para poner a prueba tus conocimientos sobre GNU/Linux.</p>

      <div className="quices-grid">
        {quices.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <h2>{quiz.titulo}</h2>
            <p>{quiz.descripcion || 'Este quiz evalúa temas esenciales del curso.'}</p>
            <Link to={quiz.ruta} className="btn-ver">Ver Quiz</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quices
