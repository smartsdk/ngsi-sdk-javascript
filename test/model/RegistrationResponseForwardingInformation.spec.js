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
    instance = new NgsiV2.RegistrationResponseForwardingInformation();
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

  describe('RegistrationResponseForwardingInformation', function() {
    it('should create an instance of RegistrationResponseForwardingInformation', function() {
      // uncomment below and update the code to test RegistrationResponseForwardingInformation
      //var instane = new NgsiV2.RegistrationResponseForwardingInformation();
      //expect(instance).to.be.a(NgsiV2.RegistrationResponseForwardingInformation);
    });

    it('should have the property timeSent (base name: "timeSent")', function() {
      // uncomment below and update the code to test the property timeSent
      //var instane = new NgsiV2.RegistrationResponseForwardingInformation();
      //expect(instance).to.be();
    });

    it('should have the property lastForwarding (base name: "lastForwarding")', function() {
      // uncomment below and update the code to test the property lastForwarding
      //var instane = new NgsiV2.RegistrationResponseForwardingInformation();
      //expect(instance).to.be();
    });

    it('should have the property lastFailure (base name: "lastFailure")', function() {
      // uncomment below and update the code to test the property lastFailure
      //var instane = new NgsiV2.RegistrationResponseForwardingInformation();
      //expect(instance).to.be();
    });

    it('should have the property lastSuccess (base name: "lastSuccess")', function() {
      // uncomment below and update the code to test the property lastSuccess
      //var instane = new NgsiV2.RegistrationResponseForwardingInformation();
      //expect(instance).to.be();
    });

  });

}));
