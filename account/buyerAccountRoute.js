'use strict';
var registrationMgr = require('./registration/buyerRegistrationManager');
var signInManager = require('./signIn/signInManager');
module.exports = function(app) {
    app.route('/buyer')
    .post(registrationMgr.createBuyer);
    app.route('/user')
    .post(signInManager.signInToSite);
    
}