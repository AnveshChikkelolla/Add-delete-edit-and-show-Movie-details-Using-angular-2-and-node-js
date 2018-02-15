# angular-2-and-node-test-
Add movie details to mongodb using mongoose.
Retrive movie  deteails.
Edit the movie details and upload it.
Delete the movie details if you want.
create app using ng new project.
Create components using ng g c componetname
create a services using ng g service servicename
In the backend create a three nodejs file as server.js,model.js,routes.js.
Mdel.js file contains databaseschema.
Npm run test command to runnng the angular appliction.
By using following code we can connent to monogodb.
mongoose.connect('mongodb://localhost:27017/employees')
    .connection
        .on('connected',function(){
            console.log("successfully connected ")
        })
        .on('error',function(err)
            console.log("database error "+ err)
        })
				
				MongoDB use DATABASE_NAME is used to create database. The command will create a new database if it doesn't exist, otherwise it will return the existing database.
		If you want to check your databases list, use the command show dbs.
				
				
