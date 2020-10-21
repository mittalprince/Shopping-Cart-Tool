# Shopping Cart Tool - NodeJS/Express
> A ShoppingCart (Ecommerce) webapp build using NodeJs, Express, MongoDB.

# Live Demo on Heroku:
[https://shopping-cart-tool.herokuapp.com/](https://shopping-cart-tool.herokuapp.com/)

### Features
* Login/Signup
* Edit User Details
* List all avaiable Products
* Add new products by updating products-data/products-data.js at server.
* Show cart and shopping history.
* Payment using Stripe NPM Package

### Run Locally on Your Machine
You need Node, NPM and MongoDB properly installed.

Clone this repository
``` shell
    git clone https://github.com/mittalprince/Shopping-Cart-Tool.git
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


# Tools and Technologies
Backend: NodeJs, ExpressJS, PassportJS, Express-Validators, Stripe.<br>
Database: MongoDB.<br>
Frontend: Bootstrap, Handlebars.


## ScreenShots

![ScreemShot-1](https://user-images.githubusercontent.com/26388073/96741460-6f3f8280-13df-11eb-8786-a89a59adebc6.png)

![ScreemShot-2](https://user-images.githubusercontent.com/26388073/96741586-95652280-13df-11eb-8d8d-52b4f53823d6.png)

![ScreemShot-3](https://user-images.githubusercontent.com/26388073/96741672-ad3ca680-13df-11eb-95a1-0d82a7fc00f7.png)

![ScreemShot-4](https://user-images.githubusercontent.com/26388073/96741731-c3e2fd80-13df-11eb-9a80-b892af8321ba.png)