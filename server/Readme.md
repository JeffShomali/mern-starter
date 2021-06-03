# MERN Server 

## Usage
- Rename `.env-example` file to `.env` by `$ mv .env-example .env`
- Install dependencies with `$ npm install`.
- Run the application `$ npm run start` or `$ npm run start:watch` to watch for changes.

## API Endpoints

|Methods|Urls|Actions|
|--- |--- |--- |
|GET|api/books|get all books|
|GET|api/books/:id|get Book by id|
|POST|api/books|add new Book|
|PUT|api/books/:id|update Book by id|
|DELETE|api/books/:id|remove Book by id|
|DELETE|api/books|remove all books|
|GET|api/books?title=[string]|find all books which title contains 'string'|

### Result
![alt](./REST.png)


