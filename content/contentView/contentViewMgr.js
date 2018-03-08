var contentViewDA = require('./contentViewDA');
exports.getContents = function(req, res) {
    contentViewDA.getContents(req, res);
};
exports.getAllContentId = function(req, res) {
    contentViewDA.getAllContentId(req, res);
};
exports.getMainContentImage = function(req, res) {
    contentViewDA.getMainContentImage(req, res);
};
exports.getAllSubContentId = function(req, res) {
    contentViewDA.getAllSubContentId(req, res);
};
exports.getSubContentImage = function(req, res) {
    contentViewDA.getSubContentImage(req, res);
};

