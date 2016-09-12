var express    = require('express');
var bookRouter = express.Router();

var router = function(nav) {
  var books = [
    {
      title : "The Girl with the dragon tatto",
      genre : "Fiction",
      author: "Stieg Larsson",
      read  : false
    },
    {
      title : "Inferno",
      genre : "Fiction",
      author: "Dan Brown",
      read  : true
    },
    {
      title : "Emotional Intelligence",
      genre : "Selfimprovement",
      author: "Daniel Goleman",
      read  : false
    }
  ];

  bookRouter.route('/')
    .get(function (req, res) {
      console.log('res ', res);
      res.render('books', {
        title: 'Hello from renders',
        nav  : nav,
        books: books
      })
    });

  bookRouter.route('/:id')
    .get(function (req, res) {
      console.log('req ', req);
      var id = req.params.id;
      console.log('id ', id);
      res.render('bookView', {
        title: 'Hello from renders',
        nav  : nav,
        book: books[id]
      })
    });

  return bookRouter
};



module.exports = router;