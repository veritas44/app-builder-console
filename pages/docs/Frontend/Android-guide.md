# Android guide

## Development build

To create a development build, 

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Android** in the platforms menu
1.  Select **Development** in the build menu
1.  This will launch the development edition of the Android application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Android** in the platforms menu
1.  Select **Production** in the build menu
1.  This will build the production edition of the Android application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/android/app/build/outputs/apk/release`

## Production build with code signing

To create a production build with code signing,

1. Set up environment variables for code signing by following [this guide](https://reactnative.dev/docs/signed-apk-android)

2. Continue building for production by following the [above guide](#production-build)
