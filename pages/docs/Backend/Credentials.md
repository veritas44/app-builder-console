# Setup credentials



### Step 1: Get the Agora Credentials



- To get the App ID, you can follow the following guide: https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#getappid

- To get the App Certificate, you can refer to this: https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#generate-a-token
- To get Customer ID and Customer Certificate, you can refer this: https://docs.agora.io/en/faq/restful_authentication



### Step 2: Get AWS Credentials



First, you need to create an S3 bucket. This is where all your recording will be stored. You can refer to this guide on how to do that: https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html

Here's a guide on generating your access key and access secret: https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys



### Step 3: Setup Project name on the backend

You need to set SCHEME as the project name that was set in the [console](https://appbuilder.agora.io)





### Step 4: Get OAuth Credentials

If you're using Google OAuth, here's what you'll need to do to get the credentials. 

1. Go to the [Credentials page](https://console.developers.google.com/apis/credentials).
2. Click **Create credentials > OAuth client ID**.
3. Select the **Web application** application type.
4. Name your OAuth 2.0 client and click **Create**

After configuration is complete, take note of the client ID and client Secret that was created. You'll need to set them as the variables  CLIENT_ID and CLIENT_SECRET in the configuration file or as environment variables. 

#### Now, to setup the OAuth.

First, go to the consent screen page https://console.developers.google.com/apis/credentials/consent and click edit. 

![OAUTH1](images/OAUTH1.png)



Next, go to Authorized Domains and add your frontend URL. 

![OAUTH2](images/OAUTH2.png)



Next, go to Credentials, and click the edit button.

![OAUTH3](images/OAUTH3.png)



Add your backend URL to the Authorized redirect URIs with the following routes. 

1. /oauth/web
2. /oauth/desktop
3. /oauth/mobile

![OAUTH4](images/OAUTH4.png)

Replace example.com with your backend URL. 



## Example configuration file 

```json
{
    "APP_ID": "",
    "APP_CERTIFICATE": "",
    "CUSTOMER_ID": "",
    "CUSTOMER_CERTIFICATE": "",
    "BUCKET_NAME": "",
    "BUCKET_ACCESS_KEY": "",
    "BUCKET_ACCESS_SECRET": "",
    "CLIENT_ID": "",
    "CLIENT_SECRET": "",
    "PSTN_USERNAME": "",
    "PSTN_PASSWORD": "",
    "PSTN_NUMBER": "",
    "SCHEME": "",
    "ALLOWED_ORIGIN": "",
    "ENABLE_NEWRELIC_MONITORING": false,
    "RUN_MIGRATION": true,
    "ENABLE_OAUTH": true
}
```



For APP_ID, APP_CERTIFICATE, CUSTOMER_ID and CUSTOMER_CERTIFICATE, follow Step 1

For BUCKET_NAME, BUCKET_ACCESS_KEY AND BUCKET_ACCESS_SECRET, follow Step 2

For CLIENT_ID and CLIENT_SECRET follow Step 4

For PSTN_USERNAME, PSTN_PASSWORD and PSTN_NUMBER follow our [PSTN Guide](https://github.com/AgoraIO-Community/app-builder-docs/wiki/How-to-Setup-PSTN)

For SCHEME, follow Step 3

For ALLOWED_ORIGIN, you can set it as the frontend URL for better security. It is used for setting the CORS header on the backend. Not setting it will default to allowing any frontend URL to send the request to the backend. 

For ENABLE_NEWRELIC_MONITORING, setting it to true will allow you to use New Relic for monitoring. 

For RUN_MIGRATION, setting it to true will run the database migration before starting the server. Setting it as false, will run the server without runnning the database migration.

For ENABLE_OAUTH, setting it as false will disable authentication on the backend. 