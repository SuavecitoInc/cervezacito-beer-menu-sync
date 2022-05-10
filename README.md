# Cerveza Cito Beer Menu Sync

<img src="./src/assets/logo.png" alt="Cerveza Cito"/>

## Build

> For whatever reason electron forge ignores its own config file and will only create for the platform you are currently on, so we must use the cli instead.

macOS x64

```bash
npx electron-forge package --arch=x64 --platform=darwin
```

macOS arm64

```bash
npx electron-forge package --arch=arm64 --platform=darwin
```
