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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/Body1', 'model/CreateANewSubscriptionRequest', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/QueryRequest', 'model/QueryResponse', 'model/RetrieveSubscriptionResponse', 'model/UpdateRequest', 'model/UpdateSubscriptionRequest', 'api/APIEntryPointApi', 'api/AttributeValueApi', 'api/AttributesApi', 'api/BatchOperationsApi', 'api/EntitiesApi', 'api/SubscriptionsApi', 'api/TypesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body'), require('./model/Body1'), require('./model/CreateANewSubscriptionRequest'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/QueryRequest'), require('./model/QueryResponse'), require('./model/RetrieveSubscriptionResponse'), require('./model/UpdateRequest'), require('./model/UpdateSubscriptionRequest'), require('./api/APIEntryPointApi'), require('./api/AttributeValueApi'), require('./api/AttributesApi'), require('./api/BatchOperationsApi'), require('./api/EntitiesApi'), require('./api/SubscriptionsApi'), require('./api/TypesApi'));
  }
}(function(ApiClient, Body, Body1, CreateANewSubscriptionRequest, InlineResponse200, InlineResponse2001, QueryRequest, QueryResponse, RetrieveSubscriptionResponse, UpdateRequest, UpdateSubscriptionRequest, APIEntryPointApi, AttributeValueApi, AttributesApi, BatchOperationsApi, EntitiesApi, SubscriptionsApi, TypesApi) {
  'use strict';

  /**
   * NGSI_V2_API_description_in_Swagger.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NgsiV2 = require('index'); // See note below*.
   * var xxxSvc = new NgsiV2.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NgsiV2.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new NgsiV2.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NgsiV2.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1: Body1,
    /**
     * The CreateANewSubscriptionRequest model constructor.
     * @property {module:model/CreateANewSubscriptionRequest}
     */
    CreateANewSubscriptionRequest: CreateANewSubscriptionRequest,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The QueryRequest model constructor.
     * @property {module:model/QueryRequest}
     */
    QueryRequest: QueryRequest,
    /**
     * The QueryResponse model constructor.
     * @property {module:model/QueryResponse}
     */
    QueryResponse: QueryResponse,
    /**
     * The RetrieveSubscriptionResponse model constructor.
     * @property {module:model/RetrieveSubscriptionResponse}
     */
    RetrieveSubscriptionResponse: RetrieveSubscriptionResponse,
    /**
     * The UpdateRequest model constructor.
     * @property {module:model/UpdateRequest}
     */
    UpdateRequest: UpdateRequest,
    /**
     * The UpdateSubscriptionRequest model constructor.
     * @property {module:model/UpdateSubscriptionRequest}
     */
    UpdateSubscriptionRequest: UpdateSubscriptionRequest,
    /**
     * The APIEntryPointApi service constructor.
     * @property {module:api/APIEntryPointApi}
     */
    APIEntryPointApi: APIEntryPointApi,
    /**
     * The AttributeValueApi service constructor.
     * @property {module:api/AttributeValueApi}
     */
    AttributeValueApi: AttributeValueApi,
    /**
     * The AttributesApi service constructor.
     * @property {module:api/AttributesApi}
     */
    AttributesApi: AttributesApi,
    /**
     * The BatchOperationsApi service constructor.
     * @property {module:api/BatchOperationsApi}
     */
    BatchOperationsApi: BatchOperationsApi,
    /**
     * The EntitiesApi service constructor.
     * @property {module:api/EntitiesApi}
     */
    EntitiesApi: EntitiesApi,
    /**
     * The SubscriptionsApi service constructor.
     * @property {module:api/SubscriptionsApi}
     */
    SubscriptionsApi: SubscriptionsApi,
    /**
     * The TypesApi service constructor.
     * @property {module:api/TypesApi}
     */
    TypesApi: TypesApi
  };

  return exports;
}));
