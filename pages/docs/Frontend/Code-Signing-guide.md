# Code signing
Code signing is necessary to distribute your Android, IOS, MacOS and Windows apps. This could be a tedious process so we have tried to simplify the process by bringing all the resources in one place for ease of access.

## Code signing on IOS:

1.  Open the `.xcworkspace` file located in `<projectName>/ios` folder using XCode.
    
2.  Register for an [Apple developer account](https://developer.apple.com/) if you don't have one yet.
    
3.  Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).  
    
    **Repeat** this step for the **Tests** target in your project  
    
    ![](./images/SignIOS1.png)
    
    Original guide : [https://reactnative.dev/docs/running-on-device#2-configure-code-signing](https://reactnative.dev/docs/running-on-device#2-configure-code-signing)
    

## Code signing on Android:

1.  This [awesome guide](https://reactnative.dev/docs/signed-apk-android) walks you through how to sign code for Android
    

## Code signing on MacOS:

1.  Register for an [Apple developer account](https://developer.apple.com/) if you don't have one yet.
    
2.  Generate an application specific password from [Apple ID account page](https://appleid.apple.com/account/home) (Read : [https://support.apple.com/en-gb/HT204397](https://support.apple.com/en-gb/HT204397))  
    
    ![](./images/SignMac1.png)
    <img src="./images/SignMac2.png" width="50%" />
    <img src="./images/SignMac3.png" width="50%" />
3.  Execute `security add-generic-password -a "<APPLE ID HERE>" -w "<APP SPECIFIC PASSWORD HERE>" -s "AC_PASSWORD"` (Replace **APPLE ID HERE** and **APP SPECIFIC PASSWORD HERE** with your Apple ID and app-specific password generated above. Note that **AC\_PASSWORD** is a static identifier and should **NOT** be replaced)
    
4.  Open `XCode > preferences`
    
5.  Open accounts tab
    
6.  Sign in to XCode with the developer account if not done already
    
7.  Click manage certificates  
    
    ![](./images/SignMac4.png)
8.  Create a new certificate of the type “Developer ID Application”  
    
    ![](./images/SignMac5.png)
9.  Execute `security find-identity -v -p codesigning` and copy the correct hash corresponding to **“Developer ID Application”** into your clipboard
    
10.  Execute `export CSC_NAME="<Your copied certificate hash>"`
    
11.  We can now continue the build process!
    

## Code signing on Windows:

1.  Buy a code signing certificate from any CA (certifying authority). A [list of these CAs](https://docs.microsoft.com/en-us/windows-hardware/drivers/dashboard/get-a-code-signing-certificate) can be found at Microsoft docs center
    
2.  Set the following environment variables: ([how to set environment variables in windows?](https://docs.oracle.com/en/database/oracle/r-enterprise/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0))
    
    1.  `CSC_LINK` as the absolute path of the .pfx or .p12 certificate
        
    2.  `CSC_KEY_PASSWORD` The password to decrypt the certificate given in `CSC_LINK`.
        
3.  We can now continue the build process!