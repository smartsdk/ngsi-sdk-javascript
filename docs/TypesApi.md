# NgsiV2.TypesApi

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveEntityType**](TypesApi.md#retrieveEntityType) | **GET** /types/{entityType} | 
[**retrieveEntityTypes**](TypesApi.md#retrieveEntityTypes) | **GET** /types/ | 


<a name="retrieveEntityType"></a>
# **retrieveEntityType**
> Object retrieveEntityType(entityType)



This operation returns a JSON object with information about the type: * &#x60;attrs&#x60; : the set of attribute names along with all the entities of such type, represented in   a JSON object whose keys are the attribute names and whose values contain information of such   attributes (in particular a list of the types used by attributes with that name along with all the   entities). * &#x60;count&#x60; : the number of entities belonging to that type. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');

var apiInstance = new NgsiV2.TypesApi();

var entityType = "entityType_example"; // String | Entity Type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveEntityType(entityType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Entity Type | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEntityTypes"></a>
# **retrieveEntityTypes**
> [Entity] retrieveEntityTypes(opts)



If the &#x60;values&#x60; option is not in use, this operation returns a JSON array with the entity types. Each element is a JSON object with information about the type: * &#x60;type&#x60; : the entity type name. * &#x60;attrs&#x60; : the set of attribute names along with all the entities of such type, represented in   a JSON object whose keys are the attribute names and whose values contain information of such   attributes (in particular a list of the types used by attributes with that name along with all the   entities). * &#x60;count&#x60; : the number of entities belonging to that type. If the &#x60;values&#x60; option is used, the operation returns a JSON array with a list of entity type names as strings. Results are ordered by entity &#x60;type&#x60; in alphabetical order. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');

var apiInstance = new NgsiV2.TypesApi();

var opts = { 
  'limit': 1.2, // Number | Limit the number of types to be retrieved.
  'offset': 1.2, // Number | Skip a number of records.
  'options': "options_example" // String | Options dictionary.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveEntityTypes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit the number of types to be retrieved. | [optional] 
 **offset** | **Number**| Skip a number of records. | [optional] 
 **options** | **String**| Options dictionary. | [optional] 

### Return type

[**[Entity]**](Entity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

