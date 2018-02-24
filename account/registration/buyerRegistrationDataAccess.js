'use strict';
var Buyer = require('../../models/buyer.model');

exports.createBuyer = function(req, res) {
  var newBuyer = new Buyer(req.body);
  newBuyer.isActive=0;
  newBuyer.approvedBySeller=2; // In Progress

  newBuyer.save(function(err, buyerData) {
    if (err)
      res.send(err);
    res.send(buyerData);
  });
};


