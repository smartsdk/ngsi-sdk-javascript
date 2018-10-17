# NgsiV2.RegistrationsApi

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRegistrations**](RegistrationsApi.md#createRegistrations) | **POST** /registrations | 
[**deleteRegistration**](RegistrationsApi.md#deleteRegistration) | **DELETE** /registrations/{registrationId} | 
[**retrieveRegistration**](RegistrationsApi.md#retrieveRegistration) | **GET** /registrations/{registrationId} | 
[**retrieveRegistrations**](RegistrationsApi.md#retrieveRegistrations) | **GET** /registrations | 
[**updateRegistration**](RegistrationsApi.md#updateRegistration) | **PATCH** /registrations/{registrationId} | 


<a name="createRegistrations"></a>
# **createRegistrations**
> createRegistrations(body)



Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.RegistrationsApi();

var body = new NgsiV2.Registration(); // Registration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRegistrations(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Registration**](Registration.md)|  | 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistration"></a>
# **deleteRegistration**
> deleteRegistration(registrationId)



Cancels a context provider registration. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.RegistrationsApi();

var registrationId = "registrationId_example"; // String | registration Id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistration(registrationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| registration Id. | 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveRegistration"></a>
# **retrieveRegistration**
> RegistrationResponse retrieveRegistration(registrationId)



The response is the registration represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.RegistrationsApi();

var registrationId = "registrationId_example"; // String | registration Id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveRegistration(registrationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| registration Id. | 

### Return type

[**RegistrationResponse**](RegistrationResponse.md)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveRegistrations"></a>
# **retrieveRegistrations**
> [RegistrationResponse] retrieveRegistrations(opts)



Lists all the context provider registrations present in the system.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.RegistrationsApi();

var opts = { 
  'limit': 1.2, // Number | Limit the number of types to be retrieved
  'offset': 1.2, // Number | Skip a number of records
  'options': "options_example" // String | Options dictionary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveRegistrations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit the number of types to be retrieved | [optional] 
 **offset** | **Number**| Skip a number of records | [optional] 
 **options** | **String**| Options dictionary | [optional] 

### Return type

[**[RegistrationResponse]**](RegistrationResponse.md)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRegistration"></a>
# **updateRegistration**
> updateRegistration(registrationId, body)



Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection on \&quot;Error Responses\&quot; for more details.

### Example
```javascript
var NgsiV2 = require('ngsi_v2');
var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix = 'Token';

var apiInstance = new NgsiV2.RegistrationsApi();

var registrationId = "registrationId_example"; // String | registration Id.

var body = new NgsiV2.Registration(); // Registration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRegistration(registrationId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| registration Id. | 
 **body** | [**Registration**](Registration.md)|  | 

### Return type

null (empty response body)

### Authorization

[fiware_token](../README.md#fiware_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

