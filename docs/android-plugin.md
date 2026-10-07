# Android Plugin

Frida Manager uses a custom Capacitor plugin named `Root`.

```java
@CapacitorPlugin(name = "Root")
public class RootPlugin extends Plugin
```

## Methods

| Method | Action | Purpose |
| --- | --- | --- |
| `Root.test()` | Native log | Test the bridge |
| `Root.start()` | `start.sh` | Start Frida Server |
| `Root.stop()` | `stop.sh` | Stop Frida Server |
| `Root.status()` | `status.sh` | Check Frida Server status |

The plugin executes the module scripts through `su`:

```text
su -c
```

The scripts are located at:

```text
/data/adb/modules/fridamanager/scripts/
```

Script output and exit codes are returned to the React application.
