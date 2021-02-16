# Update the backend
Here are the steps you need to take to update your deployed backend to the latest version if you want to take advantage of new features and bug fixes. 

## Heroku

If you've deployed your application on Heroku, here are some of the steps you need to take - 

1. Make sure the Heroku CLI is installed - https://devcenter.heroku.com/articles/heroku-cli
2. Open the project directory in a terminal
3. Run `cd <projectname>Backend`
4. Run `git pull origin master`
5. If you've already deployed a project on Heroku using the Heroku CLI skip to Step 8. If you've used a different method like using the 1-Click deploy mechanism, continue to Step 6.
6. Run `heroku login` and enter your heroku credentials
7. Run `heroku git:remote -a <heroku-project-name>`
8. Run `git push heroku master`

You should now have the updated changes on your heroku backend.

## Manual Deployment

Using other methods should be fairly simple. 

If you've done a deployment from source, you can run `git pull origin master` and redo the steps in the [manual deployment guide](https://github.com/AgoraIO-Community/app-builder-docs/wiki/Deploy-from-Source). 

If you are deploying using docker and using the `latest` tag, then you will just need to pull in newer image and restart -
```
docker-compose up --force-recreate --build -d
```

You will still have the old docker image taking up space. If you want to remove that you can do `docker image prune -f`. Make sure you don't accidentally delete an image you didn't want to delete. 