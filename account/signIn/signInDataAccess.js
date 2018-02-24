'use strict';
var Buyer = require('../../models/buyer.model');

exports.signInToSite = function(req, res) {
  Buyer.find({'userName': req.body.userName, 'password': req.body.password, 'approvedBySeller' : 1},'contentDetailId contentData',function(err, userDetail){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        console.log(userDetail);
        res.send(userDetail);
    }
  });
  
};


