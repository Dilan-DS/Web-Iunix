import React from 'react'
import '../styles/pages/Semana1.css'
import SemanaCard from '../components/SemanaCard'

const Semana3 = () => {
  return (
    <div className="semana1-container" style={{ minHeight: '100vh', width: '100vw', padding: '2rem', boxSizing: 'border-box' }}>
      <SemanaCard
        titulo="Semana 3: Entornos Virtuales y Programación Python"
        descripcion="Se estudia la instalación, ejecución y gestión de entornos Python, tanto en GNU/Linux como en Windows."
        video="https://youtu.be/TU_ENLACE_VIDEO"
        quiz="/quiz/semana3"
      />

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Efectuar tareas a través del lenguaje de programación Python.</li>
          <li>Reconocer los principios de Object-Oriented Programming (OOP).</li>
        </ul>

        <h2>🔧 Instalación y ejecución de Python</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt install python2
$ sudo apt install python3`}</pre>
          <div className="explicacion">
            <p># Instala Python 2 en GNU/Linux</p>
            <p># Instala Python 3 en GNU/Linux</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ which python2
$ python2 --help
$ python2

$ which python3
$ python3 --help
$ python3`}</pre>
          <div className="explicacion">
            <p># Muestra la ruta del ejecutable de Python 2</p>
            <p># Muestra la ayuda de Python 2</p>
            <p># Inicia el modo interactivo de Python 2</p>
            <p># Muestra la ruta del ejecutable de Python 3</p>
            <p># Muestra la ayuda de Python 3</p>
            <p># Inicia el modo interactivo de Python 3</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`> python2 --help
> python2
> python3 --help
> python3`}</pre>
          <div className="explicacion">
            <p># Ayuda en Windows para Python 2</p>
            <p># Modo interactivo Python 2 en Windows</p>
            <p># Ayuda en Windows para Python 3</p>
            <p># Modo interactivo Python 3 en Windows</p>
          </div>
        </div>

        <h2>📘 Uso del modo interactivo</h2>
        <div className="comando-explicacion-grid">
          <pre>{`>>> help()
help> modules
help> {Library}
help> quit`}</pre>
          <div className="explicacion">
            <p># Abre el menú de ayuda</p>
            <p># Lista todos los módulos</p>
            <p># Muestra info de una librería</p>
            <p># Sale del menú de ayuda</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`>>> suma = 4 + 4
>>> print(suma)
>>> import math
>>> print(math.pi)
>>> exit()`}</pre>
          <div className="explicacion">
            <p># Suma básica</p>
            <p># Muestra el resultado</p>
            <p># Importa el módulo math</p>
            <p># Muestra el valor de pi</p>
            <p># Cierra el modo interactivo</p>
          </div>
        </div>

        <h2>📦 Instalación de librerías con pip</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt install python2-pip
$ sudo apt install python3-pip
$ pip list
$ pip list | grep {Library}`}</pre>
          <div className="explicacion">
            <p># Instala pip para Python 2</p>
            <p># Instala pip para Python 3</p>
            <p># Lista librerías instaladas</p>
            <p># Busca una librería específica</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt install python3-{Library}`}</pre>
          <div className="explicacion">
            <p># Instala una librería como paquete del sistema</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`> pip list
> pip install {Library}`}</pre>
          <div className="explicacion">
            <p># Lista de librerías instaladas en Windows</p>
            <p># Instala una librería con pip</p>
          </div>
        </div>

        <h2>📝 Creación de scripts en Python</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ nano archivo.py
suma = 4 + 4
print(suma)
import math
print(math.pi)
$ ll archivo.py
$ python3 archivo.py`}</pre>
          <div className="explicacion">
            <p># Abre nano para crear el script</p>
            <p># Código Python</p>
            <p># Verifica permisos y existencia</p>
            <p># Ejecuta el script</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`
"""
Executable Python Code:
Execute from terminal as:
$python3 archivo.py
Powered by Anyela Carpio
"""

"""
Descripción del script
"""

# Packages
# Modules
# Global variables
# Functions
# Classes
# Main
if __name__ == '__main__':`}</pre>
          <div className="explicacion">
            <p># Comentario de estructura y punto de entrada del script</p>
          </div>
        </div>

        <h2>🌱 Ambientes virtuales</h2>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt install python3-venv`}</pre>
          <div className="explicacion">
            <p># Instala venv para crear entornos virtuales</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ cd ~
$ mkdir Python_Projects
$ cd Python_Projects
$ python3 -m venv miproyecto
$ ls
$ cd miproyecto
$ ls`}</pre>
          <div className="explicacion">
            <p># Ir al home</p>
            <p># Crear carpeta para proyectos</p>
            <p># Crear entorno virtual</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ source miproyecto/bin/activate
$ which python3
$ pip list`}</pre>
          <div className="explicacion">
            <p># Activar entorno virtual</p>
            <p># Verifica que estás en el entorno</p>
            <p># Lista librerías del entorno</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ pip install {Library}
$ pip uninstall {Library}
$ pip install -r requirements.txt
$ deactivate`}</pre>
          <div className="explicacion">
            <p># Instala una librería</p>
            <p># Elimina una librería</p>
            <p># Instala múltiples desde archivo</p>
            <p># Desactiva el entorno</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`> pip install python3-venv
> mkdir Python_Projects
> cd Python_Projects
> python3 -m venv miproyecto
> dir
> cd miproyecto
> dir`}</pre>
          <div className="explicacion">
            <p># Instala venv en Windows</p>
            <p># Crea carpeta y entorno virtual</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`> miproyecto\Scripts\activate
> pip list
> pip install {Library}
> pip install -r requirements.txt
> pip uninstall {Library}
> miproyecto\Scripts\deactivate`}</pre>
          <div className="explicacion">
            <p># Activa entorno virtual</p>
            <p># Lista librerías</p>
            <p># Instala y desinstala librerías</p>
            <p># Desactiva entorno virtual</p>
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

export default Semana3
    