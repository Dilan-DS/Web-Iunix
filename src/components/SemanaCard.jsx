import React from 'react'
import { Link } from 'react-router-dom' // ⬅️ AÑADE ESTO
import '../styles/components/SemanaCard.css'

const SemanaCard = ({ titulo, descripcion, video, quiz }) => {
  return (
    <div className="semana-card">
      <h3 className="semana-title">{titulo}</h3>
      <p className="semana-description">{descripcion}</p>

      <div>
        <a 
          href={video} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="semana-btn video-btn"
        >
          🎥 Ver Video
        </a>

        {/* Si quiz es ruta interna, usa <Link>. Si es externa, puedes manejarlo aparte. */}
        <Link 
          to={quiz} 
          className="semana-btn quiz-btn"
        >
          📝 Quiz
        </Link>
      </div>
    </div>
  )
}

export default SemanaCard
