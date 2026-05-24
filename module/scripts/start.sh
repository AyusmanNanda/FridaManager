#!/system/bin/sh
MODDIR=${0%/*}
FRIDA_BIN="$MODDIR/../bin/frida-server"

if pidof frida-server >/dev/null; then
  echo "Frida server already running"
  exit 0
fi

if [ ! -f "$FRIDA_BIN" ]; then
  echo "Frida server binary not found"
  exit 1
fi

chmod 755 "$FRIDA_BIN"

"$FRIDA_BIN" &
sleep 1

if pidof frida-server >/dev/null; then
  echo "Frida server started"
else
  echo "Failed to start Frida server"
  exit 1
fi