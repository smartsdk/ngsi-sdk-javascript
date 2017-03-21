# NgsiV2.AttributesApi

All URIs are relative to *https://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttributeData**](AttributesApi.md#getAttributeData) | **GET** /entities/{entityId}/attrs/{attrName} | 
[**removeASingleAttribute**](AttributesApi.md#removeASingleAttribute) | **DELETE** /entities/{entityId}/attrs/{attrName} | 
[**updateAttributeData**](AttributesApi.md#updateAttributeData) | **PUT** /entities/{entityId}/attrs/{attrName} | 


<a name="getAttributeData"></a>
# **getAttributeData**
> Object getAttributeData(entityId, attrName, opts)



Returns a JSON object with the attribute data of the attribute. The object follows the JSON representation for attributes (described in \&quot;JSON Attribute Representation\&quot; section). Response: * Successful operation uses 200 OK. * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');

var apiInstance = new NgsiV2.AttributesApi();

var entityId = "entityId_example"; // String | Id of the entity

var attrName = "attrName_example"; // String | Name of the attribute to be retrieved.

var opts = { 
  'type': "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttributeData(entityId, attrName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity | 
 **attrName** | **String**| Name of the attribute to be retrieved. | 
 **type** | **String**| Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeASingleAttribute"></a>
# **removeASingleAttribute**
> removeASingleAttribute(entityId, attrName, opts)



Removes an entity attribute. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');

var apiInstance = new NgsiV2.AttributesApi();

var entityId = "entityId_example"; // String | Id of the entity.

var attrName = "attrName_example"; // String | Attribute name.

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
apiInstance.removeASingleAttribute(entityId, attrName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity. | 
 **attrName** | **String**| Attribute name. | 
 **type** | **String**| Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAttributeData"></a>
# **updateAttributeData**
> updateAttributeData(entityId, attrName, body, opts)



The request payload is an object representing the new attribute data. Previous attribute data is replaced by the one in the request. The object follows the JSON representation for attributes (described in \&quot;JSON Attribute Representation\&quot; section). Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for   more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');

var apiInstance = new NgsiV2.AttributesApi();

var entityId = "entityId_example"; // String | Id of the entity to update

var attrName = "attrName_example"; // String | Attribute name

var body = null; // Object | 

var opts = { 
  'type': "type_example" // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAttributeData(entityId, attrName, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| Id of the entity to update | 
 **attrName** | **String**| Attribute name | 
 **body** | **Object**|  | 
 **type** | **String**| Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

