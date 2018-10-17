/**
 * ngsi-v2
 * NGSI V2 API RC-2018.04
 *
 * OpenAPI spec version: v2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AttributeValue', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AttributeValue'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.AttributeValueApi = factory(root.NgsiV2.ApiClient, root.NgsiV2.AttributeValue, root.NgsiV2.ErrorResponse);
  }
}(this, function(ApiClient, AttributeValue, ErrorResponse) {
  'use strict';

  /**
   * AttributeValue service.
   * @module /AttributeValueApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AttributeValueApi. 
   * @alias module:/AttributeValueApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAttributeValue operation.
     * @callback module:/AttributeValueApi~getAttributeValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This operation returns the &#x60;value&#x60; property with the value of the attribute. * If attribute value is JSON Array or Object:   * If &#x60;Accept&#x60; header can be expanded to &#x60;application/json&#x60; or &#x60;text/plain&#x60; return the value as a JSON with a     response type of application/json or text/plain (whichever is the first in &#x60;Accept&#x60; header or     &#x60;application/json&#x60; in the case of &#x60;Accept: *_/_*&#x60;).   * Else return a HTTP error \&quot;406 Not Acceptable: accepted MIME types: application/json, text/plain\&quot; * If attribute value is a string, number, null or boolean:   * If &#x60;Accept&#x60; header can be expanded to text/plain return the value as text. In case of a string, citation     marks are used at the begining and end.   * Else return a HTTP error \&quot;406 Not Acceptable: accepted MIME types: text/plain\&quot; Response: * Successful operation uses 200 OK. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity in question
     * @param {String} attrName Name of the attribute to be retrieved.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:/AttributeValueApi~getAttributeValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeValue}
     */
    this.getAttributeValue = function(entityId, attrName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getAttributeValue");
      }

      // verify the required parameter 'attrName' is set
      if (attrName === undefined || attrName === null) {
        throw new Error("Missing the required parameter 'attrName' when calling getAttributeValue");
      }


      var pathParams = {
        'entityId': entityId,
        'attrName': attrName
      };
      var queryParams = {
        'type': opts['type'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = [];
      var accepts = ['application/json', 'plain/text'];
      var returnType = AttributeValue;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs/{attrName}/value', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAttributeValue operation.
     * @callback module:/AttributeValueApi~updateAttributeValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The request payload is the new attribute value. * If the request payload MIME type is &#x60;application/json&#x60;, then the value of the attribute is set to   the JSON object or array coded in the payload (if the payload is not a valid JSON document,   then an error is returned). * If the request payload MIME type is &#x60;text/plain&#x60;, then the following algorithm is applied to the   payload:   * If the payload starts and ends with citation-marks (&#x60;\&quot;&#x60;), the value is taken as a string     (the citation marks themselves are not considered part of the string)   * If &#x60;true&#x60; or &#x60;false&#x60;, the value is taken as a boolean.   * If &#x60;null&#x60;, the value is taken as null.   * If these first three tests &#39;fail&#39;, the text is interpreted as a number.   * If not a valid number, then an error is returned and the attribute&#39;s value is unchanged. The payload MIME type in the request is specified in the &#x60;Content-Type&#x60; HTTP header. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity to be updated.
     * @param {String} attrName Attribute name.
     * @param {module:model/AttributeValue} body JSON AttributeValue Representation
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:/AttributeValueApi~updateAttributeValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAttributeValue = function(entityId, attrName, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateAttributeValue");
      }

      // verify the required parameter 'attrName' is set
      if (attrName === undefined || attrName === null) {
        throw new Error("Missing the required parameter 'attrName' when calling updateAttributeValue");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAttributeValue");
      }


      var pathParams = {
        'entityId': entityId,
        'attrName': attrName
      };
      var queryParams = {
        'type': opts['type'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['fiware_token'];
      var contentTypes = ['application/json', 'plain/text'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs/{attrName}/value', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
