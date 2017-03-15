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
    root.NgsiV2ExtensionTimeseries.QueryRequest = factory(root.NgsiV2ExtensionTimeseries.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QueryRequest model module.
   * @module model/QueryRequest
   * @version v2
   */

  /**
   * Constructs a new <code>QueryRequest</code>.
   * @alias module:model/QueryRequest
   * @class
   * @param entities {Array.<Object>} 
   * @param attributes {Array.<String>} 
   */
  var exports = function(entities, attributes) {
    var _this = this;

    _this['entities'] = entities;
    _this['attributes'] = attributes;
  };

  /**
   * Constructs a <code>QueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryRequest} obj Optional instance to populate.
   * @return {module:model/QueryRequest} The populated <code>QueryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], [Object]);
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} entities
   */
  exports.prototype['entities'] = undefined;
  /**
   * @member {Array.<String>} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));


