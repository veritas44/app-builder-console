# Linux guide (for desktop app)

## Development build

To create a development build, 

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    ![](/docAssets/Linux_Build.png)
1.  Select **Linux** in the platforms menu
    ![](/docAssets/Linux_Platform.png)
1.  Select **Development** in the build menu
    ![](/docAssets/Linux_Type_Development.png)
1.  This will launch the development edition of the Linux application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    ![](/docAssets/Linux_Build.png)
1.  Select **Linux** in the platforms menu
    ![](/docAssets/Linux_Platform.png)
1.  Select **Production** in the build menu
    ![](/docAssets/Linux_Type_Production.png)
1.  This will build the production edition of the Linux application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/out`