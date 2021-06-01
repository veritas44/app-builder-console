# Environment setup

You would need the following installed and configured properly in order for the app builder to build successfully

 ## Common setup:

1.  [NodeJS v12(LTS)](https://nodejs.org/en/) (recommended to use with nvm for developers - [Linux/Mac](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows) )
    
2.  [git](https://git-scm.com/downloads)
    

 ## To build for web:

*   No extra steps
    

 ## To build for linux desktop:

*   No extra steps
    

 ## To build for mac desktop:

*   [Xcode](https://apps.apple.com/in/app/xcode/id497799835?mt=12) and XCode CLI tools
    

 ## To build for windows desktop:

*   [Windows Build tools](https://www.npmjs.com/package/windows-build-tools)
    

 ## To build for Android app:

*   [Android Studio](https://developer.android.com/studio) to build android apps and the [necessary environment variables for react native](https://reactnative.dev/docs/environment-setup) to detect your android studio. **(NOTE: Please see instructions for react-native-cli NOT expo-cli)**
    
*   [Setting up adb for running on a physical device](https://reactnative.dev/docs/running-on-device)
    

 ## To build for IOS app:

*   Apple developer account
    
*   [Xcode and XCode CLI tools](https://reactnative.dev/docs/environment-setup) **(NOTE: Please see instructions for react-native-cli NOT expo-cli)**
    
*   An iPhone registered as a development device (Simulator doesn’t have access to camera so a physical device is mandatory)