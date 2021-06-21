# iOS guide

## Development build

To create a development build, 

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    ![](/docAssets/Linux_Build.png)
1.  Select **iOS** in the platforms menu
    ![](/docAssets/iOS_Platform.png)
1.  Select **Development** in the build menu
    ![](/docAssets/Linux_Type_Development.png)
1.  Xcode will now launch with your app
1.  Select your project in the Xcode project navigator
1.  Type in a bundle id and build number for your project
1.  To configure automatic signing,
    1.  Navigate to signing and capabilities
    1.  Select your signing team
1.  Select your device on the top bar and press build
1.  This will launch the development edition of the application on your iOS device

## Production build with code signing

To create a production build,

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    ![](/docAssets/Linux_Build.png)
1.  Select **iOS** in the platforms menu
    ![](/docAssets/iOS_Platform.png)
1.  Select **Production** in the build menu
    ![](/docAssets/Linux_Type_Production.png)
1.  Xcode will now launch with your app
1.  Select your project in the Xcode project navigator
1.  Type in a bundle id and build number for your project
1.  To configure automatic signing,
    1.  Navigate to signing and capabilities
    1.  Select your signing team
1.  To enable deep links, 
    1.  Set up the web deployment according to [this guide](/docs/Frontend/Web-guide#production-build)
    1.  Navigate to Build Phases > Copy Bundle Resources and select `<PRODUCT_ID>.entitlements`
1.  Select the connected iOS device on the top panel
1.  Select Product > Archive. This will create a new distributable archive
1.  Select Window > Organizer. You should see all your archives listed here
1.  Select Distribute app > App Store Connect to start the export wizard for testflight