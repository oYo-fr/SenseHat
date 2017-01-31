# SenseHatApi.EnvironmentalSensorApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentalSensorsGetHumidityGet**](EnvironmentalSensorApi.md#environmentalSensorsGetHumidityGet) | **GET** /Environmental_sensors/get_humidity | Gets the percentage of relative humidity from the humidity sensor. 
[**environmentalSensorsGetPressureGet**](EnvironmentalSensorApi.md#environmentalSensorsGetPressureGet) | **GET** /Environmental_sensors/get_pressure | Gets the current pressure in Millibars from the pressure sensor. 
[**environmentalSensorsGetTemperatureFromHumidityGet**](EnvironmentalSensorApi.md#environmentalSensorsGetTemperatureFromHumidityGet) | **GET** /Environmental_sensors/get_temperature_from_humidity | Gets the current temperature in degrees Celsius from the humidity sensor. 
[**environmentalSensorsGetTemperatureFromPressureGet**](EnvironmentalSensorApi.md#environmentalSensorsGetTemperatureFromPressureGet) | **GET** /Environmental_sensors/get_temperature_from_pressure | Gets the current temperature in degrees Celsius from the pressure sensor. 
[**environmentalSensorsGetTemperatureGet**](EnvironmentalSensorApi.md#environmentalSensorsGetTemperatureGet) | **GET** /Environmental_sensors/get_temperature | Calls get_temperature_from_humidity below. 


<a name="environmentalSensorsGetHumidityGet"></a>
# **environmentalSensorsGetHumidityGet**
> &#39;Number&#39; environmentalSensorsGetHumidityGet()

Gets the percentage of relative humidity from the humidity sensor. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.EnvironmentalSensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.environmentalSensorsGetHumidityGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="environmentalSensorsGetPressureGet"></a>
# **environmentalSensorsGetPressureGet**
> &#39;Number&#39; environmentalSensorsGetPressureGet()

Gets the current pressure in Millibars from the pressure sensor. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.EnvironmentalSensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.environmentalSensorsGetPressureGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="environmentalSensorsGetTemperatureFromHumidityGet"></a>
# **environmentalSensorsGetTemperatureFromHumidityGet**
> &#39;Number&#39; environmentalSensorsGetTemperatureFromHumidityGet()

Gets the current temperature in degrees Celsius from the humidity sensor. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.EnvironmentalSensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.environmentalSensorsGetTemperatureFromHumidityGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="environmentalSensorsGetTemperatureFromPressureGet"></a>
# **environmentalSensorsGetTemperatureFromPressureGet**
> &#39;Number&#39; environmentalSensorsGetTemperatureFromPressureGet()

Gets the current temperature in degrees Celsius from the pressure sensor. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.EnvironmentalSensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.environmentalSensorsGetTemperatureFromPressureGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="environmentalSensorsGetTemperatureGet"></a>
# **environmentalSensorsGetTemperatureGet**
> &#39;Number&#39; environmentalSensorsGetTemperatureGet()

Calls get_temperature_from_humidity below. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.EnvironmentalSensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.environmentalSensorsGetTemperatureGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

