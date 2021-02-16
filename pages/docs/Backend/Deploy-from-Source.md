 # Deploy from source
 ## Step 1: Clone the source code

Clone the source code from https://github.com/samyak-jain/AgoraBackend



 ## Step 2: Setup Credentials

You can choose to setup credentials either by filling up the [configuration file](https://github.com/samyak-jain/AgoraBackend/blob/master/config.json) or by adding them as environment variables. You can see a list of credentials to setup [here](https://github.com/AgoraIO-Community/app-builder-docs/wiki/Credentials)



 ## Step 3: Setup Database

Agora App Builder uses a Postgresql Database.

You can downlaod postgresql 12 from https://www.postgresql.org/download/linux/

Make sure the create a database where your data will be stored. You can follow the documentation for that here: https://www.postgresql.org/docs/10/tutorial-createdb.html

Get the connection string like shown here: https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING and set it as the following environment variable: DATABASE_URL



 ## Step 4: Run the Database Migrations

If you want the database migrations to be run, you will need to setup the following environment variable
```RUN_MIGRATION=true```


 ## Step 5: Build the server

Run `go build -o server`



 ## Step 6: Run the binary

You can run the binary by just doing `./server`

Since, the dependencies are statically linked, you can deploy just the binary to the server. However, you have to make sure to keep the config.json in the same directory. 

