import React, { useState } from 'react'
import Quiz from '../components/Quiz1'
import '../styles/pages/QuicesSemana1.css'

const Quices = () => {
  const [mostrarQuiz, setMostrarQuiz] = useState(false)

  return (
    <div className="quices-container">
      <h1>🧾 Quiz Semana 1</h1>

      {!mostrarQuiz && (
        <div className="quiz-intro">
          <p>📌 Este quiz evalúa tus conocimientos sobre la gestión de logs en sistemas GNU/Linux.</p>
          <ul>
            <li>Duración recomendada: sin límite.</li>
            <li>Consta de 10 preguntas seleccionadas aleatoriamente.</li>
            <li>Cada pregunta vale 1 punto. Tu puntaje se mostrará al finalizar.</li>
            <li>Recibirás sugerencias sobre en qué mejorar.</li>
          </ul>

          <div className="quiz-image-preview">
            <p></p>
            <img
              src="/assets/quices.jpg"
              alt="Quiz semana 1"
              className="quiz-image"
            />
          </div>

          <button className="empezar-btn" onClick={() => setMostrarQuiz(true)}>
            🚀 Empezar Quiz
          </button>
        </div>
      )}

      {mostrarQuiz && <Quiz />}
    </div>
  )
}

export default Quices
