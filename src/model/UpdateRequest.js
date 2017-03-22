/**
 * ngsi-v2
 * NGSI V2 API description in Swagger
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
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.UpdateRequest = factory(root.NgsiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateRequest model module.
   * @module model/UpdateRequest
   * @version v2
   */

  /**
   * Constructs a new <code>UpdateRequest</code>.
   * @alias module:model/UpdateRequest
   * @class
   * @param actionType {String} 
   * @param entities {Array.<Object>} 
   */
  var exports = function(actionType, entities) {
    var _this = this;

    _this['actionType'] = actionType;
    _this['entities'] = entities;
  };

  /**
   * Constructs a <code>UpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateRequest} obj Optional instance to populate.
   * @return {module:model/UpdateRequest} The populated <code>UpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionType')) {
        obj['actionType'] = ApiClient.convertToType(data['actionType'], 'String');
      }
      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} actionType
   */
  exports.prototype['actionType'] = undefined;
  /**
   * @member {Array.<Object>} entities
   */
  exports.prototype['entities'] = undefined;



  return exports;
}));

