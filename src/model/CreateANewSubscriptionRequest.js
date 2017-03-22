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
    root.NgsiV2.CreateANewSubscriptionRequest = factory(root.NgsiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateANewSubscriptionRequest model module.
   * @module model/CreateANewSubscriptionRequest
   * @version v2
   */

  /**
   * Constructs a new <code>CreateANewSubscriptionRequest</code>.
   * @alias module:model/CreateANewSubscriptionRequest
   * @class
   * @param description {String} 
   * @param subject {Object} 
   * @param notification {Object} 
   * @param expires {Date} 
   * @param throttling {Number} 
   */
  var exports = function(description, subject, notification, expires, throttling) {
    var _this = this;

    _this['description'] = description;
    _this['subject'] = subject;
    _this['notification'] = notification;
    _this['expires'] = expires;
    _this['throttling'] = throttling;
  };

  /**
   * Constructs a <code>CreateANewSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateANewSubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/CreateANewSubscriptionRequest} The populated <code>CreateANewSubscriptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], Object);
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = ApiClient.convertToType(data['notification'], Object);
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('throttling')) {
        obj['throttling'] = ApiClient.convertToType(data['throttling'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Object} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {Object} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {Number} throttling
   */
  exports.prototype['throttling'] = undefined;



  return exports;
}));


