# Mac guide (for desktop app)

## Development build

To create a development build, 

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Mac** in the platforms menu
1.  Select **Development** in the build menu
1.  This will launch the development edition of the Mac application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/docs) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
1.  Select **Mac** in the platforms menu
1.  Select **Production** in the build menu
1.  This will build the production edition of the Mac application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/out`

## Production build with code signing

To create a production build with code signing,

1.  Register for an [Apple developer account](https://developer.apple.com/) if you don't have one yet.
    
2.  Generate an application specific password from [Apple ID account page](https://appleid.apple.com/account/home) (Read : [https://support.apple.com/en-gb/HT204397](https://support.apple.com/en-gb/HT204397))  
    
    ![](/SignMac1.png)
    ![](/SignMac2.png)
    ![](/SignMac3.png)
    
3.  Open a terminal and execute the following command :
  ```
  security add-generic-password -a "APPLE ID HERE" -w "APP SPECIFIC PASSWORD HERE" -s "AC_PASSWORD"
  ``` 

  (Replace **APPLE ID HERE** and **APP SPECIFIC PASSWORD HERE** with your Apple ID and app-specific password generated above. Note that **AC\_PASSWORD** is a static identifier and should **NOT** be replaced)
    
4.  Open `XCode > preferences`
    
5.  Open accounts tab
    
6.  Sign in to XCode with the developer account if not done already
    
7.  Click manage certificates  
    
    ![](/SignMac4.png)
8.  Create a new certificate of the type “Developer ID Application”  
    
    ![](/SignMac5.png)
9.  Execute the following command in a terminal: 
  ```
  security find-identity -v -p codesigning
  ``` 
  and copy the correct hash corresponding to **“Developer ID Application”** into your clipboard
    
10.  Execute the following command in a terminal:  
  ```
  export CSC_NAME="Your copied certificate hash"
  ```

11. Continue building for production by following the [above guide](#production-build)
