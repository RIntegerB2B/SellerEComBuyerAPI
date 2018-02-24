
var mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    firstName: { type: String, default: 0 },
   
    middleName: String,
    lastName:String,
    emailId: String,
    phoneNumber: Number,
    userName:String,
    password:String,
    address1:String,
    address2:String,
    isActive: Boolean,
    approvedBySeller:Number,
    createdDate: { type: Date, default: Date.now },
    securityQuestion: String,
    securityAnswer: String,
    city: String,
    state:String,
    billingAddress: String,
    shippingAddress: String
  });

  const Buyer = mongoose.model('Buyer', BuyerSchema);
  module.exports=Buyer;