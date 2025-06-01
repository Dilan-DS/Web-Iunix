import React from 'react'
import SemanaCard from '../components/SemanaCard'
import '../styles/pages/Semana3.css'

const Semana3 = () => {
  return (
    <div className="semana3-container">
      <SemanaCard
        titulo="Semana 3: Automatización con Python Scripting"
        descripcion="Se explora el uso de Python desde la terminal, la creación de scripts y ambientes virtuales en GNU/Linux."
        video="https://youtu.be/TU_VIDEO_SEMANA3"
        quiz="https://TULINKQUIZ.com"
      />

      <section>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Ejecutar tareas automatizadas con scripts en Python.</li>
          <li>Reconocer principios básicos de programación orientada a objetos (OOP).</li>
        </ul>

        <h2>📘 Introducción</h2>
        <p>
          Python es un lenguaje de programación versátil que permite automatizar tareas desde la terminal.
          Se pueden usar versiones como Python 2 o Python 3, instalar paquetes con pip, crear scripts, y trabajar en entornos virtuales.
          Estas capacidades lo convierten en una herramienta poderosa en entornos GNU/Linux y Windows.
        </p>

        <h2>🛠️ Metodología</h2>
        <ul>
          <li>Instalación de Python y pip.</li>
          <li>Uso del modo interactivo para pruebas rápidas.</li>
          <li>Creación y ejecución de scripts en terminal.</li>
          <li>Configuración de entornos virtuales.</li>
        </ul>

        <h2>⚙️ Comandos Esenciales</h2>

        <h3>📥 Instalación de Python</h3>
        <pre>
{`$ sudo apt install python2
$ sudo apt install python3`}
        </pre>

        <h3>📌 Verificar y usar Python</h3>
        <pre>
{`$ which python3
$ python3 --help
$ python3`}
        </pre>

        <h3>🔎 Uso interactivo en terminal</h3>
        <pre>
{`>>> help()
help> modules
help> math
>>> import math
>>> print(math.pi)
>>> exit()`}
        </pre>

        <h3>📦 Instalación de paquetes</h3>
        <pre>
{`$ sudo apt install python3-pip
$ pip3 list
$ pip3 install nombre_libreria
$ pip3 uninstall nombre_libreria`}
        </pre>

        <h3>📝 Creación y ejecución de scripts</h3>
        <pre>
{`$ nano ejemplo.py

# contenido del script:
suma = 4 + 4
print(suma)
import math
print(math.pi)

$ python3 ejemplo.py`}
        </pre>

        <h3>🌐 Entornos Virtuales</h3>
        <pre>
{`$ sudo apt install python3-venv
$ mkdir Python_Projects
$ cd Python_Projects
$ python3 -m venv mi_entorno
$ source mi_entorno/bin/activate
$ pip list
$ deactivate`}
        </pre>

        <h2>📌 Recomendaciones</h2>
        <ul>
          <li>Verifica siempre la versión de Python con <code>python --version</code>.</li>
          <li>No confundas Python 2 con Python 3 en proyectos diferentes.</li>
        </ul>

        <h2>✅ Conclusiones</h2>
        <ul>
          <li>El modo interactivo de Python facilita la experimentación y aprendizaje rápido.</li>
          <li>Aprendí a trabajar desde la terminal, lo cual es útil fuera de entornos gráficos.</li>
          <li>La creación de scripts y entornos virtuales me permite organizar mejor mis proyectos.</li>
        </ul>

        <h2>📚 Referencias</h2>
        <ul>
          <li>Rossum, G. V. (1991). Python. Obtenido de <a href="https://www.python.org" target="_blank">python.org</a></li>
        </ul>
      </section>
    </div>
  )
}

export default Semana3
