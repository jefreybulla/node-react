This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# README

## Purpose
This front-end-only React app uses the session cookies of a Rails app to authenticate a user. Run in conjuction with this [Rails app](https://github.com/jefreybulla/rails-auth-bcrypt).

## Demo URL
http://react.rails.toro-labs.com/

## Install
```
$ npm install
```

## Run 
```
$ npm start
```

## Build and run with Docker
Create image with
```
$ docker build -t <your_username>/node-react-image
```
Create and run container with 
```
$ docker run -dp 8080:80 --name node-react-container node-react-image
```

## Domains
This app should run in a subdomain of the Rails app. 
