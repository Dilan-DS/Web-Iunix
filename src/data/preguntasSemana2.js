export const preguntasSemana2 = [
  {
    pregunta: "¿Qué comando permite imprimir la primera columna de la salida de 'free' filtrada por 'Mem'?",
    opciones: [
      "free | grep 'Mem' | awk '{print $0}'",
      "free | grep 'Mem' | awk '{print $1}'",
      "free | grep 'Mem' | mawk '{print $2}'",
      "free | grep 'Mem' | tail -n 1"
    ],
    respuestaCorrecta: "free | grep 'Mem' | awk '{print $1}'"
  },
  {
    pregunta: "¿Qué diferencia a 'mawk' de 'awk'?",
    opciones: [
      "mawk es más lento",
      "mawk solo sirve para logs",
      "mawk es una implementación más rápida de awk",
      "awk no permite expresiones regulares"
    ],
    respuestaCorrecta: "mawk es una implementación más rápida de awk"
  },
  {
    pregunta: "¿Qué operador permite sustituir subcadenas dentro de awk?",
    opciones: ["replace()", "match()", "gsub()", "submatch()"],
    respuestaCorrecta: "gsub()"
  },
  {
    pregunta: "¿Qué hace el comando 'free | grep \"Mem\" | awk \"{print $3}\"'?",
    opciones: [
      "Imprime la memoria usada",
      "Muestra la línea completa",
      "Reinicia la memoria",
      "Cambia el valor de $3"
    ],
    respuestaCorrecta: "Imprime la memoria usada"
  },
  {
    pregunta: "¿Cuál es el propósito del parámetro '-F' en awk?",
    opciones: [
      "Filtra líneas por campo",
      "Establece el separador de campos",
      "Activa el modo de búsqueda",
      "Finaliza la ejecución"
    ],
    respuestaCorrecta: "Establece el separador de campos"
  },
  {
    pregunta: "¿Qué comando imprime todas las columnas de la línea que contiene 'Mem'?",
    opciones: [
      "awk '{print $*}'",
      "awk '{print all}'",
      "awk '{print $0}'",
      "awk '{print $1,$2,$3}'"
    ],
    respuestaCorrecta: "awk '{print $0}'"
  },
  {
    pregunta: "¿Qué se imprime con 'awk \"{print $1 \\\" \\\" $2}\"'?",
    opciones: [
      "Las columnas 1 y 2 separadas por espacio",
      "Solo la columna 1",
      "La suma de $1 y $2",
      "Un error de sintaxis"
    ],
    respuestaCorrecta: "Las columnas 1 y 2 separadas por espacio"
  },
  {
    pregunta: "¿Cuál es el efecto de este bloque awk: 'if(/Mem/){ print $1 } else if(/Swap/){ print $1 }'?",
    opciones: [
      "Imprime cualquier línea",
      "Imprime solo líneas con errores",
      "Imprime las columnas de Mem o Swap",
      "Filtra líneas vacías"
    ],
    respuestaCorrecta: "Imprime las columnas de Mem o Swap"
  },
  {
    pregunta: "¿Qué hace el comando 'logger \"mensaje\"'?",
    opciones: [
      "Cierra el sistema",
      "Imprime un mensaje por consola",
      "Registra un mensaje en los logs del sistema",
      "Edita un archivo"
    ],
    respuestaCorrecta: "Registra un mensaje en los logs del sistema"
  },
  {
    pregunta: "¿Qué significa '| egrep -ia --line-buffered \"DHCPACK\"'?",
    opciones: [
      "Ignora mayúsculas y busca en tiempo real",
      "Elimina líneas vacías",
      "Busca solo en encabezados",
      "No tiene ninguna función"
    ],
    respuestaCorrecta: "Ignora mayúsculas y busca en tiempo real"
  },
  {
    pregunta: "¿Qué comando formatea fecha y campos de logs de dnsmasq en mawk?",
    opciones: [
      "mawk '{print $1,$2}'",
      "mawk '/DHCPACK/ {print $7\";\"$8\";\"$9}'",
      "mawk '/DHCPACK/ {print $7\";\"$8\";\"$9\";\"$1\"-\"$2\"-\"$3}'",
      "mawk 'DHCPACK {print all}'"
    ],
    respuestaCorrecta: "mawk '/DHCPACK/ {print $7\";\"$8\";\"$9\";\"$1\"-\"$2\"-\"$3}'"
  },
  {
    pregunta: "¿Qué herramienta analiza tráfico DNS y permite filtrar con awk?",
    opciones: ["netstat", "nmap", "tshark", "dig"],
    respuestaCorrecta: "tshark"
  },
  {
    pregunta: "¿Para qué se usa 'gsub(/,/, \"\", $4)' en awk?",
    opciones: [
      "Reemplaza comas con espacios",
      "Borra comas de la columna 4",
      "Agrega comas al final",
      "Concatena campos"
    ],
    respuestaCorrecta: "Borra comas de la columna 4"
  },
  {
    pregunta: "¿Qué significa '$ free | grep \"Mem\" | mawk \"{ print $6 }\"'?",
    opciones: [
      "Imprime la columna 6 de la línea con 'Mem'",
      "Borra la memoria",
      "Filtra errores",
      "Verifica swap"
    ],
    respuestaCorrecta: "Imprime la columna 6 de la línea con 'Mem'"
  },
  {
    pregunta: "¿Qué hace 'less -f /var/log/tshark/dns.log | mawk ...'?",
    opciones: [
      "Edita el log",
      "Busca palabras",
      "Filtra información estructurada desde el log",
      "Ejecuta un script Python"
    ],
    respuestaCorrecta: "Filtra información estructurada desde el log"
  },
  {
    pregunta: "¿Qué herramienta permite monitorear logs en tiempo real?",
    opciones: ["tail -f", "watch", "grep", "less"],
    respuestaCorrecta: "tail -f"
  },
  {
    pregunta: "¿Qué hace awk cuando encuentra una condición como 'if (/Mem/)'?",
    opciones: [
      "Ignora la línea",
      "Evalúa si la línea contiene 'Mem'",
      "Ejecuta una operación matemática",
      "Abre un archivo"
    ],
    respuestaCorrecta: "Evalúa si la línea contiene 'Mem'"
  },
  {
    pregunta: "¿Cuál es la función de 'print variable' en awk?",
    opciones: [
      "Declara una variable",
      "Concatena cadenas",
      "Imprime el contenido de una variable",
      "Genera un error"
    ],
    respuestaCorrecta: "Imprime el contenido de una variable"
  },
  {
    pregunta: "¿Qué archivo contiene logs generados por dnsmasq?",
    opciones: ["/var/log/syslog", "/var/log/dnsmasq.log", "/etc/dnsmasq", "/usr/log/dnsmasq.log"],
    respuestaCorrecta: "/var/log/dnsmasq.log"
  },
  {
    pregunta: "¿Cuál es la extensión común de archivos de log en Linux?",
    opciones: [".txt", ".conf", ".log", ".awk"],
    respuestaCorrecta: ".log"
  }
]
