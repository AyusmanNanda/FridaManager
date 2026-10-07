# Magisk Module

Frida Manager expects the Magisk module to be installed at:

```text
/data/adb/modules/fridamanager/
```

## Structure

```text
fridamanager/
├── bin/
│   └── frida-server
└── scripts/
    ├── start.sh
    ├── stop.sh
    └── status.sh
```

## Scripts

### `start.sh`

Starts `frida-server` if it is not already running.

It verifies that the binary exists and confirms that the process started successfully.

### `stop.sh`

Stops the running `frida-server` process and verifies that it has stopped.

### `status.sh`

Checks the `frida-server` process using `pidof`.

Output:

```text
running (PID)
```

or:

```text
stopped
```

## Permissions

```bash
chmod 755 /data/adb/modules/fridamanager/scripts/*.sh
chmod 755 /data/adb/modules/fridamanager/bin/frida-server
```
