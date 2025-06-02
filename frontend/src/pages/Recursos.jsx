// Importa React para poder usar JSX
import React from 'react'

// Importa los estilos específicos de esta página
import '../styles/pages/Recursos.css'

// Define el componente funcional Recursos
const Recursos = () => {
  return (
    // Contenedor principal de toda la página de recursos
    <div className="recursos-container">

      {/* Contenido principal con texto e instrucciones */}
      <div className="recursos-content">
        <h1>📦 Recursos y Herramientas Recomendadas</h1>

        {/* Sección: VirtualBox */}
        <section className="recurso-box">
          <h2>🖥️ VirtualBox</h2>
          <p><strong>¿Qué es?</strong> Es un programa que te permite instalar sistemas operativos (como Ubuntu) en una máquina virtual.</p>
          <p><strong>Pasos:</strong></p>
          <ol>
            <li>Abre el siguiente enlace oficial:</li>
            <li>
              <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noopener noreferrer">
                https://www.virtualbox.org/wiki/Downloads
              </a>
            </li>
            <li>Haz clic en la versión de tu sistema operativo (Windows, macOS, Linux, etc.).</li>
            <li>Descarga el archivo y sigue el instalador paso a paso.</li>
          </ol>
        </section>

        {/* Sección: Ubuntu ISO */}
        <section className="recurso-box">
          <h2>🐧 Ubuntu ISO</h2>
          <p><strong>¿Qué es?</strong> Ubuntu es un sistema operativo basado en Linux que puedes usar dentro de VirtualBox.</p>
          <p><strong>Pasos:</strong></p>
          <ol>
            <li>Ingresa al sitio oficial:</li>
            <li>
              <a href="https://ubuntu.com/download/desktop" target="_blank" rel="noopener noreferrer">
                https://ubuntu.com/download/desktop
              </a>
            </li>
            <li>Haz clic en “Download” para descargar la última versión LTS (con soporte extendido).</li>
            <li>Guarda el archivo .iso que luego usarás dentro de VirtualBox.</li>
          </ol>
        </section>

        {/* Sección: Guías PDF */}
        <section className="recurso-box">
          <h2>📄 Guía Ubuntu</h2>
          <p><strong>¿Qué es?</strong> Manual básico para empezar a usar Ubuntu.</p>
          <a href="/assets/Ubuntu.pdf" download="Guia_Ubuntu.pdf" className="btn-descargar">📥 Descargar Ubuntu.pdf</a>
        </section>

        <section className="recurso-box">
          <h2>🧰 Guía Ubuntu Server</h2>
          <p><strong>¿Qué es?</strong> Guía para instalar y administrar servidores con Ubuntu.</p>
          <a href="/assets/Ubuntu_Server.pdf" download="Guia_Ubuntu_Server.pdf" className="btn-descargar">📥 Descargar Ubuntu_Server.pdf</a>
        </section>

        <section className="recurso-box">
          <h2>🎯 Guía Kali Linux</h2>
          <p><strong>¿Qué es?</strong> Herramientas y comandos esenciales para pruebas de penetración.</p>
          <a href="/assets/Kali_Linux.pdf" download="Guia_Kali_Linux.pdf" className="btn-descargar">📥 Descargar Kali_Linux.pdf</a>
        </section>

        <section className="recurso-box">
          <h2>🛡️ Guía Parrot OS</h2>
          <p><strong>¿Qué es?</strong> Manual de uso para seguridad informática con Parrot.</p>
          <a href="/assets/Parrot.pdf" download="Guia_Parrot.pdf" className="btn-descargar">📥 Descargar Parrot.pdf</a>
        </section>

        {/* Sección: Windows Terminal */}
        <section className="recurso-box">
          <h2>🖥️ Windows Terminal</h2>
          <p><strong>¿Qué es?</strong> Terminal moderna para sistemas Windows, ideal para trabajar como si estuvieras en Linux.</p>
          <p><strong>Pasos:</strong></p>
          <ol>
            <li>Accede a la Microsoft Store:</li>
            <li>
              <a href="https://apps.microsoft.com/detail/9N0DX20HK701" target="_blank" rel="noopener noreferrer">
                https://apps.microsoft.com/detail/9N0DX20HK701
              </a>
            </li>
            <li>Haz clic en “Obtener” o “Instalar”.</li>
            <li>Una vez instalado, podrás usarlo desde el menú de inicio como “Windows Terminal”.</li>
          </ol>
        </section>

        {/* Sección: Git Bash */}
        <section className="recurso-box">
          <h2>💻 Git Bash</h2>
          <p><strong>¿Qué es?</strong> Es un programa que te permite ejecutar comandos de Linux en Windows.</p>
          <p><strong>Pasos:</strong></p>
          <ol>
            <li>Visita el sitio oficial:</li>
            <li>
              <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">
                https://git-scm.com/downloads
              </a>
            </li>
            <li>Selecciona Windows y descarga el instalador.</li>
            <li>Ejecuta la instalación con las opciones predeterminadas.</li>
            <li>Abre Git Bash desde el menú de inicio y prueba con comandos como <code>ls</code> o <code>pwd</code>.</li>
          </ol>
        </section>

        {/* Sección: Visual Studio Code + Extensión Bash */}
        <section className="recurso-box">
          <h2>🛠️ Visual Studio Code + Extensión Bash</h2>
          <p><strong>¿Qué es?</strong> Visual Studio Code es un editor de código con soporte para múltiples lenguajes. Puedes integrarlo con Bash para usar la terminal dentro del editor.</p>
          <p><strong>Pasos:</strong></p>
          <ol>
            <li>Descarga el editor desde:</li>
            <li>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                https://code.visualstudio.com/
              </a>
            </li>
            <li>Instálalo como cualquier programa normal.</li>
            <li>Luego, abre VS Code y ve a la sección de extensiones (ícono cuadrado a la izquierda).</li>
            <li>Busca: <strong>Bash IDE</strong> o instala directamente:</li>
            <li>
              <a href="https://marketplace.visualstudio.com/items?itemName=mads-hartmann.bash-ide-vscode" target="_blank" rel="noopener noreferrer">
                Extensión Bash IDE
              </a>
            </li>
            <li>Actívala y ya puedes usar comandos Bash dentro de VS Code.</li>
          </ol>
        </section>
      </div>

      {/* Contenedor lateral con video introductorio de recursos */}
      <div className="recursos-video-lateral">
        <video autoPlay muted loop playsInline>
          <source src="/assets/Recursos.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <p className="video-caption">🎬 Introducción a los Recursos</p>
      </div>
    </div> // Fin de recursos-container
  )
}

// Exporta el componente para que pueda usarse en el sistema de rutas
export default Recursos
