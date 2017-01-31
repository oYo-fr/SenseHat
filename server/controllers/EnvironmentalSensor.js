'use strict';

var url = require('url');

var EnvironmentalSensor = require('./EnvironmentalSensorService');

module.exports.environmental_sensorsGet_humidityGET = function environmental_sensorsGet_humidityGET (req, res, next) {
  EnvironmentalSensor.environmental_sensorsGet_humidityGET(req.swagger.params, res, next);
};

module.exports.environmental_sensorsGet_pressureGET = function environmental_sensorsGet_pressureGET (req, res, next) {
  EnvironmentalSensor.environmental_sensorsGet_pressureGET(req.swagger.params, res, next);
};

module.exports.environmental_sensorsGet_temperatureGET = function environmental_sensorsGet_temperatureGET (req, res, next) {
  EnvironmentalSensor.environmental_sensorsGet_temperatureGET(req.swagger.params, res, next);
};

module.exports.environmental_sensorsGet_temperature_from_humidityGET = function environmental_sensorsGet_temperature_from_humidityGET (req, res, next) {
  EnvironmentalSensor.environmental_sensorsGet_temperature_from_humidityGET(req.swagger.params, res, next);
};

module.exports.environmental_sensorsGet_temperature_from_pressureGET = function environmental_sensorsGet_temperature_from_pressureGET (req, res, next) {
  EnvironmentalSensor.environmental_sensorsGet_temperature_from_pressureGET(req.swagger.params, res, next);
};
