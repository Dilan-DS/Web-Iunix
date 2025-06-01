// Importa React para usar JSX y crear el componente
import React from 'react'

// Importa los estilos específicos para la página de contacto
import '../styles/pages/Contacto.css'

// Define la ruta de la imagen del profesor (usando ruta relativa del proyecto público)
const profesorImg = "/assets/Profesor.jpg"

// Componente funcional para mostrar la información de contacto del profesor
const Contacto = () => {
  return (
    // Contenedor principal de la sección de contacto
    <div className="contacto-container">

      {/* Tarjeta que contiene la foto y la información del profesor */}
      <div className="contacto-card">

        {/* Imagen del profesor */}
        <img 
          src={profesorImg} 
          alt="Profesor Darío Valarezo" 
          className="contacto-foto" 
        />

        {/* Contenedor de toda la información del profesor */}
        <div className="contacto-info">
          
          {/* Nombre completo y título del profesor */}
          <h2>Prof. MSc. Darío Javier Valarezo León</h2>

          {/* Correos electrónicos del profesor */}
          <p><strong>📧 Correos:</strong></p>
          <ul>
            <li>darveleon@gmail.com</li>
            <li>davalarezole@uide.edu.ec</li>
            <li>djvalarezo@utpl.edu.ec</li>
          </ul>

          {/* Ciudad de residencia */}
          <p><strong>📍 Ciudad:</strong> Loja, Ecuador</p>

          {/* Teléfono de contacto */}
          <p><strong>📞 Teléfono:</strong> +593 996702993</p>

          {/* Información académica del profesor */}
          <p><strong>🎓 Formación:</strong></p>
          <ul>
            <li>Máster en Ciberseguridad – PUCE</li>
            <li>Ingeniero en Electrónica y Telecomunicaciones – UTPL</li>
          </ul>

          {/* Premios recibidos por el profesor */}
          <p><strong>🏆 Premios recientes:</strong></p>
          <ul>
            <li>Excelencia Docente – UIDE e ISTDAB</li>
            <li>Ganador del Concurso Interno de ChatGPT</li>
            <li>Premio de Innovación – Taiwan Innotech Expo</li>
          </ul>

          {/* Sitios profesionales relacionados al profesor */}
          <p><strong>🔗 Sitios profesionales:</strong></p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/dario-valarezo/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com.ec/citations?user=IOlXs0YAAAAJ&hl" target="_blank">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="https://github.com/YAKOTTec/" target="_blank">
                GitHub (YAKOTTec)
              </a>
            </li>
          </ul>

        </div> {/* Fin de contacto-info */}
      </div> {/* Fin de contacto-card */}
    </div> // Fin de contacto-container
  )
}

// Exporta el componente para que pueda ser usado en el sistema de rutas
export default Contacto
