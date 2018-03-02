'use strict';
var Content = require('../../models/content.model');

exports.getContents = function(req, res) {
    Content.aggregate( [ { $group : { _id :{  "createdDate": "$createdDate",  "publishId": "$publishId" , "encryptedKey" : "$encryptedKey"} } }
    ,
    { "$sort": { "publishId": -1 } }
      ]).exec(function (err, contents) {
      if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
        contents = contents.sort(function(a, b){
          return a.publishId - b.publishId;
      });
      res.send(contents);
      }
    });
  
  };

  exports.getAllContents = function(req, res) {
    Content.find({},'contentDetailId contentData',function(err, contentData){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(contentData);
      }
    });
  
  };


