var categoryDA = require('./categoryDA');
exports.getAllCategories = function(req, res) {
    categoryDA.getAllCategories(req, res);
};


