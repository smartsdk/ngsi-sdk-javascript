# NgsiV2.EntitiesApi

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEntity**](EntitiesApi.md#createEntity) | **POST** /entities | 
[**listEntities**](EntitiesApi.md#listEntities) | **GET** /entities | 
[**removeEntity**](EntitiesApi.md#removeEntity) | **DELETE** /entities/{entityId} | 
[**replaceAllEntityAttributes**](EntitiesApi.md#replaceAllEntityAttributes) | **PUT** /entities/{entityId}/attrs | 
[**retrieveEntity**](EntitiesApi.md#retrieveEntity) | **GET** /entities/{entityId} | 
[**retrieveEntityAttributes**](EntitiesApi.md#retrieveEntityAttributes) | **GET** /entities/{entityId}/attrs | 
[**updateExistingEntityAttributes**](EntitiesApi.md#updateExistingEntityAttributes) | **PATCH** /entities/{entityId}/attrs | 
[**updateOrAppendEntityAttributes**](EntitiesApi.md#updateOrAppendEntityAttributes) | **POST** /entities/{entityId}/attrs | 


<a name="createEntity"></a>
# **createEntity**
> createEntity(body, opts)



The payload is an object representing the entity to be created. The object follows the JSON entity Representation format (described in a \&quot;JSON Entity Representation\&quot; section). Response: * Successful operation uses 201 Created. Reponse includes a &#x60;Location&#x60; header with the URL of the   created entity. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var body = new NgsiV2.Entity(); // Entity | JSON Entity Representation

var opts = { 
  'options': "options_example" // String | Options dictionary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createEntity(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Entity**](Entity.md)| JSON Entity Representation | 
 **options** | **String**| Options dictionary | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listEntities"></a>
# **listEntities**
> [Entity] listEntities(opts)



Retrieves a list of entities that match different criteria by id, type, pattern matching (either id or type) and/or those which match a query or geographical query (see [Simple Query Language](#simple_query_language) and  [Geographical Queries](#geographical_queries)). A given entity has to match all the criteria to be retrieved (i.e., the criteria is combined in a logical AND way). Note that pattern matching query parameters are incompatible (i.e. mutually exclusive) with their corresponding exact matching parameters, i.e. &#x60;idPattern&#x60; with &#x60;id&#x60; and &#x60;typePattern&#x60; with &#x60;type&#x60;. The response payload is an array containing one object per matching entity. Each entity follows the JSON entity Representation format (described in \&quot;JSON Entity Representation\&quot; section).  Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var opts = { 
  'id': "id_example", // String | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with idPattern.
  'type': "type_example", // String | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with `typePattern`.
  'idPattern': "idPattern_example", // String | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with id.
  'typePattern': "typePattern_example", // String | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with `type`.
  'q': "q_example", // String | A query expression, composed of a list of statements separated by `;`, i.e., q=statement;statements;statement. See [Simple Query Language specification](#simple_query_language).
  'mq': "mq_example", // String | A query expression for attribute metadata, composed of a list of statements separated by `;`, i.e., mq=statement1;statement2;statement3. See [Simple Query Language specification](#simple_query_language).
  'georel': "georel_example", // String | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](#geographical_queries).
  'geometry': "geometry_example", // String | Geografical area to which the query is restricted. See [Geographical Queries](#geographical_queries).
  'coords': "coords_example", // String | List of latitude-longitude pairs of coordinates separated by ';'. See [Geographical Queries](#geographical_queries).
  'limit': 1.2, // Number | Limits the number of entities to be retrieved
  'offset': 1.2, // Number | Establishes the offset from where entities are retrieved
  'attrs': "attrs_example", // String | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.
  'orderBy': "orderBy_example", // String | Criteria for ordering results. See \"Ordering Results\" section for details.
  'options': "options_example" // String | Options dictionary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listEntities(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with idPattern. | [optional] 
 **type** | **String**| comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with &#x60;typePattern&#x60;. | [optional] 
 **idPattern** | **String**| A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with id. | [optional] 
 **typePattern** | **String**| A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with &#x60;type&#x60;. | [optional] 
 **q** | **String**| A query expression, composed of a list of statements separated by &#x60;;&#x60;, i.e., q&#x3D;statement;statements;statement. See [Simple Query Language specification](#simple_query_language). | [optional] 
 **mq** | **String**| A query expression for attribute metadata, composed of a list of statements separated by &#x60;;&#x60;, i.e., mq&#x3D;statement1;statement2;statement3. See [Simple Query Language specification](#simple_query_language). | [optional] 
 **georel** | **String**| Spatial relationship between matching entities and a reference shape. See [Geographical Queries](#geographical_queries). | [optional] 
 **geometry** | **String**| Geografical area to which the query is restricted. See [Geographical Queries](#geographical_queries). | [optional] 
 **coords** | **String**| List of latitude-longitude pairs of coordinates separated by &#39;;&#39;. See [Geographical Queries](#geographical_queries). | [optional] 
 **limit** | **Number**| Limits the number of entities to be retrieved | [optional] 
 **offset** | **Number**| Establishes the offset from where entities are retrieved | [optional] 
 **attrs** | **String**| Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order. | [optional] 
 **orderBy** | **String**| Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details. | [optional] 
 **options** | **String**| Options dictionary | [optional] 

### Return type

[**[Entity]**](Entity.md)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEntity"></a>
# **removeEntity**
> removeEntity(entityId, opts)



Delete the entity. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Id of the entity to be deleted

var opts = { 
  'type': "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeEntity(entityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity to be deleted | 
 **type** | **String**| Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceAllEntityAttributes"></a>
# **replaceAllEntityAttributes**
> replaceAllEntityAttributes(entityId, body, opts)



The request payload is an object representing the new entity attributes. The object follows the JSON entity Representation format (described in a \&quot;JSON Entity Representation\&quot; above), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The attributes previously existing in the entity are removed and replaced by the ones in the request. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Id of the entity in question.

var body = new NgsiV2.Attribute(); // Attribute | JSON Attribute Representation

var opts = { 
  'type': "type_example", // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
  'options': "options_example" // String | Operations options
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.replaceAllEntityAttributes(entityId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity in question. | 
 **body** | [**Attribute**](Attribute.md)| JSON Attribute Representation | 
 **type** | **String**| Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] 
 **options** | **String**| Operations options | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEntity"></a>
# **retrieveEntity**
> Entity retrieveEntity(entityId, opts)



The response is an object representing the entity identified by the ID. The object follows the JSON entity Representation format (described in \&quot;JSON Entity Representation\&quot; section). This operation must return one entity element only, but there may be more than one entity with the same ID (e.g. entities with same ID but different types). In such case, an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Id of the entity to be retrieved

var opts = { 
  'type': "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
  'attrs': "attrs_example", // String | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
  'options': "options_example" // String | Options dictionary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveEntity(entityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity to be retrieved | 
 **type** | **String**| Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] 
 **attrs** | **String**| Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] 
 **options** | **String**| Options dictionary | [optional] 

### Return type

[**Entity**](Entity.md)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEntityAttributes"></a>
# **retrieveEntityAttributes**
> Attribute retrieveEntityAttributes(entityId, opts)



This request is similar to retreiving the whole entity, however this one omits the &#x60;id&#x60; and &#x60;type&#x60; fields. Just like the general request of getting an entire entity, this operation must return only one entity element. If more than one entity with the same ID is found (e.g. entities with same ID but different type), an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Id of the entity to be retrieved

var opts = { 
  'type': "type_example", // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
  'attrs': "attrs_example", // String | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
  'options': "options_example" // String | Options dictionary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveEntityAttributes(entityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity to be retrieved | 
 **type** | **String**| Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] 
 **attrs** | **String**| Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] 
 **options** | **String**| Options dictionary | [optional] 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExistingEntityAttributes"></a>
# **updateExistingEntityAttributes**
> updateExistingEntityAttributes(entityId, body, opts)



The request payload is an object representing the attributes to update. The object follows the JSON entity Representation format (described in \&quot;JSON Entity Representation\&quot; section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The entity attributes are updated with the ones in the payload. In addition to that, if one or more attributes in the payload doesn&#39;t exist in the entity, an error is returned. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Id of the entity to be updated

var body = new NgsiV2.Attribute(); // Attribute | JSON Attribute Representation

var opts = { 
  'type': "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
  'options': "options_example" // String | Operations options
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExistingEntityAttributes(entityId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity to be updated | 
 **body** | [**Attribute**](Attribute.md)| JSON Attribute Representation | 
 **type** | **String**| Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] 
 **options** | **String**| Operations options | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrAppendEntityAttributes"></a>
# **updateOrAppendEntityAttributes**
> updateOrAppendEntityAttributes(entityId, body, opts)



The request payload is an object representing the attributes to append or update. The object follows the JSON entity Representation format (described in \&quot;JSON Entity Representation\&quot; section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The entity attributes are updated with the ones in the payload, depending on whether the &#x60;append&#x60; operation option is used or not. * If &#x60;append&#x60; is not used: the entity attributes are updated (if they previously exist) or appended   (if they don&#39;t previously exist) with the ones in the payload. * If &#x60;append&#x60; is used (i.e. strict append semantics): all the attributes in the payload not   previously existing in the entity are appended. In addition to that, in case some of the   attributes in the payload already exist in the entity, an error is returned. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.EntitiesApi();

var entityId = "entityId_example"; // String | Entity id to be updated

var body = new NgsiV2.Attribute(); // Attribute | JSON Attribute Representation

var opts = { 
  'type': "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
  'options': "options_example" // String | Operations options
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrAppendEntityAttributes(entityId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Entity id to be updated | 
 **body** | [**Attribute**](Attribute.md)| JSON Attribute Representation | 
 **type** | **String**| Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] 
 **options** | **String**| Operations options | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

