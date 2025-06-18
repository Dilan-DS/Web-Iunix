import React from 'react'
import '../styles/pages/Semana1.css'
import SemanaCard from '../components/SemanaCard'

const Semana4 = () => {
  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 4: Programación con Perl"
        descripcion="Procesamiento de información mediante Perl y expresiones regulares."
        video="https://youtu.be/TU_ENLACE_VIDEO"
        quiz="/quiz/semana4"
      />

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Procesar datos utilizando el lenguaje de programación Perl.</li>
          <li>Crear scripts con Perl usando archivos .pl y .cgi.</li>
          <li>Manipular variables, arrays, constantes y funciones internas.</li>
          <li>Aplicar expresiones regulares para filtrar información.</li>
        </ul>

        <h2>📘 Introducción</h2>
        <p>
          Perl es un lenguaje de programación muy utilizado en sistemas UNIX/Linux, ideal para procesamiento de texto,
          automatización de tareas y scripting rápido. En esta semana se exploran las bases de su sintaxis y su utilidad
          en el análisis de datos mediante expresiones regulares.
        </p>

        <h2>🛠️ Metodología</h2>
        <p><strong>Materiales:</strong> Distribución GNU/Linux, terminal, editor de texto (nano), Perl instalado por defecto.</p>

        <h2>🔍 Uso básico de Perl</h2>
        <div className="comando-explicacion-grid">
          <pre>
            <span>$ perl --help</span>
            <span>$ perl -e 'print "Hola\n";'</span>
          </pre>
          <div className="explicacion">
            <p># Muestra la ayuda de Perl instalada en el sistema</p>
            <p># Ejecuta una línea de código Perl directamente en la terminal</p>
          </div>
        </div>

        <h2>📄 Crear y ejecutar scripts</h2>
        <div className="comando-explicacion-grid">
          <pre>
            <span>$ nano ejemplo.pl</span>
            <span>$ nano ejemplo.cgi</span>
          </pre>
          <div className="explicacion">
            <p># Crea un nuevo script Perl con extensión .pl o .cgi</p>
            <p># Puedes escribir instrucciones Perl dentro del archivo</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>
            <span>print "Mi primer programa\n";</span>
          </pre>
          <div className="explicacion">
            <p># Código de ejemplo dentro del script</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>
            <span>$ ll ejemplo.pl</span>
            <span>$ perl ejemplo.pl</span>
          </pre>
          <div className="explicacion">
            <p># Lista los permisos del archivo</p>
            <p># Ejecuta el script Perl desde la terminal</p>
          </div>
        </div>

        <h2>💡 Variables, arrays y constantes</h2>
        <div className="comando-explicacion-grid">
          <pre>
            <span>$nombre = "Dario";</span>
            <span>$contador = 1;</span>
            <span>@dias = ("Lunes", "Martes", "Miércoles");</span>
            <span>print "$nombre\n";</span>
            <span>print $dias[0], "\n";</span>
            <span>use constant PI => 3.14159;</span>
            <span>print PI;</span>
          </pre>
          <div className="explicacion">
            <p># Declaración de variables y arreglos</p>
            <p># Acceso a elementos de un array</p>
            <p># Declaración y uso de constantes</p>
          </div>
        </div>

        <h2>🧮 Operaciones y funciones integradas</h2>
        <div className="comando-explicacion-grid">
          <pre>
            <span>$num1 = 10;</span>
            <span>$num2 = 20;</span>
            <span>print "Suma: ", $num1 + $num2, "\n";</span>
            <span>print "Resta: ", $num1 - $num2, "\n";</span>
            <span>print "Multiplicación: ", $num1 * $num2, "\n";</span>
            <span>print "División: ", $num1 / $num2, "\n";</span>
            <span>print length "HELLO";</span>
            <span>print lc "HELLO";</span>
            <span>print uc "hello";</span>
          </pre>
          <div className="explicacion">
            <p># Suma, resta, multiplicación y división en Perl</p>
            <p># Uso de funciones internas: length, lowercase (lc), uppercase (uc)</p>
          </div>
        </div>

        <h2>📚 Referencias</h2>
        <ul>
          <li>Valarezo, D. (2023). Introducción a Perl. UIDE.</li>
          <li>https://perldoc.perl.org</li>
        </ul>
      </section>
    </div>
  )
}

export default Semana4
