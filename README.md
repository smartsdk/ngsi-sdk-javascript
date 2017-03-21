# ngsi_v2

NgsiV2 - JavaScript client for ngsi_v2
NGSI V2 API description in Swagger
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v2
- Package version: v2
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ngsi_v2 --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/ngsi_v2
then install it via:

```shell
    npm install YOUR_USERNAME/ngsi_v2 --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NgsiV2 = require('ngsi_v2');

var api = new NgsiV2.APIEntryPointApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.retrieveAPIResources(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://orion.lab.fiware.org:1026/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NgsiV2.APIEntryPointApi* | [**retrieveAPIResources**](docs/APIEntryPointApi.md#retrieveAPIResources) | **GET** / | 
*NgsiV2.AttributeValueApi* | [**getAttributeValue**](docs/AttributeValueApi.md#getAttributeValue) | **GET** /entities/{entityId}/attrs/{attrName}/value | 
*NgsiV2.AttributeValueApi* | [**updateAttributeValue**](docs/AttributeValueApi.md#updateAttributeValue) | **PUT** /entities/{entityId}/attrs/{attrName}/value | 
*NgsiV2.AttributesApi* | [**getAttributeData**](docs/AttributesApi.md#getAttributeData) | **GET** /entities/{entityId}/attrs/{attrName} | 
*NgsiV2.AttributesApi* | [**removeASingleAttribute**](docs/AttributesApi.md#removeASingleAttribute) | **DELETE** /entities/{entityId}/attrs/{attrName} | 
*NgsiV2.AttributesApi* | [**updateAttributeData**](docs/AttributesApi.md#updateAttributeData) | **PUT** /entities/{entityId}/attrs/{attrName} | 
*NgsiV2.BatchOperationsApi* | [**query**](docs/BatchOperationsApi.md#query) | **POST** /op/query | 
*NgsiV2.BatchOperationsApi* | [**update**](docs/BatchOperationsApi.md#update) | **POST** /op/update | 
*NgsiV2.EntitiesApi* | [**createEntity**](docs/EntitiesApi.md#createEntity) | **POST** /entities | 
*NgsiV2.EntitiesApi* | [**listEntities**](docs/EntitiesApi.md#listEntities) | **GET** /entities | 
*NgsiV2.EntitiesApi* | [**removeEntity**](docs/EntitiesApi.md#removeEntity) | **DELETE** /entities/{entityId} | 
*NgsiV2.EntitiesApi* | [**replaceAllEntityAttributes**](docs/EntitiesApi.md#replaceAllEntityAttributes) | **PUT** /entities/{entityId}/attrs | 
*NgsiV2.EntitiesApi* | [**retrieveEntity**](docs/EntitiesApi.md#retrieveEntity) | **GET** /entities/{entityId} | 
*NgsiV2.EntitiesApi* | [**retrieveEntityAttributes**](docs/EntitiesApi.md#retrieveEntityAttributes) | **GET** /entities/{entityId}/attrs | 
*NgsiV2.EntitiesApi* | [**updateExistingEntityAttributes**](docs/EntitiesApi.md#updateExistingEntityAttributes) | **PATCH** /entities/{entityId}/attrs | 
*NgsiV2.EntitiesApi* | [**updateOrAppendEntityAttributes**](docs/EntitiesApi.md#updateOrAppendEntityAttributes) | **POST** /entities/{entityId}/attrs | 
*NgsiV2.SubscriptionsApi* | [**createANewSubscription**](docs/SubscriptionsApi.md#createANewSubscription) | **POST** /subscriptions | 
*NgsiV2.SubscriptionsApi* | [**deleteSubscription**](docs/SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{subscriptionId} | 
*NgsiV2.SubscriptionsApi* | [**retrieveSubscription**](docs/SubscriptionsApi.md#retrieveSubscription) | **GET** /subscriptions/{subscriptionId} | 
*NgsiV2.SubscriptionsApi* | [**retrieveSubscriptions**](docs/SubscriptionsApi.md#retrieveSubscriptions) | **GET** /subscriptions | 
*NgsiV2.SubscriptionsApi* | [**updateSubscription**](docs/SubscriptionsApi.md#updateSubscription) | **PATCH** /subscriptions/{subscriptionId} | 
*NgsiV2.TypesApi* | [**retrieveEntityType**](docs/TypesApi.md#retrieveEntityType) | **GET** /types/{entityType} | 
*NgsiV2.TypesApi* | [**retrieveEntityTypes**](docs/TypesApi.md#retrieveEntityTypes) | **GET** /types/ | 


## Documentation for Models

 - [NgsiV2.CreateANewSubscriptionRequest](docs/CreateANewSubscriptionRequest.md)
 - [NgsiV2.InlineResponse200](docs/InlineResponse200.md)
 - [NgsiV2.QueryRequest](docs/QueryRequest.md)
 - [NgsiV2.QueryResponse](docs/QueryResponse.md)
 - [NgsiV2.RetrieveApiResourcesResponse](docs/RetrieveApiResourcesResponse.md)
 - [NgsiV2.RetrieveSubscriptionResponse](docs/RetrieveSubscriptionResponse.md)
 - [NgsiV2.RetrieveSubscriptionsResponse](docs/RetrieveSubscriptionsResponse.md)
 - [NgsiV2.UpdateRequest](docs/UpdateRequest.md)
 - [NgsiV2.UpdateSubscriptionRequest](docs/UpdateSubscriptionRequest.md)


## Documentation for Authorization

 All endpoints do not require authorization.

