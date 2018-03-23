'use strict';
var categoryMgr = require('./categoryMgr');
module.exports = function(app) {
    app.route('/category')
    .get(categoryMgr.getAllCategories);
}