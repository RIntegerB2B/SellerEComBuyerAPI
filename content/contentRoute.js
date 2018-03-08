'use strict';
var contentViewMgr = require('./contentView/contentViewMgr');
var contentDetailMgr = require('./contentDetail/contentDetailMgr');
module.exports = function(app) {
    app.route('/contents/contentDetail/:publishId')
    .get(contentDetailMgr.getContentDetail);
    app.route('/contents')
    .get(contentViewMgr.getContents);
    app.route('/contentId')
    .get(contentViewMgr.getAllContentId);
    app.route('/content/:Id')
    .get(contentViewMgr.getMainContentImage);
    app.route('/subContentId/:Id')
    .get(contentViewMgr.getAllSubContentId);
    
    app.route('/content/:mainContentId/:subContentId')
    .get(contentViewMgr.getSubContentImage);
}