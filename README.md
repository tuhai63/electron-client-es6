# Electron Client ES6

This project is modified from `electron-ghsts-poc` by spliting the desktop Electron application into a remote Desktop or Web client and a REST server. 
It is intended to prove that the same Web technology can be used to produce Desktop, Desktop/REST and Web applications with relative
ease.  This demo can run either as a remote Desktop or a Web client. The project `node-server-es6` is used as the REST server, serving out sample GHSTS Legal Entities data.

## Components and Features

 * Electron
 * Angular 1.x 
 * ES6
 * Angular Material
 * Docker

## PreConditions for client

Ensure that the following node packages are installed on your system.

 * jspm and electron_prebuilt

You can install it using `npm install jspm -g` and `npm install electron-prebuilt -g`. 
It is advisable to locally install jspm in additional to globally installing it to lock the version of jspm for a specific project. 
After cloning the repo, go to app directory and run `npm install jspm`.

## Install dependencies

After cloning the repo, execute `npm install` in 'app' subdirectory to install all dependencies. For the client, `jspm install` will be invoked automatically as `npm postinstall` script!
Since this POC will be refreshed with new dependencies added, please make sure you run `npm install` every time you pull from repository.

## Run REST server

Before starting the client, You need to run the REST server from project `node-server-es6`. Verify the service is running by going to URL: `http://localhost:3000/api/legal_entities`.

## Run the application as Desktop

Go to the parent directory of 'app' folder, type `electron app`.

## Run the application as Web

Go to 'app' folder, type `gulp web`. You can also run the Web application from a Docker container: `[sudo] docker run -d -p 9000:80 weifang993/web-client-es6 /usr/sbin/apache2ctl -D FOREGROUND`, which will run the docker image form Docker Hub.  If you'd like to build the Docker image, run: `[sudo] docker build -t weifang993/web-client-es6 .`. 

## Debug the browser process of the Desktop Application 

You can easily debug the browser process of the application with built-in Chrome debugger. 
Once the application is running, go to menu 'View->Toggle Developer Tools'.

## Debug the Web application 

You can easily debug the browser process of the Web application by using the Chrome debugger. 

## Creating the Electorn App package

Execute `gulp` in order to build the electron app.

The final electron app will be located as a zip file within the `dist` subfolder. Extract the ZIP file and start the electron app.

