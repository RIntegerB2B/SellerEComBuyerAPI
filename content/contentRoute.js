'use strict';
var contentViewMgr = require('./contentView/contentViewMgr');
var contentDetailMgr = require('./contentDetail/contentDetailMgr');
module.exports = function(app) {
    app.route('/contents/contentDetail/:publishId')
    .get(contentDetailMgr.getContentDetail);
    app.route('/contents')
    .get(contentViewMgr.getContents);
}