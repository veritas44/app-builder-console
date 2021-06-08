# Windows guide (for desktop app)

## Development build

To create a development build, 

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Windows** in the platforms menu
1.  Select **Development** in the build menu
1.  This will launch the development edition of the Windows application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Windows** in the platforms menu
1.  Select **Production** in the build menu
1.  This will build the production edition of the Windows application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/out`

## Production build with code signing

To create a production build with code signing,

1.  Buy a code signing certificate from any CA (certifying authority). A [list of these CAs](https://docs.microsoft.com/en-us/windows-hardware/drivers/dashboard/get-a-code-signing-certificate) can be found at Microsoft docs center
    
2.  Set the following environment variables:
    *  `CSC_LINK` as the absolute path of the .pfx or .p12 certificate
    *  `CSC_KEY_PASSWORD` The password to decrypt the certificate given in `CSC_LINK`.
    
    **cmd**
    ```markdown
    set CSC_LINK=path\to\certificate
    set CSC_KEY_PASSWORD=password
    ```
    **powershell**
    ```markdown
    $Env:CSC_LINK = "path\to\certificate"
    $Env:CSC_KEY_PASSWORD = "password"
    ```

3. Continue building for production by following the [above guide](#production-build)
