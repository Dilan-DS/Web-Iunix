import React from 'react'
import SemanaCard from '../components/SemanaCard'
import '../styles/pages/Semana2.css'

const Semana2 = () => {
  return (
    <div className="semana2-container">
      <SemanaCard
        titulo="Semana 2: Procesamiento de Logs con AWK"
        descripcion="Exploramos el uso de AWK para manipular, filtrar y analizar información en archivos de logs dentro del entorno GNU/Linux."
        video="https://youtu.be/TU_VIDEO_SEMANA2"
        quiz="https://TULINKQUIZ.com"
      />

      <section>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Manipular información mediante el uso de AWK.</li>
          <li>Implementar expresiones lógicas con AWK para el análisis de logs.</li>
        </ul>

        <h2>📘 Introducción</h2>
        <p>
          AWK es un lenguaje de procesamiento de textos con sintaxis similar a C, muy útil en scripts de shell. Permite dividir líneas en columnas, facilitando el tratamiento de datos en estructuras tipo tabla. Se puede usar separadores personalizados, realizar búsquedas, transformaciones y cálculos con facilidad.
        </p>

        <h2>🛠️ Metodología</h2>
        <ul>
          <li>Conexión a Internet de banda ancha.</li>
          <li>Ubuntu Desktop o Server OS, VirtualBox o VMWare.</li>
          <li>Terminal de comandos y acceso a archivos de logs.</li>
        </ul>

        <h2>🔍 Comandos y Resultados</h2>

        <h3>📄 Visualización básica de logs con AWK:</h3>
        <pre>
{`$ free | grep "Mem" | awk '{ print $1 }'
$ free | grep "Mem" | awk '{ print $2 }'
$ free | grep "Mem" | awk '{ print $3 }'
$ free | grep "Mem" | awk '{ print $4 }'
$ free | awk '{ if(/Mem/){ print $1" "$2 } }'
$ date >> mem.log
$ free | awk '{ if(/Mem/){ variable="used "$3" free "$4; print variable } }' >> mem.log`}
        </pre>

        <h3>🧪 Filtrado de logs DHCP con awk y mawk:</h3>
        <pre>
{`$ sudo tail -f /var/log/dnsmasq.log | mawk -Winteractive '/DHCPACK/ {print $7";"$8";"$9";"$1"-"$2"-"$3}'`}
        </pre>

        <h3>🕵️ Análisis de tráfico con tshark + awk:</h3>
        <pre>
{`$ sudo tail -f /var/log/tshark/dns.log | egrep -ia "Arrival Time" | mawk -Winteractive '{ gsub(/,/, "", $4); gsub(/\..*/, "", $6); print $3"-"$4"-"$6 }'
$ sudo tail -f /var/log/tshark/dns.log | egrep -ia "Internet Protocol Version 4" | mawk -Winteractive '{ print $8 }'
$ sudo less -f /var/log/tshark/dns.log | mawk -Winteractive '{
  if (/Arrival Time/) {
    gsub(/,/, "", $4); gsub(/\..*/, "", $6); t=$3"-"$4"-"$6;
  } else if (/Internet Protocol Version 4/) {
    ipd=$8;
  } else if (/: type A, class IN$/) {
    gsub(/:/, "", $1); host=$1;
  } else if (/: type A, class IN, addr/) {
    iphost=$7;
    print ipd";"iphost";"host";"t;
  }
}'`}
        </pre>

        <h2>📌 Recomendaciones</h2>
        <ul>
          <li>Revisar cuidadosamente los comandos antes de ejecutarlos para evitar errores.</li>
          <li>Es útil contar con un adaptador WiFi si se desea capturar tráfico de red en tiempo real.</li>
        </ul>

        <h2>✅ Conclusiones</h2>
        <ul>
          <li>AWK permite extraer y formatear información útil de forma dinámica.</li>
          <li>La combinación de herramientas como <code>tshark</code> + <code>tail</code> + <code>awk</code> es muy eficaz para monitorear tráfico DNS en tiempo real.</li>
          <li>Con paciencia y práctica se logran resultados precisos y eficientes.</li>
        </ul>

        <h2>📚 Referencias</h2>
        <ul>
          <li>Valarezo, D. (2023). Introducción a los Sistemas Operativos. UIDE.</li>
          <li>VirtualBox. (2007). www.virtualbox.org/wiki/Downloads</li>
        </ul>
      </section>
    </div>
  )
}

export default Semana2

