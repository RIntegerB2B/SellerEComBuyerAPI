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

  exports.getAllContentId = function(req, res) {
    Content.find({},'_id',function(err, contentIds){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
        res.send(contentIds);
      }
    });
  
  };

  exports.getMainContentImage = function(req, res) {
          Content.find({'_id':req.params.Id},'mainContentImage', function(err, contentImages){
            if(err) {
              res.status(500).send({message: "Some error occurred while retrieving notes."});
          } else {
            
              res.send(JSON.stringify(contentImages[0]));
             
            
          }
          });
          
  
  };

  exports.getAllSubContentId = function(req, res) {
    Content.find({'_id':req.params.Id},'subContentDetail._id',function(err, contentIds){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
        console.log(contentIds[0].subContentDetail);
        if(contentIds && contentIds.length >0 )
          res.send(contentIds[0].subContentDetail);
        else
        res.send(contentIds);
      }
    });
  
  };

  exports.getSubContentImage = function(req, res) {
    console.log(req.params.subContentId);
    Content.find({_id:req.params.mainContentId, 'subContentDetail.0' :  {$exists: true} },'subContentDetail._id subContentDetail.subContentDetailImage', function(err, contentImage){
      if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
        if(contentImage && contentImage.length > 0 && contentImage[0].subContentDetail && contentImage[0].subContentDetail.length > 0){
          var subContentData = contentImage[0].subContentDetail.filter(function (detail) {
            return detail._id == req.params.subContentId;
          });
          res.send(JSON.stringify(subContentData[0]));
        }
        else{
          res.send(JSON.stringify(contentImage));
        }
        
      }
    });
  };

