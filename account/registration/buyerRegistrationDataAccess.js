'use strict';
var Buyer = require('../../models/buyer.model');
var nodemailer = require('nodemailer');

exports.createBuyer = function(req, res) {
  var newBuyer = new Buyer(req.body);
  newBuyer.isActive=0;
  newBuyer.approvedBySeller=2; // In Progress

  newBuyer.save(function(err, buyerData) {
    var returnValue;
    if (err){
      res.send(err);
    }
    else{
      var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'princepreveen@outlook.com',
          pass: 'Cspirpja@1'
        }
      });
  
      var mailOptions = {
        from: 'princepreveen@outlook.com',
        to: req.body.emailId,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send(buyerData);
    }
  });
};



