# Deploy to Vercel using the CLI
If you're building the project locally using the source code, we'll go over how to deploy your website to Vercel using the Vercel CLI.

We're assuming you've already downloaded the source code, used the CLI to generate the project and have been able to build and test the website locally.

## Build and deploy to Vercel

1.  Install the Vercel CLI using `npm i -g vercel`.

2.  Navigate to your frontend project directory & run `npm run web:build`.
  
3.  Navigate to `/dist` and create a new file `vercel.json` and paste the following inside:

  ```
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

4. Run `vercel` in a terminal
  
5.  You'll see the Vercel CLI load and ask a few questions. To setup they project, hit enter. Select your scope and hit enter. 
  
6.  If you want to link to an existing vercel project you can type in the project name. If not just hit enter to create a new project, next type a name for your project and hit enter again.

7.  When you're asked "In which directory is your code located?" just hit enter (as we're already in `/dist`). You don't need to override any settings when prompted, hit enter to skip.

8.  Once the build is complete you should see a link to your deployment in the CLI.