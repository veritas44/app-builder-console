# Setup Authentication on App Builder



Table of Contents:

1. [Google](/docs/Backend/Authentication#setup-authentication-with-google)
2. [Microsoft](/docs/Backend/Authentication#setup-authentication-with-microsoft)
3. [Slack](/docs/Backend/Authentication#setup-authentication-with-slack)
4. [Apple](/docs/Backend/Authentication#setup-authentication-with-apple)



## Setup authentication with Google



If you're using Google OAuth, here's what you'll need to do to get the credentials. 

1. Go to the [Credentials page](https://console.developers.google.com/apis/credentials).
2. Click **Create credentials > OAuth client ID**.
3. Select the **Web application** application type.
4. Name your OAuth 2.0 client and click **Create**

After configuration is complete, take note of the client ID and client Secret that was created. 

Next, go to the consent screen page https://console.developers.google.com/apis/credentials/consent and click edit. 

![OAUTH1](/OAUTH1.png)

Next, go to Authorized Domains and add your frontend URL. 

![OAUTH2](/OAUTH2.png)

Next, go to Credentials, and click the edit button.

![OAUTH3](/OAUTH3.png)

Add your backend URL to the Authorized redirect URIs with the following route: ```/oauth```



After you get your Client ID and Client Secret, you can directly enter them inside your project using the App Builder console.

If you opt for the manual deployment, then you need to add the following credentials:

Set ```ENABLE_GOOGLE_OAUTH``` to true

Set ```GOOGLE_CLIENT_ID``` to the client id you got above

Set ```GOOGLE_CLIENT_SECRET``` to the client secret you got above



## Setup authentication with Microsoft



Login with your microsoft account at https://portal.azure.com/#home. To get your credentials, follow the steps from this guide: https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app



After you get your Client ID and Client Secret, you can directly enter them inside your project using the App Builder console.

<br />

If you opt for the manual deployment, then you need to add the following credentials:

Set ```ENABLE_MICROSOFT_OAUTH``` to true

Set ```MICROSOFT_CLIENT_ID``` to the client id you got above

Set ```MICROSOFT_CLIENT_SECRET``` to the client secret you got above



## Setup authentication with Slack

To have OAuth using Slack, you need to setup your own Slack App. To do that, go to the following URL: https://api.slack.com/apps. Make sure you're signed into your Slack Account. 

1. Click on "Create an App"
   ![SLACK1](/SLACK1.png)
2. Click on "From Scratch"
   ![SLACK2](/SLACK2.png)
3. Enter the name of your app and choose your workspace
   ![SLACK3](/SLACK3.png)
4. After you click on "Create App", you should be able to your App's page. Scroll down to see your app's credentials. You can see your App's Client ID and Client Secret. You can directly enter them inside your project using the App Builder console.

<br />

If you opt for the manual deployment, then you need to add the following credentials:

Set ```ENABLE_SLACK_OAUTH``` to true

Set ```SLACK_CLIENT_ID``` to the client id you got above

Set ```SLACK_CLIENT_SECRET``` to the client secret you got above



## Setup authentication with Apple

To set up authentication using Apple, you need to have an [Apple Developer Account](https://developer.apple.com/). After you have that setup, login to your account and follow the following steps:

1. You need to navigate to the **Certificates, Identifiers and Profiles** page. 
   ![APPLE1](/APPLE1.png)
2. Click on **Identifiers** in the left menu.
   ![APPLE2](/APPLE2.png)
3. Click on the blue icon next to Identifiers, select App IDs, and click Continue. 
   ![APPLE3](/APPLE3.png)
4. Select the type as App and click Continue
5. Enter a description and bundle ID of your choice. *Example for Bundle ID: com.companyname.appname*
6. Scroll down the Capabilities section and select "Sign In with Apple." 
   ![APPLE4](/APPLE4.png)
7. Click on the Continue button on the top and then click on Register.
8. Now, go back to the Identifier page on Step 3 and click on the blue icon again. This time, select Services IDs and click Continue.
9. Enter a description and identifier of your choice. This identifier will be in a similar format as the Bundle ID from earlier. Make sure to save this identifier. This will be your Client ID for the application. 
10. Click on Continue and then click on the Register button. 
11. Go back to the Identifiers page. This time, on the left menu, click on **Keys**.
    ![APPLE5](/APPLE5.png)
12. Click on the blue icon next to Keys.
    ![APPLE6](/APPLE6.png)
13. Enter a Key Name of your choice. 
14. Select "Sign in with Apple" and then click Configure 
    ![APPLE7](/APPLE7.png)
15. On the Configure Key page, select the App ID you created on Step 5 and set that as your primary key. Click on Save
16. You'll be taken back to the "Register a New Key" page. Click on Continue and then click on Register. 
17. Make sure to copy the Key ID since you will need it later and then click Download (You can only do this once, so make sure it is stored safely) 
    ![APPLE8](/APPLE8.png)
18. Click on Done
19. Finally, you will need your Team ID, which you can get from the top right corner of your portal. Copy everything following the hyphen as your Team ID. 
    ![APPLE9](/APPLE9.png)



You can now enter your details in the console. 

![APPLE10](/APPLE10.png)

The Apple Client ID is the Client ID that you got in Step 9

The Apple Key ID is the Key ID that you got in Step 17

The Apple private key is the entirety of the file that you downloaded on Step 17. The file typically looks like

```
-----BEGIN PRIVATE KEY-----
private key contents
-----END PRIVATE KEY-----
```

 Make sure to include the entirety of the file, including the ```---BEGIN PRIVATE KEY---``` and ```---END PRIVATE KEY---``` bits. 

The Apple Team ID is the Team ID that you got in Step 19

<br />

If you opt for the manual deployment, then you need to add the following credentials:

Set ```ENABLE_APPLE_OAUTH``` to true

Set ```APPLE_CLIENT_ID``` to the client id you got above

Set ```APPLE_KEY_ID``` to the key id you got above

Set ```APPLE_PRIVATE_KEY``` to the private key you got above

Set ```APPLE_TEAM_ID``` to the team id you got above.