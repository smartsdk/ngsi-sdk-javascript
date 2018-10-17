var prompt = require('prompt');

  var properties = [
    {
      name: 'username',
    },
    {
      name: 'password',
      hidden: true
    }
  ];

  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }

  var request = require('request');

  request.post(
    'https://orion.lab.fiware.org/token',
    { json: { username: result.username,
              password: result.password} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
	  token = body.replace(/\r?\n|\r/g, '')
          console.log("token: "+ token);
          testAPI(token);
        } else {
	  console.error("invalid user/password");
          console.error("status code:" +response.statusCode);
	  return 1;
	} 
    }
  );

  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

 function testAPI(data){
   var NgsiV2 = require('ngsi_v2');

   var defaultClient = NgsiV2.ApiClient.instance;

   // Configure API key authorization: fiware_token
   var fiware_token = defaultClient.authentications['fiware_token'];
   fiware_token.apiKey = encodeURIComponent(data);
   //fiware_token.apiKey = "token";

   // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
   // fiware_token.apiKey['X-Auth-Token'] = "Token"

   var apiInstance = new NgsiV2.APIEntryPointApi();

   var callback = function(error, data, response) {
     if (error) {
       console.error(error);
     } else {
       console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
     }
   };
   apiInstance.retrieveAPIResources(callback);

   apiInstance = new NgsiV2.EntitiesApi();

   var opts = {};

   apiInstance.listEntities(opts, callback);

   apiInstance = new NgsiV2.SubscriptionsApi();

   apiInstance.retrieveSubscriptions(opts, callback);

   apiInstance = new NgsiV2.RegistrationsApi();

   apiInstance.retrieveRegistrations(opts, callback);

   apiInstance = new NgsiV2.EntitiesApi();

   var entityId = "urn:smartsantander:testbed:357"; // String | Id of the entity to be retrieved

   apiInstance.retrieveEntity(entityId, opts, callback);
 }
