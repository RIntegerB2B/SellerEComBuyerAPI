'use strict';
var Category = require('../models/category.model');

exports.getAllCategories = function(req, res) {
    // Retrieve and return all notes from the database.
    Category.find({},function(err, categories){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(categories);
      }
    });
  };