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
        quiz="https://TULINKQUIZ.com"
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
        <p>Para listar los archivos de log:</p>
        <pre>
          {`$ cd /var/log/
$ ls
$ ll`}
        </pre>

        <p>Visualizar contenido de logs:</p>
        <pre>
          {`$ less nombre_log
$ cat nombre_log
$ tail nombre_log`}
        </pre>

        <p>Filtrar información con palabras clave:</p>
        <pre>
          {`$ less nombre_log | grep "pattern"
$ cat nombre_log | grep "pattern"`}
        </pre>

        <h2>🔄 Rotación de logs con Logrotate</h2>
        <pre>
          {`$ sudo apt-get install logrotate
$ logrotate --help
$ man logrotate
$ less /etc/logrotate.conf
$ cd /etc/logrotate.d/
$ ll
$ less nombre_config`}
        </pre>

        <h2>📊 Uso de Logwatch</h2>
        <pre>
          {`$ sudo apt-get install logwatch
$ logwatch --help
$ man logwatch
$ sudo nano /usr/share/logwatch/default.conf/logwatch.conf
$ sudo systemctl enable postfix
$ sudo systemctl start postfix
$ logwatch --output stdout --range all --mailto tu@email.com`}
        </pre>

        <h2>🌐 Respaldo remoto con Syslog</h2>

        <h3>Servidor</h3>
        <pre>
          {`$ sudo nano /etc/rsyslog.conf
$ sudo systemctl restart syslog
$ less /var/log/syslog | grep "pattern"`}
        </pre>

        <h3>Cliente</h3>
        <pre>
          {`$ sudo nano /etc/rsyslog.conf
# Agregar al final:
*.* @{IP_SERVIDOR}:514
# o
*.* @@{IP_SERVIDOR}:514

$ sudo systemctl restart syslog
$ logger "Mensaje de prueba"`}
        </pre>

        <h2>📌 Recomendaciones</h2>
        <ul>
          <li>Practicar cada comando hasta entender su función.</li>
          <li>Consultar al docente cualquier duda antes de entregar.</li>
          <li>El uso de syslog fortalece la comprensión de administración de sistemas.</li>
        </ul>

        <h2>✅ Conclusiones</h2>
        <ul>
          <li>Los logs son clave para auditoría, análisis forense y seguridad.</li>
          <li>Rotarlos y centralizarlos garantiza una gestión eficiente.</li>
          <li>Herramientas como Logrotate, Logwatch y Syslog automatizan procesos vitales.</li>
        </ul>

        <h2>📚 Referencias</h2>
        <ul>
          <li>Valarezo, D. (2023). Introducción a los Sistemas Operativos. UIDE.</li>
          <li>BUENNING, M. (2024). Gestión de logs de Linux: técnicas avanzadas. NinjaOne.</li>
          <li>VirtualBox (2007). www.virtualbox.org/wiki/Downloads</li>
        </ul>
      </section>
    </div>
  )
}

export default Semana1
