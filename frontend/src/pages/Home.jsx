// Importa React para usar JSX y definir el componente
import React from 'react'

// Importa los estilos específicos de la página de inicio
import '../styles/pages/Home.css'

// Define el componente funcional Home (página de bienvenida)
const Home = () => {
  return (
    // Contenedor principal de la página Home
    <div className="home-container">

      {/* Fondo decorativo tipo rombos */}
      <div className="rombo-pattern">
        <div className="dot" style={{ top: '5%', left: '30%' }}></div>
        <div className="dot" style={{ top: '20%', left: '50%' }}></div>
        <div className="dot" style={{ top: '35%', left: '40%' }}></div>
        <div className="dot" style={{ top: '50%', left: '60%' }}></div>

        {/* Líneas que los conectan */}
        <div className="line" style={{ top: '5%', left: '30%', transform: 'rotate(45deg)' }}></div>
        <div className="line" style={{ top: '20%', left: '50%', transform: 'rotate(30deg)' }}></div>
        <div className="line" style={{ top: '35%', left: '40%', transform: 'rotate(-20deg)' }}></div>
      </div>

      {/* Contenido principal de bienvenida */}
      <div className="home-content">

        <h1 className="home-title">
          🚀 ¡Bienvenido al curso Introducción a Unix!
        </h1>

        <p className="home-subtitle">
          Explora el poder de la línea de comandos y aprende a dominar el sistema que mueve al mundo.
        </p>

        <img
          src="/assets/logo.png"
          alt="Logo del curso"
          className="home-image"
        />

      </div> {/* Fin del contenido */}

    </div> // Fin del contenedor principal
  )
}

// Exporta el componente para ser usado en App.jsx u otras rutas
export default Home
