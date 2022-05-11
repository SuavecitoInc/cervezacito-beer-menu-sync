# Cerveza Cito Beer Menu Sync

> Simple React/Electron App to trigger Lambda function that creates/publishes/unpublishes products based on data received from untappd API.

<p align="center">
    <img src="./src/assets/logo.png" alt="Cerveza Cito" width="200" />
</p>

## Config

`/src/config.ts`

```bash
export const LAMBDA_ENDPOINT = "LAMBDA_ENDPOINT"
```

## Build

> For whatever reason electron forge ignores its own config and will only create an app for the platform you are currently on, so we must use the cli instead.

### Package

macOS x64

```bash
npx electron-forge package --arch=x64 --platform=darwin
```

macOS arm64

```bash
npx electron-forge package --arch=arm64 --platform=darwin
```

### Make

macOS x64

```bash
npx electron-forge make --arch=x64 --platform=darwin
```

macOS arm64

```bash
npx electron-forge make --arch=arm64 --platform=darwin
```
