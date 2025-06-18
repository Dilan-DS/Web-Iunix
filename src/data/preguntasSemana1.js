export const preguntasSemana1 = [
  {
    pregunta: "¿Qué comando se utiliza para ver el contenido del directorio /var/log/?",
    opciones: ["ls", "cd", "cat", "mkdir"],
    respuestaCorrecta: "ls"
  },
  {
    pregunta: "¿Qué comando permite visualizar el contenido de un log página por página?",
    opciones: ["cat", "tail", "less", "echo"],
    respuestaCorrecta: "less"
  },
  {
    pregunta: "¿Qué comando muestra solo las últimas líneas de un log?",
    opciones: ["less", "head", "tail", "grep"],
    respuestaCorrecta: "tail"
  },
  {
    pregunta: "¿Qué herramienta reemplazó a syslog en la gestión de logs?",
    opciones: ["journalctl", "logrotate", "rsyslog", "netstat"],
    respuestaCorrecta: "rsyslog"
  },
  {
    pregunta: "¿En qué directorio se almacenan la mayoría de logs en GNU/Linux?",
    opciones: ["/log", "/tmp/logs", "/var/log/", "/etc/logs"],
    respuestaCorrecta: "/var/log/"
  },
  {
    pregunta: "¿Qué comando permite filtrar información en logs usando una palabra clave?",
    opciones: ["cat | tail", "less | echo", "grep", "nano"],
    respuestaCorrecta: "grep"
  },
  {
    pregunta: "¿Cuál es el propósito del comando 'logrotate'?",
    opciones: ["Visualizar logs", "Copiar logs", "Rotar y comprimir logs", "Enviar logs"],
    respuestaCorrecta: "Rotar y comprimir logs"
  },
  {
    pregunta: "¿Cómo se instala logrotate en sistemas basados en Debian?",
    opciones: ["sudo install logrotate", "apt install logwatch", "sudo apt-get install logrotate", "dnf install logrotate"],
    respuestaCorrecta: "sudo apt-get install logrotate"
  },
  {
    pregunta: "¿Qué comando muestra ayuda sobre el uso de logrotate?",
    opciones: ["logrotate --version", "man logrotate", "logrotate -v", "logrotate /help"],
    respuestaCorrecta: "man logrotate"
  },
  {
    pregunta: "¿Qué herramienta analiza logs y envía reportes diarios por correo?",
    opciones: ["rsyslog", "logrotate", "logwatch", "cron"],
    respuestaCorrecta: "logwatch"
  },
  {
    pregunta: "¿Qué comando se usa para configurar logwatch?",
    opciones: ["sudo nano /etc/logwatch.conf", "sudo nano /var/log/log.conf", "sudo nano /usr/share/logwatch/default.conf/logwatch.conf", "logwatch --config"],
    respuestaCorrecta: "sudo nano /usr/share/logwatch/default.conf/logwatch.conf"
  },
  {
    pregunta: "¿Qué parámetro se configura en logwatch para el destinatario del correo?",
    opciones: ["Detail", "Range", "MailTo", "Output"],
    respuestaCorrecta: "MailTo"
  },
  {
    pregunta: "¿Qué puerto usa syslog sin encriptación?",
    opciones: ["80", "514", "22", "6514"],
    respuestaCorrecta: "514"
  },
  {
    pregunta: "¿Qué puerto usa syslog con encriptación?",
    opciones: ["443", "514", "22", "6514"],
    respuestaCorrecta: "6514"
  },
  {
    pregunta: "¿Qué comando permite ver conexiones de red y puertos abiertos?",
    opciones: ["ping", "netstat -nputa", "top", "rsyslog --view"],
    respuestaCorrecta: "netstat -nputa"
  },
  {
    pregunta: "¿Qué comando filtra registros del syslog por patrón?",
    opciones: ["less /var/log/syslog", "grep /var/log/syslog", "less /var/log/syslog | grep \"{Pattern}\"", "tail /var/log/syslog"],
    respuestaCorrecta: "less /var/log/syslog | grep \"{Pattern}\""
  },
  {
    pregunta: "¿Cómo se establece un servidor syslog con rsyslog?",
    opciones: ["Editando /etc/syslog.conf", "Editando /etc/rsyslog.conf", "Usando netstat", "Con cron"],
    respuestaCorrecta: "Editando /etc/rsyslog.conf"
  },
  {
    pregunta: "¿Qué herramienta permite registrar un mensaje personalizado en los logs?",
    opciones: ["tail", "logger", "nano", "logcat"],
    respuestaCorrecta: "logger"
  },
  {
    pregunta: "¿Qué comando se usa para ver la configuración principal de rotación de logs?",
    opciones: ["nano /etc/rsyslog.conf", "less /etc/logrotate.conf", "cd /var/log", "man syslog"],
    respuestaCorrecta: "less /etc/logrotate.conf"
  },
  {
    pregunta: "¿Qué comando muestra el tamaño de los logs en kilobytes?",
    opciones: ["du -k /var/log", "ls /var/log", "ll --block-size=K /var/log/", "ls -lh /var/log"],
    respuestaCorrecta: "ll --block-size=K /var/log/"
  }
]
