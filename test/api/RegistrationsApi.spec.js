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
    instance = new NgsiV2.RegistrationsApi();
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

  describe('RegistrationsApi', function() {
    describe('createRegistrations', function() {
      it('should call createRegistrations successfully', function(done) {
        //uncomment below and update the code to test createRegistrations
        //instance.createRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRegistration', function() {
      it('should call deleteRegistration successfully', function(done) {
        //uncomment below and update the code to test deleteRegistration
        //instance.deleteRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRegistration', function() {
      it('should call retrieveRegistration successfully', function(done) {
        //uncomment below and update the code to test retrieveRegistration
        //instance.retrieveRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRegistrations', function() {
      it('should call retrieveRegistrations successfully', function(done) {
        //uncomment below and update the code to test retrieveRegistrations
        //instance.retrieveRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRegistration', function() {
      it('should call updateRegistration successfully', function(done) {
        //uncomment below and update the code to test updateRegistration
        //instance.updateRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
