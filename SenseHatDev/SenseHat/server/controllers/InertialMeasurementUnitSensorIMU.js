'use strict';

var url = require('url');

var InertialMeasurementUnitSensorIMU = require('./InertialMeasurementUnitSensorIMUService');

module.exports.iMU_sensorsGet_accelerometerGET = function iMU_sensorsGet_accelerometerGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_accelerometerGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_accelerometer_rawGET = function iMU_sensorsGet_accelerometer_rawGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_accelerometer_rawGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_compassGET = function iMU_sensorsGet_compassGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_compassGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_compass_rawGET = function iMU_sensorsGet_compass_rawGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_compass_rawGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_gyroscopeGET = function iMU_sensorsGet_gyroscopeGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_gyroscopeGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_gyroscope_rawGET = function iMU_sensorsGet_gyroscope_rawGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_gyroscope_rawGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_orientationGET = function iMU_sensorsGet_orientationGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_orientationGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_orientation_degreesGET = function iMU_sensorsGet_orientation_degreesGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_orientation_degreesGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsGet_orientation_radiansGET = function iMU_sensorsGet_orientation_radiansGET (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsGet_orientation_radiansGET(req.swagger.params, res, next);
};

module.exports.iMU_sensorsSet_imu_configPUT = function iMU_sensorsSet_imu_configPUT (req, res, next) {
  InertialMeasurementUnitSensorIMU.iMU_sensorsSet_imu_configPUT(req.swagger.params, res, next);
};
