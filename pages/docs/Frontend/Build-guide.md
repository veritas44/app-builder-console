
# Quickstart Guide

Once you have customized your application with Agora App Builder, you can launch your Web app directly through the visual designer with our 1-click deploy integrations for Heroku and Vercel. 

This guide helps you get started with your web app as well as build your app for other Mobile and Desktop platforms.

## Step 1: Customize and launch your web app 🛠

1.  Use the  [Agora App Builder](https://appbuilder.agora.io/)  to customize your app. 
2. Deploy through Heroku and Vercel using the **Deploy Your App** button.
![](/docAssets/DeploySuccess.png)
3. Congrats! You have a Live Video Meeting Web app!  🎉


## Step 2: Test and launch native apps! (optional) 🚀
1.  Click the **Download Source Code** button on the App Builder.
2.  Unzip the downloaded folder
3.  Open the agora-app-builder folder inside Terminal or Command Prompt. 
4.  Set up your development environment by following [this guide](/docs/Frontend/Environment-setup)
5.  Run the following command: **`npm i && npm start`** 
![](/docAssets/CLIStart.png)
6.  This will launch the App Builder CLI, where you can install and build your applications. The App Builder CLI allows you to easily Install and Build apps.
![](/docAssets/CLILaunched.png)
7. First, you have to install the codebase onto your local machine. Press Enter to start the installation.
![](/docAssets/CLIInstall.png)

10. Once the codebase is installed, you are ready to try your application!
11. Go to the 'Build' option in the CLI (using the down arrow key 👇)
12. Hit enter on the platform you wish to test on. 
13. Choose Development build if you are looking to test the app out. Once you are ready to pass it to others, choose Production build.
![](/docAssets/CLIBuild.png)

## Step 3: Distribute your app! 📲	(Optional)

* To distribute the app to a CDN like Vercel or Netlify, You can refer to our detailed build guide [here](/docs/Frontend/Build-guide#step-2-deploying-web)

* If you want to submit this app to the App Store or Play Store, follow [this guide](https://appbuilder.agora.io/docs/Frontend/Code-Signing-guide#code-signing-on-ios) to codesign your app, to adhere to the requirements from Apple and Google.
