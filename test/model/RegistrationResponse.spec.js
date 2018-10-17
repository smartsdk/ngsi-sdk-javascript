/**
 * ngsi-v2
 * NGSI V2 API RC-2018.04
 *
 * OpenAPI spec version: v2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
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
    factory(root.expect, root.NgsiV2);
  }
}(this, function(expect, NgsiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NgsiV2.RegistrationResponse();
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

  describe('RegistrationResponse', function() {
    it('should create an instance of RegistrationResponse', function() {
      // uncomment below and update the code to test RegistrationResponse
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be.a(NgsiV2.RegistrationResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property dataProvided (base name: "dataProvided")', function() {
      // uncomment below and update the code to test the property dataProvided
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

    it('should have the property forwardingInformation (base name: "forwardingInformation")', function() {
      // uncomment below and update the code to test the property forwardingInformation
      //var instane = new NgsiV2.RegistrationResponse();
      //expect(instance).to.be();
    });

  });

}));