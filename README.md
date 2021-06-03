# MERN Starter
This is a simple CRUD application supporting JWT token authentication. This application written in Node(express), React, Redux. 

---

- [MERN Starter](#mern-starter)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [List of packages used](#list-of-packages-used)

---

## Usage
- **Server**
  - Clone the repo by `$ git clone git@github.com:JeffShomali/mern-starter.git`.
  - Go to server directory `$ cd mern-starter/server/`.
  - Rename the environment file`$ mv .env-example .env`
  - Install dependencies and run the project `$ npm install` and `$ npm run start` or `npm run start:watch` if you have `nodemon` installed in your system.
Done server is running and you should see `Server is running on http://localhost:8080` message in terminal. Must be running on port `8080`.

- **Client**
  - Open a new terminal tab and go to client directory `$ cd client`.
  - Rename environment file `$ mv .env-example .env`.
  - Install dependencies by `$ npm install && npm start`
  - If the server is running you will see the "Public Content". Otherwise means server is not running correctly.

## Folder Structure 
- **Server**
 ```bash
.
├── app.js
├── bin
│   └── www
├── config
│   ├── auth.js
│   └── config.js
├── controllers
│   ├── authController.js
│   ├── booksController.js
│   ├── index.js
│   └── userController.js
├── middleware
│   ├── authJwt.js
│   ├── index.js
│   └── verifySignUp.js
├── migrations
│   └── 20210520011301-create-user.js
├── models
│   ├── Book.js
│   ├── index.js
│   └── user.js
├── package.json
├── public
│   └── stylesheets
├── routes
│   ├── auth.js
│   ├── bookRoutes.js
│   ├── index.js
│   └── users.js
├── seeders
│   └── 20210520075555-user.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

- **Client**
```bash
  .
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── App_delete.js
  ├── components
  │   ├── Navigation.js
  │   └── index.js
  ├── http-common.js
  ├── index.css
  ├── index.js
  ├── logo.svg
  ├── pages
  │   ├── AddBook.js
  │   ├── Book.js
  │   ├── BookList.js
  │   ├── Home.js
  │   ├── Login.js
  │   ├── Profile.js
  │   ├── Register.js
  │   └── index.js
  ├── redux
  │   ├── actions
  │   ├── reducers
  │   └── store.js
  ├── reportWebVitals.js
  ├── services
  │   ├── AuthService.js
  │   ├── BookService.js
  │   ├── UserService.js
  │   ├── authHeader.js
  │   └── index.js
  └── setupTests.js
```

## List of packages used
**Server:** bcryptjs, body-parser, chalk, cookie-parser, cors, debug, dotenv, express, http-errors, jade, jsonwebtoken, morgan, sequelize, sequelize-cli.
**Client:** axios, moment, nodemon react, react-dom, react-redux, react-router-dom, react-scripts react-validation, redux, redux-thunk, semantic-ui-css, semantic-ui-react, validator, web-vitals