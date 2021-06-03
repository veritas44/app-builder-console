# Build Guide
We would have to first build for web and deploy it before we can deploy other platforms. This is because other platforms would require the meeting URL to be shared which can’t be retrieved without deploying the front-end in most cases.

## Step 1: Initializing

1.  Use the [Agora App Builder](https://appbuilder.agora.io) to configure your application and click the download source code button.
  
2.  Host backend and obtain the backend URL (We recommend the one-click deploy to Heroku for ease of use) 
  
3.  Unzip the downloaded folder 
  
4.  Open agora-app-builder directory 
  
5.  Open config.json (will soon be automated using CLI interface) 
  
6.  Set backEndURL to `<herokuapp url>` in config.json 
  
7.  Save the config.json and close editor 
  
8.  Open agora-app-builder folder inside a terminal 
  
9.  Run: `npm install` (this will fetch the latest CLI tool which will start the installation process) 
  
10.  Run: `npm start` (Installation process using CLI) **This process takes a while. You can use `npm run start:info` to view the logs**
  
11.  Run: `cd <projectName>`
  
12.  Run: `npm run web` (For dev version) 
  

## **Step 2: Deploying web:**

1.  Run: npm run web:build 
  
2.  This will create the built website in the `agora-app-builder/<projectName>/dist` directory 
  
3.  This project uses react-router to perform front-end routing. So you need to configure your website host (or webserver) to redirect all the requests to index.html. We have already provided the config for two most popular SPA hosts: [netlify](https://www.netlify.com/) & [vercel](https://vercel.com/)
  <br />

  *Copy paste the appropriate redirect file into dist (which contains index.html and js).*

  **vercel.json** (for vercel)
  ```
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

  **_redirects** (for netlify. It's just `_redirects` no file extension)
  ```
  /* /index.html 200
  ```

  
4.  Drag and drop the dist folder into netlify. (Or use the vercel CLI to deploy to vercel) 
  
5.  You will now get the deployed url. 
  
6.  Set the key frontEndURL to `<the deployed url>` in config.json (**of agora-app-builder directory**) 
  
7.  Run: npm start in **agora-app-builder directory** (rebuilds the source code with the new front-end URL) 
  
8.  **Now any other target can be built - (IOS, Android, Mac, Windows, Linux) - This is because the Apps require the frontend URL (universal links)** 
  

## **Step 3: Deploying other platforms:** 

 **Windows/Mac/Linux:** 

1.  Navigate to the frontend directory `agora-app-builder/<projectName>/` in a terminal 
2.  Create an empty folder called `.electron` here 
3.  Run `npm windows` or `npm run mac` for development build 
4.  For Code Signing, refer to this guide: https://github.com/AgoraIO-Community/app-builder-docs/wiki/Code-Signing-guide
5.  Run `npm run windows:build` or `npm run mac:build` for production release (exe/dmg) 
6.  The binary will be located at `agora-app-builder/<projectName>/out`


**Android:** 

1.  Connect your Android device to system with debugging on 
2.  Type adb devices to verify if the device is connected 
3.  Navigate to the frontend directory `agora-app-builder/<projectName>/` in a terminal 
4.  Run `npm start` **–** This will start the development server 
5.  Open another terminal in the same folder 
6.  Run `npm run android` \- This will deploy the app on the Android device. (The app will connect to development server) 
7.  For Code Signing, refer to this guide: https://github.com/AgoraIO-Community/app-builder-docs/wiki/Code-Signing-guide
8.  To deploy,  go to the `<projectName>/android` folder and run `./gradlew build assembleRelease`


**IOS** 

1.  Connect IOS device to system, create apple developer account and registed device for development 
2.  Run `npx pod-install`
3.  Open the `.xcworkspace` file located in `<projectName>/ios` folder using XCode.
4.  Open the info tab and add the following: 

    1.  Camera permission – **Privacy Camera description** 
      
    2.  Mic permission – **Privacy Microphone description** 
      
    3.  Add a new URI scheme – set scheme as **lowercase** version of projectName (for deep links) 
5.  Run the project by clicking the Run button in Xcode 
6.  Note Simulators won’t work since IOS simulator can’t access camera
7.  For Code Signing, refer to this guide: https://github.com/AgoraIO-Community/app-builder-docs/wiki/Code-Signing-guide

**Troubleshooting:**

1. If `npx pod-install` fails, run `npm audit fix` and run `npx pod-install` again
2. If you're getting the following error: ![iOS1](/iOS1.jpeg)

​    Do the following:

1. Create a new file called File.swift using xcode![iOS2](/iOS2.png)

2. Create a swift file and click next ![iOS3](/iOS3.png) <br /> ![iOS4](/iOS4.png)

3. Make sure to select the option "Create Bridging Header" ![iOS5](/iOS5.png)

4. If you cannot see the app changes on mobile, try clearing the metro cache. Remove `$TMPDIR/metro-cache`
