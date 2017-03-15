/**
 * ngsi-v2-extension-timeseries
 * An API extending NGSI V2 to support timeseries
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    if (!root.NgsiV2ExtensionTimeseries) {
      root.NgsiV2ExtensionTimeseries = {};
    }
    root.NgsiV2ExtensionTimeseries.GetAttributeValueResponse = factory(root.NgsiV2ExtensionTimeseries.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAttributeValueResponse model module.
   * @module model/GetAttributeValueResponse
   * @version v2
   */

  /**
   * Constructs a new <code>GetAttributeValueResponse</code>.
   * @alias module:model/GetAttributeValueResponse
   * @class
   * @param address {String} 
   * @param zipCode {Number} 
   * @param city {String} 
   * @param country {String} 
   */
  var exports = function(address, zipCode, city, country) {
    var _this = this;

    _this['address'] = address;
    _this['zipCode'] = zipCode;
    _this['city'] = city;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>GetAttributeValueResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAttributeValueResponse} obj Optional instance to populate.
   * @return {module:model/GetAttributeValueResponse} The populated <code>GetAttributeValueResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'Number');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} zipCode
   */
  exports.prototype['zipCode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


