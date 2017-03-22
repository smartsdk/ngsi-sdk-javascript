# NgsiV2.BatchOperationsApi

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query**](BatchOperationsApi.md#query) | **POST** /op/query | 
[**update**](BatchOperationsApi.md#update) | **POST** /op/update | 


<a name="query"></a>
# **query**
> [Object] query(body, opts)



The response payload is an Array containing one object per matching entity, or an empty array &#x60;[]&#x60; if  no entities are found. The entities follow the JSON entity Representation format (described in the section \&quot;JSON Entity Representation\&quot;). The payload may contain the following elements (all of them optional): + &#x60;entities&#x60;: a list of entites to search for. Each element is represented by a JSON object with the   following elements:     + &#x60;id&#x60; or &#x60;idPattern&#x60;: Id or pattern of the affected entities. Both cannot be used at the same       time, but at least one of them must be present.     + &#x60;type&#x60; or &#x60;typePattern&#x60;: Type or type pattern of the entities to search for. Both cannot be used at       the same time. If omitted, it means \&quot;any entity type\&quot;. + &#x60;attributes&#x60;: a list of attribute names to search for. If omitted, it means \&quot;all attributes\&quot;.  Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: fiware_oauth2
var fiware_oauth2 = defaultClient.authentications['fiware_oauth2'];
fiware_oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new NgsiV2.BatchOperationsApi();

var body = new NgsiV2.Query(); // Query | 

var opts = { 
  'limit': 1.2, // Number | Limit the number of entities to be retrieved.
  'offset': 1.2, // Number | Skip a number of records.
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
apiInstance.query(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)|  | 
 **limit** | **Number**| Limit the number of entities to be retrieved. | [optional] 
 **offset** | **Number**| Skip a number of records. | [optional] 
 **orderBy** | **String**| Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details. | [optional] 
 **options** | **String**| Options dictionary | [optional] 

### Return type

**[Object]**

### Authorization

[fiware_oauth2](../README.md#fiware_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="update"></a>
# **update**
> update(body, opts)



This operation allows to create, update and/or delete several entities in a single batch operation. The payload is an object with two properties: + &#x60;actionType&#x60;, to specify the kind of update action to do: either APPEND, APPEND_STRICT, UPDATE,   DELETE. + &#x60;entities&#x60;, an array of entities, each one specified using the JSON entity Representation format   (described in the section \&quot;JSON Entity Representation\&quot;). Response: * Successful operation uses 204 No Content. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: fiware_oauth2
var fiware_oauth2 = defaultClient.authentications['fiware_oauth2'];
fiware_oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new NgsiV2.BatchOperationsApi();

var body = new NgsiV2.BatchOperation(); // BatchOperation | 

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
apiInstance.update(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchOperation**](BatchOperation.md)|  | 
 **options** | **String**| Options dictionary | [optional] 

### Return type

null (empty response body)

### Authorization

[fiware_oauth2](../README.md#fiware_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

