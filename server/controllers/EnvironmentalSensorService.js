'use strict';

exports.environmental_sensorsGet_humidityGET = function(args, res, next) {
  /**
   * Gets the percentage of relative humidity from the humidity sensor. 
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

exports.environmental_sensorsGet_pressureGET = function(args, res, next) {
  /**
   * Gets the current pressure in Millibars from the pressure sensor. 
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

exports.environmental_sensorsGet_temperatureGET = function(args, res, next) {
  /**
   * Calls get_temperature_from_humidity below. 
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

exports.environmental_sensorsGet_temperature_from_humidityGET = function(args, res, next) {
  /**
   * Gets the current temperature in degrees Celsius from the humidity sensor. 
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

exports.environmental_sensorsGet_temperature_from_pressureGET = function(args, res, next) {
  /**
   * Gets the current temperature in degrees Celsius from the pressure sensor. 
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

