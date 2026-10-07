# Development

## Requirements

- Node.js
- npm
- Android SDK
- JDK compatible with the project
- Android device or emulator
- Root access for Frida Server management
- Magisk

## Setup

```bash
cd app
npm install
npx cap sync android
```

Open the Android project:

```bash
npx cap open android
```

Or build from the command line:

```bash
cd android
./gradlew assembleDebug
```
