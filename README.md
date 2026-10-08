<p align="center">
  <img src="docs/assets/" width="72" alt="Frida Manager logo" />
</p>

<h1 align="center">Frida Manager</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Capacitor-119EFF?logo=capacitor&logoColor=white" alt="Capacitor" />
  <img src="https://img.shields.io/badge/Magisk-00AF9C?logo=magisk&logoColor=white" alt="Magisk" />
</p>

<p align="center">
  A proof-of-concept Android application for managing a root-level Frida server through a Magisk module.
</p>

---

## Overview

Frida Manager provides a simple Android interface for controlling a `frida-server` instance installed through a Magisk module.

The application uses React, TypeScript, Vite, Capacitor, Java, and `su` to communicate with the module.

### Features

- Start Frida Server
- Stop Frida Server
- Check Frida Server status
- Test the Android bridge

## Architecture

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

See the [Architecture](docs/architecture.md) documentation for details.

## Project Structure

```text
FridaManager/
├── app/
├── module/
├── docs/
└── README.md
```

## Requirements

- Rooted Android device
- Magisk
- Node.js and npm
- Android SDK
- Compatible JDK

The Magisk module is expected at:

```text
/data/adb/modules/fridamanager/
```

## Development

```bash
cd app
npm install
npx cap sync android
npx cap open android
```

Or build with:

```bash
cd android
./gradlew assembleDebug
```

See the [Development Guide](docs/development.md) for more information.

## Testing

See the [Testing Guide](docs/testing.md).

## Documentation

- [Architecture](docs/architecture.md)
- [Android Plugin](docs/android-plugin.md)
- [Magisk Module](docs/magisk-module.md)
- [Development](docs/development.md)
- [Testing](docs/testing.md)

## Limitations

- Proof-of-concept
- Root access is required
- Manages a single `frida-server` instance
- Requires the Magisk module at `/data/adb/modules/fridamanager/`
- Frida Server management relies on module shell scripts

## Tech Stack

**Frontend:** React, TypeScript, Vite

**Android:** Java, Android SDK, Capacitor

**Root / Module:** Magisk, shell scripts

**Instrumentation:** Frida Server

## License

This project is licensed under the [MIT License](LICENSE).
