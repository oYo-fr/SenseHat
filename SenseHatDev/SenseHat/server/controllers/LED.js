'use strict';

var url = require('url');

var LED = require('./LEDService');

module.exports.lED_MatrixClearPUT = function lED_MatrixClearPUT (req, res, next) {
  LED.lED_MatrixClearPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixFlip_hPUT = function lED_MatrixFlip_hPUT (req, res, next) {
  LED.lED_MatrixFlip_hPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixFlip_vPUT = function lED_MatrixFlip_vPUT (req, res, next) {
  LED.lED_MatrixFlip_vPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixGet_pixelGET = function lED_MatrixGet_pixelGET (req, res, next) {
  LED.lED_MatrixGet_pixelGET(req.swagger.params, res, next);
};

module.exports.lED_MatrixGet_pixelsGET = function lED_MatrixGet_pixelsGET (req, res, next) {
  LED.lED_MatrixGet_pixelsGET(req.swagger.params, res, next);
};

module.exports.lED_MatrixLow_lightPUT = function lED_MatrixLow_lightPUT (req, res, next) {
  LED.lED_MatrixLow_lightPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixSet_pixelPUT = function lED_MatrixSet_pixelPUT (req, res, next) {
  LED.lED_MatrixSet_pixelPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixSet_pixelsPUT = function lED_MatrixSet_pixelsPUT (req, res, next) {
  LED.lED_MatrixSet_pixelsPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixSet_rotationPUT = function lED_MatrixSet_rotationPUT (req, res, next) {
  LED.lED_MatrixSet_rotationPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixShow_letterPUT = function lED_MatrixShow_letterPUT (req, res, next) {
  LED.lED_MatrixShow_letterPUT(req.swagger.params, res, next);
};

module.exports.lED_MatrixShow_messagePUT = function lED_MatrixShow_messagePUT (req, res, next) {
  LED.lED_MatrixShow_messagePUT(req.swagger.params, res, next);
};
