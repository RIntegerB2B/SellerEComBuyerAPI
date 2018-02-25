'use strict';
var Content = require('../../models/content.model');

exports.getContentDetail = function(req, res) {
    // Retrieve and return all notes from the database.
    Content.find({'publishId': req.params.publishId},'contentDetailId contentData',function(err, contentDetail){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(contentDetail);
      }
    });
  };