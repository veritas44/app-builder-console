# Setting up a Custom Domain
To add your own custom domain to the app builder website you've deployed, we'll go over adding the domain to Vercel and setting up the DNS records.
## Step 1: Adding the domain to Vercel

1.  Open your [Vercel Dashboard](https://vercel.com/dashboard) and click on the project corresponding to the app builder deployment. (It's a string which looks like this - `ckpllk6ad245734pjy09c057dx`)
  
2.  On the project page, click on `View Domains`.
  
3.  Enter your custom domain in the input box and click on `Add`.
  
4.  In the pop-up, select the recommended option - `Add www.<yourdomain.com> and redirect <yourdomain.com> to it` and click on add.
  
5.  You'll see two new domains entries - `<www.yourdomain.com>` and `<yourdomain.com>` with an error reading `Invalid configuration`. We'll update the DNS records to fix it.

## Step 2: Setting up DNS records for your domain
This step varies for each domain provider, but you should be able to follow the same general instructions.
  
0.  If you haven't already bought a domain, you can do so now using your preferred domain provider.

1.  Log in to your account on the domain provider's website and select your domain. Look for the DNS settings. This might be under advanced settings for some providers.
  
2.  Edit or Add a new **A record** like so:

    |Type   |Name |Value      |
    |-------|-----|-----------|
    |A      |@    |76.76.21.21|

3.  Edit or Add a new **CNAME record** like so:

    |Type   |Name |Value                |
    |-------|-----|---------------------|
    |CNAME  |www  |cname.vercel-dns.com |

4.  That's it, depending on your provider, it might take some time for the changes to apply. Check Vercel in a couple hours, the error should go away and your domain should now point to your app builder deployment.

If you're stuck try searching for `how to update DNS records for <your domain provider>`
