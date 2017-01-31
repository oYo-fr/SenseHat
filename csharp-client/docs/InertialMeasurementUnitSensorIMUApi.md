# IO.Swagger.Api.InertialMeasurementUnitSensorIMUApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IMUSensorsGetAccelerometerGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetaccelerometerget) | **GET** /IMU_sensors/get_accelerometer | Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 
[**IMUSensorsGetAccelerometerRawGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetaccelerometerrawget) | **GET** /IMU_sensors/get_accelerometer_raw | Gets the raw x, y and z axis accelerometer data. 
[**IMUSensorsGetCompassGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetcompassget) | **GET** /IMU_sensors/get_compass | Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 
[**IMUSensorsGetCompassRawGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetcompassrawget) | **GET** /IMU_sensors/get_compass_raw | Gets the raw x, y and z axis magnetometer data. 
[**IMUSensorsGetGyroscopeGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetgyroscopeget) | **GET** /IMU_sensors/get_gyroscope | Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 
[**IMUSensorsGetGyroscopeRawGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetgyroscoperawget) | **GET** /IMU_sensors/get_gyroscope_raw | Gets the raw x, y and z axis gyroscope data. 
[**IMUSensorsGetOrientationDegreesGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetorientationdegreesget) | **GET** /IMU_sensors/get_orientation_degrees | Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 
[**IMUSensorsGetOrientationGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetorientationget) | **GET** /IMU_sensors/get_orientation | Calls get_orientation_degrees above. 
[**IMUSensorsGetOrientationRadiansGet**](InertialMeasurementUnitSensorIMUApi.md#imusensorsgetorientationradiansget) | **GET** /IMU_sensors/get_orientation_radians | Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 
[**IMUSensorsSetImuConfigPut**](InertialMeasurementUnitSensorIMUApi.md#imusensorssetimuconfigput) | **PUT** /IMU_sensors/set_imu_config | Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 


<a name="imusensorsgetaccelerometerget"></a>
# **IMUSensorsGetAccelerometerGet**
> Orientation IMUSensorsGetAccelerometerGet ()

Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetAccelerometerGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Calls set_imu_config to disable the magnetometer and gyroscope then gets the current orientation from the accelerometer only. 
                Orientation result = apiInstance.IMUSensorsGetAccelerometerGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetAccelerometerGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetaccelerometerrawget"></a>
# **IMUSensorsGetAccelerometerRawGet**
> Vertice IMUSensorsGetAccelerometerRawGet ()

Gets the raw x, y and z axis accelerometer data. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetAccelerometerRawGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Gets the raw x, y and z axis accelerometer data. 
                Vertice result = apiInstance.IMUSensorsGetAccelerometerRawGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetAccelerometerRawGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetcompassget"></a>
# **IMUSensorsGetCompassGet**
> decimal? IMUSensorsGetCompassGet ()

Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetCompassGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Calls set_imu_config to disable the gyroscope and accelerometer then gets the direction of North from the magnetometer in degrees. 
                decimal? result = apiInstance.IMUSensorsGetCompassGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetCompassGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**decimal?**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetcompassrawget"></a>
# **IMUSensorsGetCompassRawGet**
> Vertice IMUSensorsGetCompassRawGet ()

Gets the raw x, y and z axis magnetometer data. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetCompassRawGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Gets the raw x, y and z axis magnetometer data. 
                Vertice result = apiInstance.IMUSensorsGetCompassRawGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetCompassRawGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetgyroscopeget"></a>
# **IMUSensorsGetGyroscopeGet**
> Orientation IMUSensorsGetGyroscopeGet ()

Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetGyroscopeGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Calls set_imu_config to disable the magnetometer and accelerometer then gets the current orientation from the gyroscope only. 
                Orientation result = apiInstance.IMUSensorsGetGyroscopeGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetGyroscopeGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetgyroscoperawget"></a>
# **IMUSensorsGetGyroscopeRawGet**
> Vertice IMUSensorsGetGyroscopeRawGet ()

Gets the raw x, y and z axis gyroscope data. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetGyroscopeRawGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Gets the raw x, y and z axis gyroscope data. 
                Vertice result = apiInstance.IMUSensorsGetGyroscopeRawGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetGyroscopeRawGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetorientationdegreesget"></a>
# **IMUSensorsGetOrientationDegreesGet**
> Orientation IMUSensorsGetOrientationDegreesGet ()

Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetOrientationDegreesGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw. 
                Orientation result = apiInstance.IMUSensorsGetOrientationDegreesGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetOrientationDegreesGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetorientationget"></a>
# **IMUSensorsGetOrientationGet**
> Orientation IMUSensorsGetOrientationGet ()

Calls get_orientation_degrees above. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetOrientationGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Calls get_orientation_degrees above. 
                Orientation result = apiInstance.IMUSensorsGetOrientationGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetOrientationGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorsgetorientationradiansget"></a>
# **IMUSensorsGetOrientationRadiansGet**
> Orientation IMUSensorsGetOrientationRadiansGet ()

Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsGetOrientationRadiansGetExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();

            try
            {
                // Gets the current orientation in radians using the aircraft principal axes of pitch, roll and yaw. 
                Orientation result = apiInstance.IMUSensorsGetOrientationRadiansGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsGetOrientationRadiansGet: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="imusensorssetimuconfigput"></a>
# **IMUSensorsSetImuConfigPut**
> decimal? IMUSensorsSetImuConfigPut (bool? compassEnabled, bool? gyroEnabled, bool? accelEnabled)

Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IMUSensorsSetImuConfigPutExample
    {
        public void main()
        {
            
            var apiInstance = new InertialMeasurementUnitSensorIMUApi();
            var compassEnabled = true;  // bool? | Whether or not the compass should be enabled.
            var gyroEnabled = true;  // bool? | Whether or not the gyroscope should be enabled.
            var accelEnabled = true;  // bool? | Whether or not the accelerometer should be enabled.

            try
            {
                // Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get orientation functions below. 
                decimal? result = apiInstance.IMUSensorsSetImuConfigPut(compassEnabled, gyroEnabled, accelEnabled);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling InertialMeasurementUnitSensorIMUApi.IMUSensorsSetImuConfigPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compassEnabled** | **bool?**| Whether or not the compass should be enabled. | 
 **gyroEnabled** | **bool?**| Whether or not the gyroscope should be enabled. | 
 **accelEnabled** | **bool?**| Whether or not the accelerometer should be enabled. | 

### Return type

**decimal?**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

