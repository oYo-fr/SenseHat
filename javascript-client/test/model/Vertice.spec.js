/**
 * Sense HAT API
 * Sense HAT API Express wrapper (http://pythonhosted.org/sense-hat/api/#sense-hat-api-reference).
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SenseHatApi);
  }
}(this, function(expect, SenseHatApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SenseHatApi.Vertice();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Vertice', function() {
    it('should create an instance of Vertice', function() {
      // uncomment below and update the code to test Vertice
      //var instane = new SenseHatApi.Vertice();
      //expect(instance).to.be.a(SenseHatApi.Vertice);
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new SenseHatApi.Vertice();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new SenseHatApi.Vertice();
      //expect(instance).to.be();
    });

    it('should have the property z (base name: "z")', function() {
      // uncomment below and update the code to test the property z
      //var instane = new SenseHatApi.Vertice();
      //expect(instance).to.be();
    });

  });

}));
