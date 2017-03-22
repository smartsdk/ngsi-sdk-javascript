# NgsiV2.APIEntryPointApi

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveAPIResources**](APIEntryPointApi.md#retrieveAPIResources) | **GET** / | 


<a name="retrieveAPIResources"></a>
# **retrieveAPIResources**
> APIEntryPoint retrieveAPIResources()



This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body. It is recommended to follow the “url” link values, [Link](https://tools.ietf.org/html/rfc5988) or Location headers where applicable to retrieve resources. Instead of constructing your own URLs, to keep your client decoupled from implementation details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: fiware_oauth2
var fiware_oauth2 = defaultClient.authentications['fiware_oauth2'];
fiware_oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new NgsiV2.APIEntryPointApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveAPIResources(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIEntryPoint**](APIEntryPoint.md)

### Authorization

[fiware_oauth2](../README.md#fiware_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

