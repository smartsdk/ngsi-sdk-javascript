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
    instance = new NgsiV2.SubscriptionsApi();
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

  describe('SubscriptionsApi', function() {
    describe('createANewSubscription', function() {
      it('should call createANewSubscription successfully', function(done) {
        //uncomment below and update the code to test createANewSubscription
        //instance.createANewSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSubscription', function() {
      it('should call deleteSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteSubscription
        //instance.deleteSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSubscription', function() {
      it('should call retrieveSubscription successfully', function(done) {
        //uncomment below and update the code to test retrieveSubscription
        //instance.retrieveSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSubscriptions', function() {
      it('should call retrieveSubscriptions successfully', function(done) {
        //uncomment below and update the code to test retrieveSubscriptions
        //instance.retrieveSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscription', function() {
      it('should call updateSubscription successfully', function(done) {
        //uncomment below and update the code to test updateSubscription
        //instance.updateSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
