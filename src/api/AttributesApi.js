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
    define(['ApiClient', 'model/Entity', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Entity'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.AttributesApi = factory(root.NgsiV2.ApiClient, root.NgsiV2.Entity, root.NgsiV2.ErrorResponse);
  }
}(this, function(ApiClient, Entity, ErrorResponse) {
  'use strict';

  /**
   * Attributes service.
   * @module api/AttributesApi
   * @version v2
   */

  /**
   * Constructs a new AttributesApi. 
   * @alias module:api/AttributesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAttributeData operation.
     * @callback module:api/AttributesApi~getAttributeDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Entity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a JSON object with the attribute data of the attribute. The object follows the JSON Representation for attributes (described in \&quot;JSON Attribute Representation\&quot; section). Response: * Successful operation uses 200 OK. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity
     * @param {String} attrName Name of the attribute to be retrieved.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:api/AttributesApi~getAttributeDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Entity}
     */
    this.getAttributeData = function(entityId, attrName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling getAttributeData");
      }

      // verify the required parameter 'attrName' is set
      if (attrName == undefined || attrName == null) {
        throw new Error("Missing the required parameter 'attrName' when calling getAttributeData");
      }


      var pathParams = {
        'entityId': entityId,
        'attrName': attrName
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Entity;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs/{attrName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeASingleAttribute operation.
     * @callback module:api/AttributesApi~removeASingleAttributeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes an entity attribute. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity.
     * @param {String} attrName Attribute name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:api/AttributesApi~removeASingleAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeASingleAttribute = function(entityId, attrName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling removeASingleAttribute");
      }

      // verify the required parameter 'attrName' is set
      if (attrName == undefined || attrName == null) {
        throw new Error("Missing the required parameter 'attrName' when calling removeASingleAttribute");
      }


      var pathParams = {
        'entityId': entityId,
        'attrName': attrName
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs/{attrName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAttributeData operation.
     * @callback module:api/AttributesApi~updateAttributeDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The request payload is an object representing the new attribute data. Previous attribute data is replaced by the one in the request. The object follows the JSON Representation for attributes (described in \&quot;JSON Attribute Representation\&quot; section). Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity to update
     * @param {String} attrName Attribute name
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
     * @param {module:api/AttributesApi~updateAttributeDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAttributeData = function(entityId, attrName, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateAttributeData");
      }

      // verify the required parameter 'attrName' is set
      if (attrName == undefined || attrName == null) {
        throw new Error("Missing the required parameter 'attrName' when calling updateAttributeData");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling updateAttributeData");
      }


      var pathParams = {
        'entityId': entityId,
        'attrName': attrName
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs/{attrName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
