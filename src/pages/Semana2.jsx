import React from 'react'
import '../styles/pages/Semana2.css'
import SemanaCard from '../components/SemanaCard'

const Semana2 = () => {
  return (
    <div className="semana2-container">
      <SemanaCard
        titulo="Semana 2: Procesamiento de Logs con AWK"
        descripcion="Uso del lenguaje AWK para manipular y extraer datos relevantes de logs en GNU/Linux."
        video="https://TU_VIDEO_SEM2.com"
        quiz="/quiz/semana2"
      />

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Manipular información mediante el uso de AWK.</li>
          <li>Implementar expresiones lógicas con AWK.</li>
        </ul>

        <h2>📘 Introducción</h2>
        <p>
          AWK es un lenguaje de procesamiento de texto con sintaxis similar a C. Divide cada línea en campos (columnas), lo que permite filtrar, extraer y procesar información eficientemente. Admite expresiones regulares y operaciones sobre cadenas.
        </p>

        <h2>🛠️ Metodología</h2>
        <p><strong>Materiales:</strong> Internet, Ubuntu Desktop/Server, VirtualBox o VMWare.</p>

        <h2>🔍 Comandos de la práctica</h2>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | grep "Mem" | awk '{ print $1 }'`}</pre>
          <div className="explicacion">
            <p># Muestra la primera columna de la línea "Mem"</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | grep "Mem" | mawk '{ print $1 }'`}</pre>
          <div className="explicacion">
            <p># Igual que el anterior pero usando mawk</p>
          </div>
        </div>

        {[...Array(8)].map((_, i) => (
          <div className="comando-explicacion-grid" key={i}>
            <pre>{`$ free | grep "Mem" | awk '{ print $${i + 1} }'`}</pre>
            <div className="explicacion">
              <p>{`# Imprime la columna ${i + 1} de la línea "Mem"`}</p>
            </div>
          </div>
        ))}

        <div className="comando-explicacion-grid">
          <pre>{`$ free | grep "Mem" | awk '{ print $0 }'`}</pre>
          <div className="explicacion">
            <p># Imprime toda la línea "Mem"</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | awk '{ if(/Mem/){ print $1 } }'`}</pre>
          <div className="explicacion">
            <p># Imprime la primera columna si es "Mem"</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | awk '{ if(/Mem/){ print $1 } else if(/Swap/){ print $1 } }'`}</pre>
          <div className="explicacion">
            <p># Imprime primera columna si es "Mem" o "Swap"</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | awk '{ if(/Mem/){ print $1" "$2 } }'`}</pre>
          <div className="explicacion">
            <p># Imprime columnas 1 y 2 de línea "Mem"</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ free | awk '{ if(/Mem/){ variable=$1" "$2; print variable } }'`}</pre>
          <div className="explicacion">
            <p># Guarda columnas 1 y 2 en variable y las imprime</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ date >> {File}.log
$ free | awk '{ if(/Mem/){ variable="used "$3" free "$4; print variable } }' >> {File}.log`}</pre>
          <div className="explicacion">
            <p># Guarda fecha y memoria usada/libre en archivo</p>
          </div>
        </div>

        <h2>📡 Análisis de logs en tiempo real</h2>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/dnsmasq.log | egrep -ia --line-buffered "DHCPACK" | mawk -Winteractive '{print $7";"$8";"$9";"$1"-"$2"-"$3}'`}</pre>
          <div className="explicacion">
            <p># Extrae campos y fecha de líneas con DHCPACK</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/dnsmasq.log | mawk -Winteractive '/DHCPACK/ {print $7";"$8";"$9";"$1"-"$2"-"$3}'`}</pre>
          <div className="explicacion">
            <p># Similar al anterior, con búsqueda directa en mawk</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo less -f /var/log/dnsmasq.log | mawk -Winteractive '{ if (/DHCPACK/) { print $7";"$8";"$9";"$1"-"$2"-"$3; } }'`}</pre>
          <div className="explicacion">
            <p># Busca y extrae datos desde el log completo</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/tshark/dns.log | egrep -ia --line-buffered "Arrival Time" | mawk -Winteractive '{ gsub(/\,/,"",$4); gsub(/\..*/,"",$6); print $3"-"$4"-"$6}'`}</pre>
          <div className="explicacion">
            <p># Formatea fecha desde Arrival Time</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/tshark/dns.log | egrep -ia --line-buffered "Internet Protocol Version 4" | mawk -Winteractive '{print $8}'`}</pre>
          <div className="explicacion">
            <p># Extrae IP desde línea con protocolo IPv4</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/tshark/dns.log | egrep -ia --line-buffered ": type A, class IN"$ | mawk -Winteractive '{ gsub(/\:/,"",$1); print $1}'`}</pre>
          <div className="explicacion">
            <p># Extrae host desde la línea con tipo A</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo tail -f /var/log/tshark/dns.log | egrep -ia --line-buffered ": type A, class IN, addr" | mawk -Winteractive '{print $7}'`}</pre>
          <div className="explicacion">
            <p># Extrae dirección IP destino del host</p>
          </div>
        </div>

        <div className="comando-explicacion-grid">
          <pre>{`$ sudo less -f /var/log/tshark/dns.log | mawk -Winteractive '{ if (/Arrival Time/) { gsub(/\,/,"",$4); gsub(/\..*/,"",$6); t=$3"-"$4"-"$6; } else if (/Internet Protocol Version 4/) { ipd=$8; } else if (/: type A, class IN$/) { gsub(/\:/,"",$1); host=$1; } else if (/: type A, class IN, addr/) { iphost=$7; print ipd";"iphost";"host";"t } }'`}</pre>
          <div className="explicacion">
            <p># Script completo que combina múltiples patrones y muestra resultados en formato tabla</p>
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

export default Semana2