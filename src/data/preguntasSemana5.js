export const preguntasSemana5 = [
  {
    pregunta: "¿Qué comando se utiliza para instalar rsyslog en un servidor basado en Debian/Ubuntu?",
    opciones: [
      "sudo apt install syslog-ng",
      "sudo yum install rsyslog",
      "sudo apt install rsyslog -y",
      "sudo install rsyslog"
    ],
    respuestaCorrecta: "sudo apt install rsyslog -y"
  },
  {
    pregunta: "¿Qué líneas deben descomentarse en el archivo /etc/rsyslog.conf para habilitar recepción por UDP y TCP?",
    opciones: [
      "load_udp=true, load_tcp=true",
      "module(load='imudp'), input(type='imudp' port='514') y module(load='imtcp'), input(type='imtcp' port='514')",
      "udp=yes, tcp=yes",
      "enable_port=514"
    ],
    respuestaCorrecta: "module(load='imudp'), input(type='imudp' port='514') y module(load='imtcp'), input(type='imtcp' port='514')"
  },
  {
    pregunta: "¿Dónde se almacenan los logs recibidos por hostname?",
    opciones: [
      "/etc/rsyslog.d/",
      "/var/log/messages/",
      "/var/log/remotelogs/",
      "/logs/clientes/"
    ],
    respuestaCorrecta: "/var/log/remotelogs/"
  },
  {
    pregunta: "¿Qué extensión tiene el archivo que contiene los logs individuales por cliente?",
    opciones: [
      ".txt",
      ".rsys",
      ".log",
      ".conf"
    ],
    respuestaCorrecta: ".log"
  },
  {
    pregunta: "¿Qué herramienta permite programar tareas recurrentes como ejecutar un script cada 15 minutos?",
    opciones: [
      "rsyslog",
      "bashrc",
      "cron",
      "sysctl"
    ],
    respuestaCorrecta: "cron"
  },
  {
    pregunta: "¿Qué comando se usa para editar tareas cron como root?",
    opciones: [
      "sudo nano /etc/crontab",
      "sudo crontab -e",
      "nano crontab",
      "crontab /etc/"
    ],
    respuestaCorrecta: "sudo crontab -e"
  },
  {
    pregunta: "¿Qué hace el siguiente cronjob: */15 * * * * /usr/local/bin/registrar_eventos.sh?",
    opciones: [
      "Ejecuta cada 15 segundos",
      "Ejecuta un script cada 15 minutos",
      "Ejecuta el script al reiniciar",
      "Ejecuta cada día a las 15h"
    ],
    respuestaCorrecta: "Ejecuta un script cada 15 minutos"
  },
  {
    pregunta: "¿Qué hace el script registrar_eventos.sh?",
    opciones: [
      "Instala rsyslog",
      "Registra número de archivos de log por cliente en un archivo de eventos",
      "Envía correos",
      "Apaga el sistema"
    ],
    respuestaCorrecta: "Registra número de archivos de log por cliente en un archivo de eventos"
  },
  {
    pregunta: "¿Cómo se valida si se están recibiendo logs en tiempo real?",
    opciones: [
      "journalctl --status",
      "ping servidor",
      "tail -f /var/log/remotelogs/*.log",
      "netstat -a"
    ],
    respuestaCorrecta: "tail -f /var/log/remotelogs/*.log"
  },
  {
    pregunta: "¿Qué archivo contiene el resultado del script que cuenta eventos en el servidor?",
    opciones: [
      "/etc/log.log",
      "/var/log/syslog",
      "/usr/bin/cron.log",
      "/var/log/eventos_servidor.log"
    ],
    respuestaCorrecta: "/var/log/eventos_servidor.log"
  },
  {
    pregunta: "¿Qué permisos debe tener el script para que cron lo ejecute?",
    opciones: [
      "755",
      "777",
      "400",
      "600"
    ],
    respuestaCorrecta: "755"
  },
  {
    pregunta: "¿Qué comando se usa para darle permisos de ejecución a un script?",
    opciones: [
      "chmod +x script.sh",
      "permitir script.sh",
      "exec script.sh",
      "bash run script.sh"
    ],
    respuestaCorrecta: "chmod +x script.sh"
  },
  {
    pregunta: "¿Qué comando permite ver si un puerto (como el 514) está abierto y escuchando?",
    opciones: [
      "ss -tulpn | grep 514",
      "ip addr show",
      "ping 514",
      "sudo ls /etc/ports"
    ],
    respuestaCorrecta: "ss -tulpn | grep 514"
  },
  {
    pregunta: "¿Cuál es el propósito del template RemoteLogs en rsyslog?",
    opciones: [
      "Redirigir logs del sistema",
      "Separar logs por cliente usando su hostname",
      "Enviar logs a un sitio web",
      "Actualizar automáticamente los logs"
    ],
    respuestaCorrecta: "Separar logs por cliente usando su hostname"
  },
  {
    pregunta: "¿Qué hace el símbolo `& ~` en la configuración de rsyslog?",
    opciones: [
      "Es un comentario",
      "Indica fin de la configuración",
      "Evita que los logs se dupliquen en syslog general",
      "Activa el filtrado de logs"
    ],
    respuestaCorrecta: "Evita que los logs se dupliquen en syslog general"
  },
  {
    pregunta: "¿Cómo validar si el script se está ejecutando desde cron correctamente?",
    opciones: [
      "nano crontab",
      "tail -f /var/log/eventos_servidor.log",
      "cat /var/run/cron.pid",
      "systemctl status"
    ],
    respuestaCorrecta: "tail -f /var/log/eventos_servidor.log"
  },
  {
    pregunta: "¿Qué nombre se recomienda usar para scripts que se ejecutan automáticamente?",
    opciones: [
      "auto.sh",
      "system_script.sh",
      "registro.sh",
      "/usr/local/bin/archivo.sh"
    ],
    respuestaCorrecta: "/usr/local/bin/archivo.sh"
  },
  {
    pregunta: "¿Qué comando puedes usar para ver la ayuda de rsyslog?",
    opciones: [
      "man rsyslog",
      "rsyslog --help",
      "help rsyslog",
      "rsyslog -manual"
    ],
    respuestaCorrecta: "man rsyslog"
  },
  {
    pregunta: "¿Qué comando usas para reiniciar el servicio rsyslog?",
    opciones: [
      "sudo service syslog restart",
      "sudo rsyslog restart",
      "sudo systemctl restart rsyslog",
      "restart rsyslog"
    ],
    respuestaCorrecta: "sudo systemctl restart rsyslog"
  },
  {
    pregunta: "¿Qué puerto utiliza rsyslog por defecto para TCP y UDP?",
    opciones: [
      "22",
      "514",
      "6514",
      "8080"
    ],
    respuestaCorrecta: "514"
  }
]
