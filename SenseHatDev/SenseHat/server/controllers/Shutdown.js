'use strict';

var url = require('url');

var Shutdown = require('./ShutdownService');

module.exports.miscShutdownPOST = function miscShutdownPOST (req, res, next) {
  Shutdown.miscShutdownPOST(req.swagger.params, res, next);
};
