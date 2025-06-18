import React from 'react'
import '../styles/pages/Semana1.css'
import SemanaCard from '../components/SemanaCard'

const Semana1 = () => {
  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 1: Gestión de Logs en Linux"
        descripcion="Se estudia la visualización, rotación, análisis, monitoreo y respaldo remoto de logs en sistemas GNU/Linux."
        video="https://youtu.be/TU_ENLACE_VIDEO"
        quiz="/quiz-1"
      />

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Gestionar los logs almacenados en el sistema operativo.</li>
          <li>Respaldo remoto de logs mediante herramientas de monitoreo.</li>
        </ul>

        <h2>📘 Introducción</h2>
        <p>
          Los logs son registros fundamentales para la administración del sistema
          operativo. Estos archivos guardan eventos, errores y acciones, y se
          almacenan usualmente en el directorio <code>/var/log/</code>. Permiten
          monitorear el sistema, depurar errores, garantizar la seguridad e incluso
          cumplir normativas. Su gestión eficiente requiere entender su estructura,
          rotación, visualización y respaldo.
        </p>

        <h2>🛠️ Metodología</h2>
        <p><strong>Materiales:</strong> Conexión a internet, ordenador con Ubuntu Desktop o Server, VirtualBox/VMWare.</p>

        <h2>🔍 Visualización de logs</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ cd /var/log/
$ ls
$ ll`}</pre>
          <div className="explicacion">
            <p># Navega al directorio donde se almacenan los logs del sistema</p>
            <p># Lista los archivos y carpetas dentro del directorio actual</p>
            <p># Muestra los detalles de cada archivo (permisos, tamaño, fecha)</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ less nombre_log
$ cat nombre_log
$ tail nombre_log`}</pre>
          <div className="explicacion">
            <p># Abre el archivo para visualizarlo página por página</p>
            <p># Muestra todo el contenido del archivo de una sola vez</p>
            <p># Muestra las últimas líneas del archivo, útil para ver lo más reciente</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ less nombre_log | grep "pattern"
$ cat nombre_log | grep "pattern"`}</pre>
          <div className="explicacion">
            <p># Muestra coincidencias dentro del archivo con navegación</p>
            <p># Muestra solo las líneas que coinciden con el patrón indicado</p>
          </div>
        </div>

        <h2>🔄 Rotación de logs con Logrotate</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt-get install logrotate
$ logrotate --help
$ man logrotate
$ less /etc/logrotate.conf
$ cd /etc/logrotate.d/
$ ll
$ less nombre_config`}</pre>
          <div className="explicacion">
            <p># Instala la herramienta logrotate</p>
            <p># Muestra la ayuda y opciones de uso de logrotate</p>
            <p># Muestra el manual completo de la herramienta</p>
            <p># Muestra la configuración principal de rotación</p>
            <p># Entra al directorio de configuraciones personalizadas</p>
            <p># Muestra los archivos de configuración de cada servicio</p>
            <p># Visualiza un archivo de configuración específico</p>
          </div>
        </div>

        <h2>📊 Uso de Logwatch</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt-get install logwatch
$ logwatch --help
$ man logwatch
$ sudo nano /usr/share/logwatch/default.conf/logwatch.conf
$ sudo systemctl enable postfix
$ sudo systemctl start postfix
$ logwatch --output stdout --range all --mailto tu@email.com`}</pre>
          <div className="explicacion">
            <p># Instala la herramienta logwatch</p>
            <p># Muestra las opciones básicas de uso</p>
            <p># Abre el manual completo</p>
            <p># Edita la configuración de logwatch</p>
            <p># Activa el servicio de correo electrónico</p>
            <p># Inicia el servicio de correo</p>
            <p># Genera y envía reporte de logs al correo</p>
          </div>
        </div>

        <h2>🌐 Respaldo remoto con Syslog</h2>

        <h3>Servidor</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo nano /etc/rsyslog.conf
$ sudo systemctl restart syslog
$ less /var/log/syslog | grep "pattern"`}</pre>
          <div className="explicacion">
            <p># Edita la configuración del servidor rsyslog</p>
            <p># Reinicia el servicio syslog para aplicar cambios</p>
            <p># Busca mensajes específicos en el archivo de log principal</p>
          </div>
        </div>

        <h3>Cliente</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo nano /etc/rsyslog.conf
# Agregar al final:
*.* @{IP_SERVIDOR}:514
# o
*.* @@{IP_SERVIDOR}:514

$ sudo systemctl restart syslog
$ logger "Mensaje de prueba"`}</pre>
          <div className="explicacion">
            <p># Agregar al final:</p>
            <p># Envía todos los logs por UDP al servidor (una arroba)</p>
            <p># Envía todos los logs por TCP al servidor (doble arroba)</p>
            <p># Reinicia el servicio syslog del cliente</p>
            <p># Envía un mensaje de prueba al servidor para verificar conexión</p>
          </div>
        </div>

        <h2>📚 Referencias</h2>
        <ul>
          <li>Valarezo, D. (2023). Introducción a los Sistemas Operativos. UIDE.</li>
        </ul>
      </section>
    </div>
  )
}

export default Semana1