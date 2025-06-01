import React from 'react'
import '../styles/pages/SobreCurso.css'

const SobreCurso = () => {
  return (
    <div className="curso-container">

      <div className="curso-flex">
        <div className="curso-texto">

          <div className="card">
            <h1>🧾 ¿Qué es este curso?</h1>
            <p>
              <strong>Introducción a Unix</strong> es un curso práctico que te enseña a usar el sistema 
              operativo Unix/Linux desde la terminal. Aprenderás a ejecutar comandos, automatizar tareas 
              y comprender cómo funciona el sistema desde adentro.Ideal para estudiantes de informática, 
              redes, ciberseguridad y desarrollo de software.
            </p>
          </div>

          <div className="card">
            <h2>🎯 Objetivos del curso</h2>
            <ul>
              <li>Entender la estructura de un sistema Unix/Linux.</li>
              <li>Ejecutar comandos para manipular archivos, procesos y permisos.</li>
              <li>Automatizar tareas con Bash y otros comandos útiles.</li>
              <li>Analizar archivos de logs del sistema.</li>
              <li>Utilizar herramientas como <code>grep</code>, <code>awk</code>, <code>tail</code>, <code>chmod</code>, etc.</li>
            </ul>
          </div>

          <div className="card">
            <h2>🧪 Temas que vas a aprender</h2>
            <ul>
              <li>✅ Comandos básicos de terminal</li>
              <li>✅ Navegación de archivos y directorios</li>
              <li>✅ Permisos de usuario y grupos</li>
              <li>✅ Control de procesos</li>
              <li>✅ Uso de pipes y redirecciones</li>
              <li>✅ Edición de archivos con <code>nano</code> y <code>vim</code></li>
              <li>✅ Introducción a Bash scripting</li>
              <li>✅ Gestión de logs del sistema</li>
              <li>✅ Uso de herramientas como AWK, GREP, TShark, Logrotate, etc.</li>
            </ul>
          </div>

          <div className="card">
            <h2>🧰 Herramientas que usarás</h2>
            <ul>
              <li>🐧 Ubuntu Linux (en máquina virtual)</li>
              <li>💻 VirtualBox para simular el sistema</li>
              <li>🧠 VS Code como editor de scripts</li>
              <li>📂 Git Bash o Windows Terminal (para usuarios de Windows)</li>
            </ul>
          </div>

          <div className="card">
            <h2>🧭 ¿Cómo se enseña? (Metodología)</h2>
            <ul>
              <li>✅ Prácticas en clase desde la terminal</li>
              <li>✅ Actividades paso a paso</li>
              <li>✅ Tareas en entorno real (Ubuntu Virtual)</li>
              <li>✅ Videos explicativos</li>
              <li>✅ Evaluaciones prácticas con logs y scripts</li>
            </ul>
          </div>

          <div className="card">
            <h2>👥 ¿A quién va dirigido?</h2>
            <p>
              A estudiantes o personas que desean aprender a trabajar con sistemas 
              Unix/Linux desde cero.No necesitas experiencia previa con la terminal, 
              solo ganas de aprender haciendo.
            </p>
          </div>

          <div className="card">
            <h2>✅ Requisitos previos</h2>
            <ul>
              <li>Tener un computador con Windows, macOS o Linux.</li>
              <li>Instalar VirtualBox (lo explicamos en clase).</li>
              <li>Ganas de experimentar con el sistema operativo.</li>
            </ul>
          </div>

        </div>

        <div className="collage-container">
          <img src="/assets/sobre_curso.jpg" alt="Curso 1" className="collage-img" />
          <img src="/assets/sobre_curso1.jpg" alt="Curso 2" className="collage-img img2" />
          <img src="/assets/sobre_curso2.jpg" alt="Curso 3" className="collage-img" />
        </div>
      </div>

    </div>
  )
}

export default SobreCurso
