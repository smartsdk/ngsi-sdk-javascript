# NGSI v2 Javascript and NodeJS SDK

The API SDK has been developed with the supprot of [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v2

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The library is available at [npmjs](https://www.npmjs.com/package/ngsi_v2).

To install it via npmjs:

```shell
npm install ngsi_v2 --save
```

#### git
#
If you fork and constumize the library, in a git repository, e.g.
https://github.com/smartsdk/ngsi-sdk-javascript.git
then install it via:

```shell
    npm install https://github.com/smartsdk/ngsi-sdk-javascript.git --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). The latest compiled version of the javascript library is available at [https://smartsdk.github.io/ngsi-sdk-javascript/js/ngsi.js](https://smartsdk.github.io/ngsi-sdk-javascript/js/ngsi.js)

To embed it in your HTML code:
```
<script src="https://smartsdk.github.io/ngsi-sdk-javascript/js/ngsi.js"></script>
```

In case of changes to the code, after following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following:

```shell
browserify js/main.js --require superagent --exports require -o js/ngsi.js
```

Then include *ngsi.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NgsiV2 = require('ngsi_v2'); // var NgsiV2 = FIWARE.NgsiV2 in case you are using it in Javascript code.

var defaultClient = NgsiV2.ApiClient.instance;

// Configure API key authorization: fiware_token
var fiware_token = defaultClient.authentications['fiware_token'];
fiware_token.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//fiware_token.apiKeyPrefix['X-Auth-Token'] = "Token"
var api = new NgsiV2.APIEntryPointApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.retrieveAPIResources(callback);

```

Look into [Examples](examples) folder for examples including OAuth token creation.

## Documentation for API Endpoints

All URIs are relative to *http://orion.lab.fiware.org:1026/v2*

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
 - [NgsiV2.APIEntryPoint](docs/APIEntryPoint.md)
 - [NgsiV2.Attribute](docs/Attribute.md)
 - [NgsiV2.AttributeValue](docs/AttributeValue.md)
 - [NgsiV2.BatchOperation](docs/BatchOperation.md)
 - [NgsiV2.Entity](docs/Entity.md)
 - [NgsiV2.EntityType](docs/EntityType.md)
 - [NgsiV2.ErrorResponse](docs/ErrorResponse.md)
 - [NgsiV2.Query](docs/Query.md)
 - [NgsiV2.QueryPattern](docs/QueryPattern.md)
 - [NgsiV2.Subscription](docs/Subscription.md)


## Documentation for Authorization

In case you need to access a Context Broker instance protected with a [PEP proxy](http://fiware-pep-proxy.readthedocs.io/en/latest/), set the authentication parameters as in the code above.
The SDK currently does not support the generation of tokens on your behalf, you need to take careo
of that in your own code. See [Examples](examples).

### fiware_token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header
