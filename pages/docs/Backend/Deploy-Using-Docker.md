 # Deploy using docker
 ## Step 1: Make sure you have docker and docker compose installed.

https://docs.docker.com/get-docker/

https://docs.docker.com/compose/install/



 ## Step 2: Use the following docker-compose.yml

```yaml
version: "3.7"
services:
    server:
        image: agoraapp/app-builder-backend:latest
        container_name: server
        depends_on:
            - database
        ports: 
            - 8080:8080
        environment:
            - APP_ID
            - APP_CERTIFICATE
            - CUSTOMER_ID
            - CUSTOMER_CERTIFICATE
            - BUCKET_NAME
            - BUCKET_ACCESS_KEY
            - BUCKET_ACCESS_SECRET
            - CLIENT_ID
            - CLIENT_SECRET
            - PSTN_USERNAME
            - PSTN_PASSWORD
            - SCHEME
            - ALLOWED_ORIGIN=""
            - ENABLE_NEWRELIC_MONITORING=false
            - DISABLE_AUTH=false
            - RUN_MIGRATION=true
            - DATABASE_URL=postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@database:5432/$POSTGRES_DB?sslmode=disable

    database:
        container_name: server_database
        image: postgres:12
        restart: always
        hostname: database
        environment: 
            - POSTGRES_USER
            - POSTGRES_PASSWORD
            - POSTGRES_DB

```



 ## Step 3: Add the environment variables

You will need a .env file to fill in the variables like so:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
APP_ID=
APP_CERTIFICATE=
CUSTOMER_ID=
CUSTOMER_CERTIFICATE=
BUCKET_NAME=
BUCKET_ACCESS_KEY=
BUCKET_ACCESS_SECRET=
CLIENT_ID=
CLIENT_SECRET=
PSTN_USERNAME=
PSTN_PASSWORD=
SCHEME=
```



 ## Step 4: Spin up the containers

After setting this up, you will need to run the following command: 

`docker-compose up -d`



This will get your server and database up and running. 