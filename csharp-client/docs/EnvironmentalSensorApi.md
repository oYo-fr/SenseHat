# IO.Swagger.Api.EnvironmentalSensorApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EnvironmentalSensorsGetHumidityGet**](EnvironmentalSensorApi.md#environmentalsensorsgethumidityget) | **GET** /Environmental_sensors/get_humidity | Gets the percentage of relative humidity from the humidity sensor. 
[**EnvironmentalSensorsGetPressureGet**](EnvironmentalSensorApi.md#environmentalsensorsgetpressureget) | **GET** /Environmental_sensors/get_pressure | Gets the current pressure in Millibars from the pressure sensor. 
[**EnvironmentalSensorsGetTemperatureFromHumidityGet**](EnvironmentalSensorApi.md#environmentalsensorsgettemperaturefromhumidityget) | **GET** /Environmental_sensors/get_temperature_from_humidity | Gets the current temperature in degrees Celsius from the humidity sensor. 
[**EnvironmentalSensorsGetTemperatureFromPressureGet**](EnvironmentalSensorApi.md#environmentalsensorsgettemperaturefrompressureget) | **GET** /Environmental_sensors/get_temperature_from_pressure | Gets the current temperature in degrees Celsius from the pressure sensor. 
[**EnvironmentalSensorsGetTemperatureGet**](EnvironmentalSensorApi.md#environmentalsensorsgettemperatureget) | **GET** /Environmental_sensors/get_temperature | Calls get_temperature_from_humidity below. 


<a name="environmentalsensorsgethumidityget"></a>
# **EnvironmentalSensorsGetHumidityGet**
> decimal? EnvironmentalSensorsGetHumidityGet ()

Gets the percentage of relative humidity from the humidity sensor. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnvironmentalSensorsGetHumidityGetExample
    {
        public void main()
        {
            
            var apiInstance = new EnvironmentalSensorApi();

            try
            {
                // Gets the percentage of relative humidity from the humidity sensor. 
                decimal? result = apiInstance.EnvironmentalSensorsGetHumidityGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EnvironmentalSensorApi.EnvironmentalSensorsGetHumidityGet: " + e.Message );
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

<a name="environmentalsensorsgetpressureget"></a>
# **EnvironmentalSensorsGetPressureGet**
> decimal? EnvironmentalSensorsGetPressureGet ()

Gets the current pressure in Millibars from the pressure sensor. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnvironmentalSensorsGetPressureGetExample
    {
        public void main()
        {
            
            var apiInstance = new EnvironmentalSensorApi();

            try
            {
                // Gets the current pressure in Millibars from the pressure sensor. 
                decimal? result = apiInstance.EnvironmentalSensorsGetPressureGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EnvironmentalSensorApi.EnvironmentalSensorsGetPressureGet: " + e.Message );
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

<a name="environmentalsensorsgettemperaturefromhumidityget"></a>
# **EnvironmentalSensorsGetTemperatureFromHumidityGet**
> decimal? EnvironmentalSensorsGetTemperatureFromHumidityGet ()

Gets the current temperature in degrees Celsius from the humidity sensor. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnvironmentalSensorsGetTemperatureFromHumidityGetExample
    {
        public void main()
        {
            
            var apiInstance = new EnvironmentalSensorApi();

            try
            {
                // Gets the current temperature in degrees Celsius from the humidity sensor. 
                decimal? result = apiInstance.EnvironmentalSensorsGetTemperatureFromHumidityGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EnvironmentalSensorApi.EnvironmentalSensorsGetTemperatureFromHumidityGet: " + e.Message );
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

<a name="environmentalsensorsgettemperaturefrompressureget"></a>
# **EnvironmentalSensorsGetTemperatureFromPressureGet**
> decimal? EnvironmentalSensorsGetTemperatureFromPressureGet ()

Gets the current temperature in degrees Celsius from the pressure sensor. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnvironmentalSensorsGetTemperatureFromPressureGetExample
    {
        public void main()
        {
            
            var apiInstance = new EnvironmentalSensorApi();

            try
            {
                // Gets the current temperature in degrees Celsius from the pressure sensor. 
                decimal? result = apiInstance.EnvironmentalSensorsGetTemperatureFromPressureGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EnvironmentalSensorApi.EnvironmentalSensorsGetTemperatureFromPressureGet: " + e.Message );
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

<a name="environmentalsensorsgettemperatureget"></a>
# **EnvironmentalSensorsGetTemperatureGet**
> decimal? EnvironmentalSensorsGetTemperatureGet ()

Calls get_temperature_from_humidity below. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnvironmentalSensorsGetTemperatureGetExample
    {
        public void main()
        {
            
            var apiInstance = new EnvironmentalSensorApi();

            try
            {
                // Calls get_temperature_from_humidity below. 
                decimal? result = apiInstance.EnvironmentalSensorsGetTemperatureGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EnvironmentalSensorApi.EnvironmentalSensorsGetTemperatureGet: " + e.Message );
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

