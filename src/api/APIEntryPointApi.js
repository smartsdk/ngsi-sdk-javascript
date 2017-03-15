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
    define(['ApiClient', 'model/RetrieveApiResourcesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RetrieveApiResourcesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2ExtensionTimeseries) {
      root.NgsiV2ExtensionTimeseries = {};
    }
    root.NgsiV2ExtensionTimeseries.APIEntryPointApi = factory(root.NgsiV2ExtensionTimeseries.ApiClient, root.NgsiV2ExtensionTimeseries.RetrieveApiResourcesResponse);
  }
}(this, function(ApiClient, RetrieveApiResourcesResponse) {
  'use strict';

  /**
   * APIEntryPoint service.
   * @module api/APIEntryPointApi
   * @version v2
   */

  /**
   * Constructs a new APIEntryPointApi. 
   * @alias module:api/APIEntryPointApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the retrieveAPIResources operation.
     * @callback module:api/APIEntryPointApi~retrieveAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveApiResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body. It is recommended to follow the “url” link values, [Link](https://tools.ietf.org/html/rfc5988) or Location headers where applicable to retrieve resources. Instead of constructing your own URLs, to keep your client decoupled from implementation details.
     * @param {module:api/APIEntryPointApi~retrieveAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrieveApiResourcesResponse}
     */
    this.retrieveAPIResources = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RetrieveApiResourcesResponse;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
