/**
 * ngsi-v2
 * NGSI V2 API
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
    root.NgsiV2.APIEntryPoint = factory(root.NgsiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIEntryPoint model module.
   * @module model/APIEntryPoint
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>APIEntryPoint</code>.
   * @alias module:model/APIEntryPoint
   * @class
   * @param entitiesUrl {String} URL which points to the entities resource
   * @param typesUrl {String} URL which points to the types resource
   * @param subscriptionsUrl {String} URL which points to the subscriptions resource
   */
  var exports = function(entitiesUrl, typesUrl, subscriptionsUrl) {
    var _this = this;

    _this['entities_url'] = entitiesUrl;
    _this['types_url'] = typesUrl;
    _this['subscriptions_url'] = subscriptionsUrl;
  };

  /**
   * Constructs a <code>APIEntryPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIEntryPoint} obj Optional instance to populate.
   * @return {module:model/APIEntryPoint} The populated <code>APIEntryPoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entities_url')) {
        obj['entities_url'] = ApiClient.convertToType(data['entities_url'], 'String');
      }
      if (data.hasOwnProperty('types_url')) {
        obj['types_url'] = ApiClient.convertToType(data['types_url'], 'String');
      }
      if (data.hasOwnProperty('subscriptions_url')) {
        obj['subscriptions_url'] = ApiClient.convertToType(data['subscriptions_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL which points to the entities resource
   * @member {String} entities_url
   */
  exports.prototype['entities_url'] = undefined;
  /**
   * URL which points to the types resource
   * @member {String} types_url
   */
  exports.prototype['types_url'] = undefined;
  /**
   * URL which points to the subscriptions resource
   * @member {String} subscriptions_url
   */
  exports.prototype['subscriptions_url'] = undefined;



  return exports;
}));


