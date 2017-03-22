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
    define(['ApiClient', 'model/ErrorResponse', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ErrorResponse'), require('./model/Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.SubscriptionsApi = factory(root.NgsiV2.ApiClient, root.NgsiV2.ErrorResponse, root.NgsiV2.Subscription);
  }
}(this, function(ApiClient, ErrorResponse, Subscription) {
  'use strict';

  /**
   * Subscriptions service.
   * @module /SubscriptionsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SubscriptionsApi. 
   * @alias module:/SubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createANewSubscription operation.
     * @callback module:/SubscriptionsApi~createANewSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new subscription. The subscription is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {module:model/Subscription} body 
     * @param {module:/SubscriptionsApi~createANewSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createANewSubscription = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createANewSubscription");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscription operation.
     * @callback module:/SubscriptionsApi~deleteSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels subscription. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} subscriptionId subscription Id.
     * @param {module:/SubscriptionsApi~deleteSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubscription = function(subscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId == undefined || subscriptionId == null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteSubscription");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSubscription operation.
     * @callback module:/SubscriptionsApi~retrieveSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The response is the subscription represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} subscriptionId subscription Id.
     * @param {module:/SubscriptionsApi~retrieveSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.retrieveSubscription = function(subscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId == undefined || subscriptionId == null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling retrieveSubscription");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSubscriptions operation.
     * @callback module:/SubscriptionsApi~retrieveSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Subscription>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all the subscriptions present in the system. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of types to be retrieved
     * @param {Number} opts.offset Skip a number of records
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:/SubscriptionsApi~retrieveSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Subscription>}
     */
    this.retrieveSubscriptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'options': opts['options']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Subscription];

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscription operation.
     * @callback module:/SubscriptionsApi~updateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Only the fields included in the request are updated in the subscription. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} subscriptionId subscription Id.
     * @param {module:model/Subscription} body 
     * @param {module:/SubscriptionsApi~updateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubscription = function(subscriptionId, body, callback) {
      var postBody = body;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId == undefined || subscriptionId == null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling updateSubscription");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling updateSubscription");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));