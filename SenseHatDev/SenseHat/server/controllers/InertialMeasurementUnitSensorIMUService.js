'use strict';

exports.iMU_sensorsGet_accelerometerGET = function(args, res, next) {
  /**
   * Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 
   *
   * returns Orientation
   **/
  var examples = {};
  examples['application/json'] = {
  "roll" : 1.3579000000000001069366817318950779736042022705078125,
  "pitch" : 1.3579000000000001069366817318950779736042022705078125,
  "yaw" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_accelerometer_rawGET = function(args, res, next) {
  /**
   * Gets the raw x, y and z axis accelerometer data. 
   *
   * returns Vertice
   **/
  var examples = {};
  examples['application/json'] = {
  "x" : 1.3579000000000001069366817318950779736042022705078125,
  "y" : 1.3579000000000001069366817318950779736042022705078125,
  "z" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_compassGET = function(args, res, next) {
  /**
   * Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 
   *
   * returns BigDecimal
   **/
  var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_compass_rawGET = function(args, res, next) {
  /**
   * Gets the raw x, y and z axis magnetometer data. 
   *
   * returns Vertice
   **/
  var examples = {};
  examples['application/json'] = {
  "x" : 1.3579000000000001069366817318950779736042022705078125,
  "y" : 1.3579000000000001069366817318950779736042022705078125,
  "z" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_gyroscopeGET = function(args, res, next) {
  /**
   * Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 
   *
   * returns Orientation
   **/
  var examples = {};
  examples['application/json'] = {
  "roll" : 1.3579000000000001069366817318950779736042022705078125,
  "pitch" : 1.3579000000000001069366817318950779736042022705078125,
  "yaw" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_gyroscope_rawGET = function(args, res, next) {
  /**
   * Gets the raw x, y and z axis gyroscope data. 
   *
   * returns Vertice
   **/
  var examples = {};
  examples['application/json'] = {
  "x" : 1.3579000000000001069366817318950779736042022705078125,
  "y" : 1.3579000000000001069366817318950779736042022705078125,
  "z" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_orientationGET = function(args, res, next) {
  /**
   * Calls get_orientation_degrees above. 
   *
   * returns Orientation
   **/
  var examples = {};
  examples['application/json'] = {
  "roll" : 1.3579000000000001069366817318950779736042022705078125,
  "pitch" : 1.3579000000000001069366817318950779736042022705078125,
  "yaw" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_orientation_degreesGET = function(args, res, next) {
  /**
   * Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 
   *
   * returns Orientation
   **/
  var examples = {};
  examples['application/json'] = {
  "roll" : 1.3579000000000001069366817318950779736042022705078125,
  "pitch" : 1.3579000000000001069366817318950779736042022705078125,
  "yaw" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsGet_orientation_radiansGET = function(args, res, next) {
  /**
   * Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 
   *
   * returns Orientation
   **/
  var examples = {};
  examples['application/json'] = {
  "roll" : 1.3579000000000001069366817318950779736042022705078125,
  "pitch" : 1.3579000000000001069366817318950779736042022705078125,
  "yaw" : 1.3579000000000001069366817318950779736042022705078125
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.iMU_sensorsSet_imu_configPUT = function(args, res, next) {
  /**
   * Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 
   *
   * compass_enabled Boolean Whether or not the compass should be enabled.
   * gyro_enabled Boolean Whether or not the gyroscope should be enabled.
   * accel_enabled Boolean Whether or not the accelerometer should be enabled.
   * returns BigDecimal
   **/
  var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

