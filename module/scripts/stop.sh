#!/system/bin/sh

if pidof frida-server >/dev/null; then
  pkill frida-server
  sleep 1
  if pidof frida-server >/dev/null; then
    echo "Failed to stop Frida server"
    exit 1
  else
    echo "Frida server stopped"
  fi

else
  echo "Frida server is not running"
fi