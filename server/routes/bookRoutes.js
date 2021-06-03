module.exports = app => {
    const bookController = require("../controllers/booksController.js");  
    var bookRoute = require("express").Router();
    bookRoute.post("/", bookController.create);
    bookRoute.get("/", bookController.findAll);
    bookRoute.get("/:id", bookController.findOne);
    bookRoute.put("/:id", bookController.update);
    bookRoute.delete("/:id", bookController.delete);
    bookRoute.delete("/", bookController.deleteAll);
    app.use('/api/books', bookRoute);
  };