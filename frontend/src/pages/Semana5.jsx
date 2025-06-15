import React from 'react'
import '../styles/pages/Semana1.css'
import SemanaCard from '../components/SemanaCard'

const Semana5 = () => {
  return (
    <div className="semana1-container" style={{ minHeight: '100vh', width: '100vw', padding: '2rem', boxSizing: 'border-box' }}>
      <SemanaCard
        titulo="Semana 5: Servidor Syslog con Múltiples Clientes"
        descripcion="Configuramos un servidor rsyslog que recibe logs de 2 clientes Linux. Todo es automático gracias a cron."
        video="https://youtu.be/ENLACE_VIDEO"
        quiz="/quiz/semana5"
      />

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Aprender a instalar rsyslog en servidor y clientes.</li>
          <li>Configurar el servidor para recibir registros de varias máquinas.</li>
          <li>Programar tareas automáticas usando cron.</li>
        </ul>

        <h2>🧰 Requisitos</h2>
        <ul>
          <li>1 máquina Linux como servidor.</li>
          <li>2 máquinas Linux como clientes (Ubuntu, Debian o Kali).</li>
          <li>Conexión de red entre las máquinas (usa ping para probar).</li>
        </ul>

        <section style={{ marginTop: '2rem' }}>
          <h2>📌 Personalización de la IP del Servidor</h2>
          <p>
            Para esta práctica, cada estudiante o grupo debe asignar una IP estática al servidor,
            preferiblemente usando su número de cédula para que sea única.
          </p>
          <ul>
            <li>Ejemplo: si tu cédula es <code>0102345678</code>, puedes usar la IP <code>192.168.10.78</code>.</li>
            <li>Reemplaza la IP <code>192.168.138.171</code> en todos los scripts por la tuya propia.</li>
            <li>Puedes usar un hostname (ej: <code>servidor-jose</code>) si ya lo tienes en la red.</li>
            <li>Verifica conectividad con <code>ping</code> desde los clientes.</li>
            <li>Usa la misma IP en <code>/etc/rsyslog.conf</code> y en los scripts de logger.</li>
          </ul>
        </section>

        <h2>🔧 Servidor: Paso a paso</h2>
        <ol>
          <li>
            <strong>Instalamos rsyslog:</strong>
            <pre>{`sudo apt update
sudo apt install rsyslog -y
sudo systemctl enable rsyslog
sudo systemctl start rsyslog`}</pre>
          </li>
          <li>
            <strong>Activamos recepción de logs por red:</strong>
            <p>Edita <code>/etc/rsyslog.conf</code> y descomenta/agrega estas líneas:</p>
            <pre>{`module(load="imudp")
input(type="imudp" port="514")
module(load="imtcp")
input(type="imtcp" port="514")`}</pre>
          </li>
          <li>
            <strong>Guardamos los logs por nombre de cliente:</strong>
            <pre>{`sudo nano /etc/rsyslog.d/01-remotelogs.conf`}</pre>
            <pre>{`template(name="RemoteLogs" type="string" string="/var/log/remotelogs/%HOSTNAME%.log")
*.* ?RemoteLogs
& ~`}</pre>
          </li>
          <li>
            <strong>Preparamos carpeta y reiniciamos el servicio:</strong>
            <pre>{`sudo mkdir /var/log/remotelogs
sudo chmod 755 /var/log/remotelogs
sudo systemctl restart rsyslog`}</pre>
          </li>
          <li>
            <strong>Script para contar clientes conectados cada 15 minutos:</strong>
            <pre>{`sudo nano /usr/local/bin/registrar_eventos.sh`}</pre>
            <pre>{`#!/bin/bash
LOG="/var/log/eventos_servidor.log"
echo "$(date '+%Y-%m-%d %H:%M:%S') - Clientes activos: $(ls /var/log/remotelogs/ | wc -l)" >> $LOG`}</pre>
            <pre>{`sudo chmod +x /usr/local/bin/registrar_eventos.sh
sudo crontab -e`}</pre>
            <p>Agregamos esto al cron:</p>
            <pre>{`*/15 * * * * /usr/local/bin/registrar_eventos.sh`}</pre>
          </li>
        </ol>

        <h2>🧑‍💻 Cliente 1: Paso a paso</h2>
        <ol>
          <li>
            <strong>Instalamos rsyslog:</strong>
            <pre>{`sudo apt install rsyslog -y
sudo systemctl enable rsyslog
sudo systemctl start rsyslog`}</pre>
          </li>
          <li>
            <strong>Script de monitoreo:</strong>
            <p>Guardará un log local en texto plano.</p>
            <pre>{`nano /home/cliente1/monitor1.sh`}</pre>
            <pre>{`#!/bin/bash
LOG="/home/cliente1/cliente1.log"
{
  echo "======= Monitoreo Cliente1 ======="
  echo "Fecha: $(date)"
  echo "Uso RAM: $(free -h | grep Mem | awk '{print $3}')"
  echo "Espacio Disco: $(df -h / | tail -1 | awk '{print $4}')"
  echo "Carga CPU: $(uptime | awk -F 'load average:' '{print $2}')"
  echo "Usuarios Activos: $(who | wc -l)"
  echo "=================================="
  echo ""
} >> $LOG`}</pre>
            <pre>{`chmod +x /home/cliente1/monitor1.sh
crontab -e`}</pre>
            <p>Agregamos esta línea al cron para ejecutarlo cada 5 minutos:</p>
            <pre>{`*/5 * * * * /home/cliente1/monitor1.sh`}</pre>
          </li>
          <li>
            <strong>Envío automático al servidor:</strong>
            <pre>{`*/10 * * * * bash -c 'while read linea; do logger -n 192.168.138.171 -P 514 -t cliente1 "$linea"; done < /home/cliente1/cliente1.log'`}</pre>
          </li>
          <li>
            <strong>Configuramos rsyslog para enviar por UDP:</strong>
            <pre>{`sudo nano /etc/rsyslog.conf`}</pre>
            <pre>{`*.* @192.168.138.171:514
sudo systemctl restart rsyslog`}</pre>
          </li>
        </ol>

        <h2>👩‍💻 Cliente 2: Paso a paso</h2>
        <ol>
          <li>
            <strong>Instalamos rsyslog:</strong>
            <pre>{`sudo apt install rsyslog -y
sudo systemctl enable rsyslog
sudo systemctl start rsyslog`}</pre>
          </li>
          <li>
            <strong>Script de monitoreo con otras variables:</strong>
            <pre>{`nano /home/cliente2/monitor2.sh`}</pre>
            <pre>{`#!/bin/bash
LOG="/home/cliente2/cliente2.log"
{
  echo "======= Monitoreo Cliente2 ======="
  echo "Fecha: $(date)"
  echo "Tiempo encendido: $(uptime -p)"
  echo "Uso RAM: $(free -h | awk '/Mem:/ {print $3 " de " $2}')"
  echo "Espacio libre en disco: $(df -h / | awk 'NR==2{print $4}')"
  echo "Sesiones activas: $(who | wc -l)"
  echo "=================================="
  echo ""
} >> $LOG`}</pre>
            <pre>{`chmod +x /home/cliente2/monitor2.sh
crontab -e`}</pre>
            <pre>{`*/5 * * * * /home/cliente2/monitor2.sh
*/10 * * * * bash -c 'while read linea; do logger -n 192.168.138.171 -P 514 -t cliente2 "$linea"; done < /home/cliente2/cliente2.log'`}</pre>
          </li>
          <li>
            <strong>Configuración rsyslog:</strong>
            <pre>{`sudo nano /etc/rsyslog.conf`}</pre>
            <pre>{`*.* @192.168.138.171:514
sudo systemctl restart rsyslog`}</pre>
          </li>
        </ol>

        <h2>✅ Validaciones finales</h2>
        <ul>
          <li>
            Ver logs en vivo desde el servidor:
            <pre>{`tail -f /var/log/remotelogs/*.log`}</pre>
          </li>
          <li>
            Ver eventos del contador de clientes:
            <pre>{`tail -f /var/log/eventos_servidor.log`}</pre>
          </li>
        </ul>

        <h2>📚 Conclusión</h2>
        <p>
          Ahora tienes un sistema completo de monitoreo con rsyslog y cron. Cada cliente genera su propio log y lo envía automáticamente al servidor. ¡Y todo sin mover un dedo después de configurarlo!
        </p>
      </section>
    </div>
  )
}

export default Semana5
