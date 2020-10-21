# Shopping Cart Tool

<!-- # Live Demo on Heroku:
[nodejs-shopping-cart.herokuapp.com](https://nodejs-shopping-cart.herokuapp.com/) -->

### Run Locally on Your Machine
You need Node, NPM and MongoDB properly installed.

Clone this repository
``` shell
    git clone https://github.com/brenohq/nodejs-shopping-cart.git
```
Setup the environment variables replacing <mongo_uri> with your mongodb uri.
``` shell
    create .env file inside project directory with your mongo_uri variable
```
Install dependencies
``` shell
    npm install
```

With your mongod service running, this will populate shopping database
``` shell
    node products-data/products-data.js 
```
This will start dev server at http://localhost:3000 with Nodemon.
``` shell
    npm run dev
```


### Technologies
###### Back-end
NodeJS, Express, MongoDB, Mongoose, Passport. 
###### Fron-end
Handlebars and Bootstrap.