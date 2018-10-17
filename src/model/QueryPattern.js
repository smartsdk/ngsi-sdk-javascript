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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.QueryPattern = factory(root.NgsiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QueryPattern model module.
   * @module model/QueryPattern
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>QueryPattern</code>.
   * @alias module:model/QueryPattern
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>QueryPattern</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryPattern} obj Optional instance to populate.
   * @return {module:model/QueryPattern} The populated <code>QueryPattern</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('idPattern')) {
        obj['idPattern'] = ApiClient.convertToType(data['idPattern'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('typePattern')) {
        obj['typePattern'] = ApiClient.convertToType(data['typePattern'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} idPattern
   */
  exports.prototype['idPattern'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} typePattern
   */
  exports.prototype['typePattern'] = undefined;



  return exports;
}));


