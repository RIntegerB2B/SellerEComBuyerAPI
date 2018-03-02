var contentViewDA = require('./contentViewDA');
exports.getContents = function(req, res) {
    contentViewDA.getContents(req, res);
};
exports.getAllContents = function(req, res) {
    contentViewDA.getAllContents(req, res);
};


