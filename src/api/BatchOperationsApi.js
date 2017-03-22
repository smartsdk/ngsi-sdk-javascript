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
    define(['ApiClient', 'model/Body2', 'model/Body3', 'model/ErrorModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body2'), require('../model/Body3'), require('../model/ErrorModel'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.BatchOperationsApi = factory(root.NgsiV2.ApiClient, root.NgsiV2.Body2, root.NgsiV2.Body3, root.NgsiV2.ErrorModel);
  }
}(this, function(ApiClient, Body2, Body3, ErrorModel) {
  'use strict';

  /**
   * BatchOperations service.
   * @module api/BatchOperationsApi
   * @version v2
   */

  /**
   * Constructs a new BatchOperationsApi. 
   * @alias module:api/BatchOperationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the query operation.
     * @callback module:api/BatchOperationsApi~queryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The response payload is an Array containing one object per matching entity, or an empty array &#x60;[]&#x60; if  no entities are found. The entities follow the JSON entity representation format (described in the section \&quot;JSON Entity Representation\&quot;). The payload may contain the following elements (all of them optional): + &#x60;entities&#x60;: a list of entites to search for. Each element is represented by a JSON object with the   following elements:     + &#x60;id&#x60; or &#x60;idPattern&#x60;: Id or pattern of the affected entities. Both cannot be used at the same       time, but at least one of them must be present.     + &#x60;type&#x60; or &#x60;typePattern&#x60;: Type or type pattern of the entities to search for. Both cannot be used at       the same time. If omitted, it means \&quot;any entity type\&quot;. + &#x60;attributes&#x60;: a list of attribute names to search for. If omitted, it means \&quot;all attributes\&quot;. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {module:model/Body3} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of entities to be retrieved.
     * @param {Number} opts.offset Skip a number of records.
     * @param {String} opts.orderBy Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details.
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/BatchOperationsApi~queryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.query = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling query");
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'orderBy': opts['orderBy'],
        'options': opts['options']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/op/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/BatchOperationsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This operation allows to create, update and/or delete several entities in a single batch operation. The payload is an object with two properties: + &#x60;actionType&#x60;, to specify the kind of update action to do: either APPEND, APPEND_STRICT, UPDATE,   DELETE. + &#x60;entities&#x60;, an array of entities, each one specified using the JSON entity representation format   (described in the section \&quot;JSON Entity Representation\&quot;). Response: * Successful operation uses 204 No Content. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {module:model/Body2} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/BatchOperationsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.update = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling update");
      }


      var pathParams = {
      };
      var queryParams = {
        'options': opts['options']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/op/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
