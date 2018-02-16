# todo-list

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

In order to run this todo list application you must install all the prerequisite packages. This includes installing nodejs, ruby, and git. After these have been installed follow these steps:

- Once you have cloned the repository, go into the repos root directory in the nodejs command prompt and run "npm install -g grunt-cli bower" to install bower and grunt.

- Then run "npm install". This will install all the node dependencies for the todolist application. 

- Then open the ruby command prompt and navigate to the root directory of the app and run "gem install compass". This will install the dependencies needed for SASS.

- Then back in the nodejs command prompt run "bower install" in the apps root directory.

These same steps above are outlined in the readme section in the github for the [yo angular generator](https://github.com/yeoman/generator-angular) scaffolding tool used to build the angular web app.

The instructions above outline how to install all the dependencies for the web portion. For the .Net server the only thing you must do is  install .NET core.

## Running the To Do List Application

First you must start the server. I have been running "dotnet publish todolist-backend" in the todolist-backend folder with the root TodoList folder of the project. Then after that running the following command to start the WebApi: "dotnet [path to dll file]". Replace [path to dll file] with the path to the dll file that has been create with the previous publish command. 

Then after the server is started you can run "grunt serve" in the nodejs command prompt from within the TodoList main directory.
