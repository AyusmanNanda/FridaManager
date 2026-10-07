# Architecture

Frida Manager uses a simple bridge between the React frontend, the native Android plugin, and the Frida Server managed by the Magisk module.

```mermaid
flowchart LR
    A[React UI] --> B[Capacitor Bridge]
    B --> C[RootPlugin.java]
    C --> D{su}

    D --> E[start.sh]
    D --> F[stop.sh]
    D --> G[status.sh]

    E --> H[frida-server]
    F --> H
    G --> H
```

## Application Flow

```text
React UI
   ↓
Capacitor Bridge
   ↓
RootPlugin
   ↓
su
   ↓
Magisk Module Scripts
   ↓
Frida Server
```

The native plugin is registered in React as:

```ts
const Root = registerPlugin("Root");
```

The available methods are:

```text
Root.test()
Root.start()
Root.stop()
Root.status()
```

The module scripts are located at:

```text
/data/adb/modules/fridamanager/scripts/
```
