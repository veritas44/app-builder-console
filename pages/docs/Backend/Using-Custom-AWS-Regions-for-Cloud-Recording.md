# Custom AWS Regions
By Default, the backend assumes that you are using US_EAST_1 as the region on AWS for Cloud Recording. In case you want to use a different region on AWS, you need to follow this guide.

**Important Note:**   
We are only referring to the region for which the S3 bucket for Cloud Recoding is used. If you're using AWS for something else like EC2 for hosting the backend, the region is irrelevant and can be anything you choose.

To choose a different region, you need to set an environment variable called `RECORDING_REGION`. It needs to be set to a number corresponding to the following:

```
0: US_EAST_1
1: US_EAST_2
2: US_WEST_1 
3: US_WEST_2 
4: EU_WEST_1
5: EU_WEST_2
6: EU_WEST_3
7: EU_CENTRAL_1
8: AP_SOUTHEAST_1
9: AP_SOUTHEAST_2
10: AP_NORTHEAST_1
11: AP_NORTHEAST_2
12: SA_EAST_1
13: CA_CENTRAL_1
14: AP_SOUTH_1
15: CN_NORTH_1
16: CN_NORTHWEST_1
17: US_GOV_WEST_1
```

So if your region is US_WEST_1, you will need to set the following environment variable: `RECORDING_REGION=2`

