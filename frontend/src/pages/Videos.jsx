import React from 'react'
import '../styles/pages/Videos.css'

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>🎥 Videos del curso</h1>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=VIDEO_ID1" target="_blank" rel="noopener noreferrer">Video 1: Introducción a Unix</a></li>
        <li><a href="https://www.youtube.com/watch?v=VIDEO_ID2" target="_blank" rel="noopener noreferrer">Video 2: Comandos básicos</a></li>
        {/* Agrega más videos según el contenido del curso */}
      </ul>
    </div>
  )
}

export default Videos
