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
    define(['ApiClient', 'model/CreateEntityRequest', 'model/ListEntitiesResponse', 'model/ReplaceAllEntityAttributesRequest', 'model/RetrieveEntityAttributesResponse', 'model/RetrieveEntityResponse', 'model/UpdateExistingEntityAttributesRequest', 'model/UpdateOrAppendEntityAttributesRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateEntityRequest'), require('../model/ListEntitiesResponse'), require('../model/ReplaceAllEntityAttributesRequest'), require('../model/RetrieveEntityAttributesResponse'), require('../model/RetrieveEntityResponse'), require('../model/UpdateExistingEntityAttributesRequest'), require('../model/UpdateOrAppendEntityAttributesRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.NgsiV2) {
      root.NgsiV2 = {};
    }
    root.NgsiV2.EntitiesApi = factory(root.NgsiV2.ApiClient, root.NgsiV2.CreateEntityRequest, root.NgsiV2.ListEntitiesResponse, root.NgsiV2.ReplaceAllEntityAttributesRequest, root.NgsiV2.RetrieveEntityAttributesResponse, root.NgsiV2.RetrieveEntityResponse, root.NgsiV2.UpdateExistingEntityAttributesRequest, root.NgsiV2.UpdateOrAppendEntityAttributesRequest);
  }
}(this, function(ApiClient, CreateEntityRequest, ListEntitiesResponse, ReplaceAllEntityAttributesRequest, RetrieveEntityAttributesResponse, RetrieveEntityResponse, UpdateExistingEntityAttributesRequest, UpdateOrAppendEntityAttributesRequest) {
  'use strict';

  /**
   * Entities service.
   * @module api/EntitiesApi
   * @version v2
   */

  /**
   * Constructs a new EntitiesApi. 
   * @alias module:api/EntitiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createEntity operation.
     * @callback module:api/EntitiesApi~createEntityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The payload is an object representing the entity to be created. The object follows the JSON entity representation format (described in a \&quot;JSON Entity Representation\&quot; section). Response: * Successful operation uses 201 Created. Reponse includes a &#x60;Location&#x60; header with the URL of the   created entity. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {module:model/CreateEntityRequest} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/EntitiesApi~createEntityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createEntity = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createEntity");
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
        '/entities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listEntities operation.
     * @callback module:api/EntitiesApi~listEntitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListEntitiesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a list of entities that match different criteria by id, type, pattern matching (either id or type) and/or those which match a query or geographical query (see [Simple Query Language](#simple_query_language) and  [Geographical Queries](#geographical_queries)). A given entity has to match all the criteria to be retrieved (i.e., the criteria is combined in a logical AND way). Note that pattern matching query parameters are incompatible (i.e. mutually exclusive) with their corresponding exact matching parameters, i.e. &#x60;idPattern&#x60; with &#x60;id&#x60; and &#x60;typePattern&#x60; with &#x60;type&#x60;. The response payload is an array containing one object per matching entity. Each entity follows the JSON entity representation format (described in \&quot;JSON Entity Representation\&quot; section). Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with idPattern.
     * @param {String} opts.type comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with &#x60;typePattern&#x60;.
     * @param {String} opts.idPattern A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with id.
     * @param {String} opts.typePattern A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with &#x60;type&#x60;.
     * @param {String} opts.q A query expression, composed of a list of statements separated by &#x60;;&#x60;, i.e., q&#x3D;statement;statements;statement. See [Simple Query Language specification](#simple_query_language).
     * @param {String} opts.mq A query expression for attribute metadata, composed of a list of statements separated by &#x60;;&#x60;, i.e., mq&#x3D;statement1;statement2;statement3. See [Simple Query Language specification](#simple_query_language).
     * @param {String} opts.georel Spatial relationship between matching entities and a reference shape. See [Geographical Queries](#geographical_queries).
     * @param {String} opts.geometry Geografical area to which the query is restricted. See [Geographical Queries](#geographical_queries).
     * @param {String} opts.coords List of latitude-longitude pairs of coordinates separated by &#39;;&#39;. See [Geographical Queries](#geographical_queries).
     * @param {Number} opts.limit Limits the number of entities to be retrieved
     * @param {Number} opts.offset Establishes the offset from where entities are retrieved
     * @param {String} opts.attrs Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.
     * @param {String} opts.orderBy Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details.
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/EntitiesApi~listEntitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListEntitiesResponse>}
     */
    this.listEntities = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'type': opts['type'],
        'idPattern': opts['idPattern'],
        'typePattern': opts['typePattern'],
        'q': opts['q'],
        'mq': opts['mq'],
        'georel': opts['georel'],
        'geometry': opts['geometry'],
        'coords': opts['coords'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'attrs': opts['attrs'],
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
      var returnType = [ListEntitiesResponse];

      return this.apiClient.callApi(
        '/entities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeEntity operation.
     * @callback module:api/EntitiesApi~removeEntityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the entity. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity to be deleted
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:api/EntitiesApi~removeEntityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeEntity = function(entityId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling removeEntity");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type']
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
        '/entities/{entityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceAllEntityAttributes operation.
     * @callback module:api/EntitiesApi~replaceAllEntityAttributesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The request payload is an object representing the new entity attributes. The object follows the JSON entity representation format (described in a \&quot;JSON Entity Representation\&quot; above), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The attributes previously existing in the entity are removed and replaced by the ones in the request. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity in question.
     * @param {module:model/ReplaceAllEntityAttributesRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {module:model/String} opts.options Operations options
     * @param {module:api/EntitiesApi~replaceAllEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.replaceAllEntityAttributes = function(entityId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling replaceAllEntityAttributes");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling replaceAllEntityAttributes");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type'],
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
        '/entities/{entityId}/attrs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveEntity operation.
     * @callback module:api/EntitiesApi~retrieveEntityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveEntityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The response is an object representing the entity identified by the ID. The object follows the JSON entity representation format (described in \&quot;JSON Entity Representation\&quot; section). This operation must return one entity element only, but there may be more than one entity with the same ID (e.g. entities with same ID but different types). In such case, an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.
     * @param {String} entityId Id of the entity to be retrieved
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
     * @param {String} opts.attrs Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/EntitiesApi~retrieveEntityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrieveEntityResponse}
     */
    this.retrieveEntity = function(entityId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveEntity");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type'],
        'attrs': opts['attrs'],
        'options': opts['options']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RetrieveEntityResponse;

      return this.apiClient.callApi(
        '/entities/{entityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveEntityAttributes operation.
     * @callback module:api/EntitiesApi~retrieveEntityAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveEntityAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This request is similar to retreiving the whole entity, however this one omits the &#x60;id&#x60; and &#x60;type&#x60; fields. Just like the general request of getting an entire entity, this operation must return only one entity element. If more than one entity with the same ID is found (e.g. entities with same ID but different type), an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity to be retrieved
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
     * @param {String} opts.attrs Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
     * @param {module:model/String} opts.options Options dictionary
     * @param {module:api/EntitiesApi~retrieveEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrieveEntityAttributesResponse}
     */
    this.retrieveEntityAttributes = function(entityId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveEntityAttributes");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type'],
        'attrs': opts['attrs'],
        'options': opts['options']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RetrieveEntityAttributesResponse;

      return this.apiClient.callApi(
        '/entities/{entityId}/attrs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExistingEntityAttributes operation.
     * @callback module:api/EntitiesApi~updateExistingEntityAttributesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The request payload is an object representing the attributes to update. The object follows the JSON entity representation format (described in \&quot;JSON Entity Representation\&quot; section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The entity attributes are updated with the ones in the payload. In addition to that, if one or more attributes in the payload doesn&#39;t exist in the entity, an error is returned. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Id of the entity to be updated
     * @param {module:model/UpdateExistingEntityAttributesRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
     * @param {module:model/String} opts.options Operations options
     * @param {module:api/EntitiesApi~updateExistingEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExistingEntityAttributes = function(entityId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateExistingEntityAttributes");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling updateExistingEntityAttributes");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type'],
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
        '/entities/{entityId}/attrs', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrAppendEntityAttributes operation.
     * @callback module:api/EntitiesApi~updateOrAppendEntityAttributesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The request payload is an object representing the attributes to append or update. The object follows the JSON entity representation format (described in \&quot;JSON Entity Representation\&quot; section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The entity attributes are updated with the ones in the payload, depending on whether the &#x60;append&#x60; operation option is used or not. * If &#x60;append&#x60; is not used: the entity attributes are updated (if they previously exist) or appended   (if they don&#39;t previously exist) with the ones in the payload. * If &#x60;append&#x60; is used (i.e. strict append semantics): all the attributes in the payload not   previously existing in the entity are appended. In addition to that, in case some of the   attributes in the payload already exist in the entity, an error is returned. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.
     * @param {String} entityId Entity id to be updated
     * @param {module:model/UpdateOrAppendEntityAttributesRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
     * @param {module:model/String} opts.options Operations options
     * @param {module:api/EntitiesApi~updateOrAppendEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrAppendEntityAttributes = function(entityId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'entityId' is set
      if (entityId == undefined || entityId == null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateOrAppendEntityAttributes");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrAppendEntityAttributes");
      }


      var pathParams = {
        'entityId': entityId
      };
      var queryParams = {
        'type': opts['type'],
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
        '/entities/{entityId}/attrs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
