// Importa React para poder usar JSX y crear componentes funcionales
import React from 'react'

// Importa los estilos CSS específicos del footer
import '../styles/components/Footer.css'

// Define el componente funcional Footer
const Footer = () => {
  return (
    // Etiqueta principal del pie de página
    <footer className="footer">
      {/* Contenedor general del contenido del footer */}
      <div className="footer-content">

        {/* Línea con derechos de autor y nombre de la institución */}
        <p>© 2025 Introducción a Unix · Universidad Internacional del Ecuador</p>

        {/* Sección de enlaces rápidos del footer */}
        <div className="footer-links">
          <a href="/">Inicio</a> {/* Enlace a la página de inicio */}
          <a href="/sobre-curso">Sobre el curso</a> {/* Enlace a la página sobre el curso */}
          <a href="/contacto">Contacto</a> {/* Enlace a la página de contacto */}
          <a href="/recursos">Recursos</a> {/* Enlace a recursos del curso */}
        </div>

        {/* Sección del equipo de desarrollo */}
        <div className="footer-team">
          {/* Título de la sección del equipo */}
          <p><strong>Equipo de desarrollo:</strong></p>

          {/* Grid para distribuir las tarjetas de los integrantes */}
          <div className="team-grid">
            
            {/* Tarjeta: Deyvi Masache */}
            <div className="team-member">
              <h4>Deyvi Masache</h4> {/* Nombre */}
              <p>Tel: <a href="tel:+593 98 885 7954">+593 98 885 7954</a></p> {/* Teléfono pendiente */}
              <p>Correo: <a href="mailto:">deyvimasache@gmail.com</a></p> {/* Correo pendiente */}
            </div>

            {/* Tarjeta: Stephano Dilan Gálvez */}
            <div className="team-member">
              <h4>Stephano Dilan Gálvez</h4>
              <p>Tel: <a href="tel:+593 99 070 6018">+593 990 706 018</a></p> {/* Teléfono personal */}
              <p>Correo: <a href="mailto:stephanogalvez100@gmail.com">stephanogalvez100@gmail.com</a></p> {/* Correo personal */}
            </div>

            {/* Tarjeta: Jhosty León */}
            <div className="team-member">
              <h4>Jhosty Jhair Soto León</h4>
              <p>Tel: <a href="tel:+593 99 104 2652">+593 99 104 2652</a></p> {/* Teléfono pendiente */}
              <p>Correo: <a href="mailto:">sotonel2005@gmail.com</a></p> {/* Correo pendiente */}
            </div>

          </div> {/* Fin del grid de miembros */}
        </div> {/* Fin de la sección del equipo */}

      </div> {/* Fin del contenido del footer */}
    </footer> // Fin del pie de página
  )
}

// Exporta el componente para que pueda usarse en otras partes del proyecto
export default Footer
