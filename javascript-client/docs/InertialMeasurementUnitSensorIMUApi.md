# SenseHatApi.InertialMeasurementUnitSensorIMUApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iMUSensorsGetAccelerometerGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetAccelerometerGet) | **GET** /IMU_sensors/get_accelerometer | Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 
[**iMUSensorsGetAccelerometerRawGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetAccelerometerRawGet) | **GET** /IMU_sensors/get_accelerometer_raw | Gets the raw x, y and z axis accelerometer data. 
[**iMUSensorsGetCompassGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetCompassGet) | **GET** /IMU_sensors/get_compass | Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 
[**iMUSensorsGetCompassRawGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetCompassRawGet) | **GET** /IMU_sensors/get_compass_raw | Gets the raw x, y and z axis magnetometer data. 
[**iMUSensorsGetGyroscopeGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetGyroscopeGet) | **GET** /IMU_sensors/get_gyroscope | Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 
[**iMUSensorsGetGyroscopeRawGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetGyroscopeRawGet) | **GET** /IMU_sensors/get_gyroscope_raw | Gets the raw x, y and z axis gyroscope data. 
[**iMUSensorsGetOrientationDegreesGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetOrientationDegreesGet) | **GET** /IMU_sensors/get_orientation_degrees | Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 
[**iMUSensorsGetOrientationGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetOrientationGet) | **GET** /IMU_sensors/get_orientation | Calls get_orientation_degrees above. 
[**iMUSensorsGetOrientationRadiansGet**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsGetOrientationRadiansGet) | **GET** /IMU_sensors/get_orientation_radians | Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 
[**iMUSensorsSetImuConfigPut**](InertialMeasurementUnitSensorIMUApi.md#iMUSensorsSetImuConfigPut) | **PUT** /IMU_sensors/set_imu_config | Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 


<a name="iMUSensorsGetAccelerometerGet"></a>
# **iMUSensorsGetAccelerometerGet**
> Orientation iMUSensorsGetAccelerometerGet()

Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetAccelerometerGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Orientation**](Orientation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetAccelerometerRawGet"></a>
# **iMUSensorsGetAccelerometerRawGet**
> Vertice iMUSensorsGetAccelerometerRawGet()

Gets the raw x, y and z axis accelerometer data. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetAccelerometerRawGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Vertice**](Vertice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetCompassGet"></a>
# **iMUSensorsGetCompassGet**
> &#39;Number&#39; iMUSensorsGetCompassGet()

Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetCompassGet(callback);
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

<a name="iMUSensorsGetCompassRawGet"></a>
# **iMUSensorsGetCompassRawGet**
> Vertice iMUSensorsGetCompassRawGet()

Gets the raw x, y and z axis magnetometer data. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetCompassRawGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Vertice**](Vertice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetGyroscopeGet"></a>
# **iMUSensorsGetGyroscopeGet**
> Orientation iMUSensorsGetGyroscopeGet()

Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetGyroscopeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Orientation**](Orientation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetGyroscopeRawGet"></a>
# **iMUSensorsGetGyroscopeRawGet**
> Vertice iMUSensorsGetGyroscopeRawGet()

Gets the raw x, y and z axis gyroscope data. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetGyroscopeRawGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Vertice**](Vertice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetOrientationDegreesGet"></a>
# **iMUSensorsGetOrientationDegreesGet**
> Orientation iMUSensorsGetOrientationDegreesGet()

Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetOrientationDegreesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Orientation**](Orientation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetOrientationGet"></a>
# **iMUSensorsGetOrientationGet**
> Orientation iMUSensorsGetOrientationGet()

Calls get_orientation_degrees above. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetOrientationGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Orientation**](Orientation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsGetOrientationRadiansGet"></a>
# **iMUSensorsGetOrientationRadiansGet**
> Orientation iMUSensorsGetOrientationRadiansGet()

Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsGetOrientationRadiansGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Orientation**](Orientation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iMUSensorsSetImuConfigPut"></a>
# **iMUSensorsSetImuConfigPut**
> &#39;Number&#39; iMUSensorsSetImuConfigPut(compassEnabled, gyroEnabled, accelEnabled)

Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.InertialMeasurementUnitSensorIMUApi();

var compassEnabled = true; // Boolean | Whether or not the compass should be enabled.

var gyroEnabled = true; // Boolean | Whether or not the gyroscope should be enabled.

var accelEnabled = true; // Boolean | Whether or not the accelerometer should be enabled.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iMUSensorsSetImuConfigPut(compassEnabled, gyroEnabled, accelEnabled, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compassEnabled** | **Boolean**| Whether or not the compass should be enabled. | 
 **gyroEnabled** | **Boolean**| Whether or not the gyroscope should be enabled. | 
 **accelEnabled** | **Boolean**| Whether or not the accelerometer should be enabled. | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

