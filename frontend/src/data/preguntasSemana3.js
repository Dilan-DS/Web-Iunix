export const preguntasSemana3 = [
  {
    pregunta: "¿Qué comando se utiliza para mostrar el contenido de un archivo línea por línea?",
    opciones: ["cat", "less", "mv", "mkdir"],
    respuestaCorrecta: "less"
  },
  {
    pregunta: "¿Cuál es la ruta principal donde se almacenan los logs del sistema?",
    opciones: ["/etc/logs", "/var/log", "/home/logs", "/log/system"],
    respuestaCorrecta: "/var/log"
  },
  {
    pregunta: "¿Qué comando se usa para ver las últimas líneas de un log?",
    opciones: ["head", "less", "tail", "grep"],
    respuestaCorrecta: "tail"
  },
  {
    pregunta: "¿Qué hace el comando `grep`?",
    opciones: ["Busca patrones en texto", "Elimina archivos", "Edita texto", "Ordena líneas"],
    respuestaCorrecta: "Busca patrones en texto"
  },
  {
    pregunta: "¿Qué herramienta se usa para rotar logs automáticamente?",
    opciones: ["logrotate", "syslog", "cron", "nano"],
    respuestaCorrecta: "logrotate"
  },
  {
    pregunta: "¿Cuál es el propósito del archivo /etc/logrotate.conf?",
    opciones: [
      "Configurar permisos de usuarios",
      "Configurar rotación de logs",
      "Iniciar el sistema",
      "Instalar paquetes"
    ],
    respuestaCorrecta: "Configurar rotación de logs"
  },
  {
    pregunta: "¿Qué comando instala logrotate en sistemas basados en Debian?",
    opciones: ["yum install logrotate", "apt-get install logrotate", "rpm logrotate", "install logrotate"],
    respuestaCorrecta: "apt-get install logrotate"
  },
  {
    pregunta: "¿Qué hace el comando `man logrotate`?",
    opciones: [
      "Muestra errores del sistema",
      "Muestra el manual de logrotate",
      "Crea logs",
      "Ejecuta la rotación"
    ],
    respuestaCorrecta: "Muestra el manual de logrotate"
  },
  {
    pregunta: "¿Qué herramienta genera reportes diarios de logs por correo?",
    opciones: ["logwatch", "logrotate", "syslog", "ufw"],
    respuestaCorrecta: "logwatch"
  },
  {
    pregunta: "¿Para qué sirve el servicio Postfix en logwatch?",
    opciones: [
      "Crear logs",
      "Enviar reportes por correo",
      "Eliminar archivos viejos",
      "Monitorear red"
    ],
    respuestaCorrecta: "Enviar reportes por correo"
  },
  {
    pregunta: "¿Qué comando reinicia el servicio syslog?",
    opciones: [
      "sudo service rsyslog reset",
      "sudo reboot syslog",
      "sudo systemctl restart syslog",
      "sudo reset rsyslog"
    ],
    respuestaCorrecta: "sudo systemctl restart syslog"
  },
  {
    pregunta: "¿Qué puerto se usa por defecto en Syslog con UDP?",
    opciones: ["22", "80", "514", "443"],
    respuestaCorrecta: "514"
  },
  {
    pregunta: "¿Qué hace el comando `logger`?",
    opciones: [
      "Ver logs",
      "Enviar un mensaje personalizado al syslog",
      "Instalar logger",
      "Eliminar registros"
    ],
    respuestaCorrecta: "Enviar un mensaje personalizado al syslog"
  },
  {
    pregunta: "¿Qué significa `*.*` en rsyslog.conf?",
    opciones: [
      "Todos los logs de todos los niveles",
      "Ningún log",
      "Solo errores",
      "Solo logs del kernel"
    ],
    respuestaCorrecta: "Todos los logs de todos los niveles"
  },
  {
    pregunta: "¿Cómo se especifica una conexión TCP en rsyslog?",
    opciones: ["@IP", "*.*", "@@IP", "#IP"],
    respuestaCorrecta: "@@IP"
  },
  {
    pregunta: "¿Cómo se especifica una conexión UDP en rsyslog?",
    opciones: ["@@IP", "@IP", "//IP", "*.*"],
    respuestaCorrecta: "@IP"
  },
  {
    pregunta: "¿Qué comando se usa para leer un archivo sin modificarlo?",
    opciones: ["nano", "less", "echo", "mv"],
    respuestaCorrecta: "less"
  },
  {
    pregunta: "¿Qué herramienta ayuda a visualizar reportes en consola o por correo?",
    opciones: ["logrotate", "watch", "logwatch", "sysctl"],
    respuestaCorrecta: "logwatch"
  },
  {
    pregunta: "¿Qué hace el comando `cat archivo | grep 'error'`?",
    opciones: [
      "Edita el archivo",
      "Muestra solo líneas con 'error'",
      "Ordena el archivo",
      "Borra líneas duplicadas"
    ],
    respuestaCorrecta: "Muestra solo líneas con 'error'"
  },
  {
    pregunta: "¿Dónde se encuentran los archivos de configuración individuales de logrotate?",
    opciones: ["/etc/logrotate.d/", "/var/log/", "/usr/bin/", "/etc/logwatch/"],
    respuestaCorrecta: "/etc/logrotate.d/"
  }
]
