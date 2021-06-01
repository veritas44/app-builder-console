# How to Setup PSTN
## Step 1: Contact Turbobridge

Contact turbobridge to get access to credentials. https://www.turbobridge.com/contact.html



## Step 2: Login to Dashboard

Go to dids.turbobridge.com. Login using your login credentials. Choose a DID number and click on the edit button. 

![PSTN1](/PSTN1.png)



## Step 3: Set Backend URL

You will need to set the url parameter to the pstnHandler route in your backend url and click save. 

![PSTN2](/PSTN2.png)

Swap out example.com with the url of the backend you have deployed.



## Step 4: Set PSTN Number

You will need to set the PSTN_NUMBER variable as the DID number in your dashboard either through config.json or through an environment variable