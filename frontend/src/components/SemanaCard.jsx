/**
 * Componente visual para mostrar la información de una semana del curso.
 */

// Importa React para poder usar JSX
import React from 'react'

// Importa los estilos CSS específicos de la tarjeta de semana
import '../styles/components/SemanaCard.css'

// Define el componente funcional SemanaCard que recibe props
const SemanaCard = ({ titulo, descripcion, video, quiz }) => {
  return (
    // Contenedor principal de la tarjeta
    <div className="semana-card">
      
      {/* Título de la semana */}
      <h3 className="semana-title">{titulo}</h3>

      {/* Descripción breve del contenido de la semana */}
      <p className="semana-description">{descripcion}</p>

      {/* Contenedor de los botones */}
      <div>
        {/* Botón para ver el video, abre en nueva pestaña */}
        <a 
          href={video} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="semana-btn video-btn"
        >
          🎥 Ver Video
        </a>

        {/* Botón para acceder al quiz */}
        <a 
          href={quiz} 
          className="semana-btn quiz-btn"
        >
          📝 Quiz
        </a>
      </div>

    </div>
  )
}

// Exporta el componente para que pueda usarse en otras partes del proyecto
export default SemanaCard
