#!/system/bin/sh

PID=$(pidof frida-server)

if [ -n "$PID" ]; then
  echo "running ($PID)"
else
  echo "stopped"
fi