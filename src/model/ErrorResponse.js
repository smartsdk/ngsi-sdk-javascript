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
    root.NgsiV2.ErrorResponse = factory(root.NgsiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ErrorResponse model module.
   * @module model/ErrorResponse
   * @version v2
   */

  /**
   * Constructs a new <code>ErrorResponse</code>.
   * All NGSIv2 server implementations must use the following HTTP response codes and error texts. However, the particular text used for description field is an implementation specific aspect. Error list (HTTP response code in parenthesis): * &#x60;ParseError&#x60; (400). The incoming JSON payload cannot be parsed. * &#x60;BadRequest&#x60; (400). The incoming request is invalid in this context. * &#x60;NotFound&#x60; (404). The resource (entity, subscription, etc.) referred in the request has not been found. * &#x60;TooManyResults&#x60; (409). There are several results that match with the resource identification used in the request. * &#x60;ContentLengthRequired&#x60; (411). Zero/No Content-Length in PUT/POST/PATCH request. * &#x60;RequestEntityTooLarge&#x60; (413). Payload is too large. * &#x60;UnsupportedMediaType&#x60; (415). Request content type is not supported. * &#x60;InvalidModification&#x60; (422). Some piece of information is missing in payload. * &#x60;NotSupportedQuery&#x60; (422). The implementation does not support the query issued. * &#x60;NoResourcesAvailable&#x60; (413). There are no server resources to fulfill the client request. New error codes may be defined in new iterations of this specificatio.
   * @alias module:model/ErrorResponse
   * @class
   * @param error {String} 
   */
  var exports = function(error) {
    var _this = this;

    _this['error'] = error;

  };

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


