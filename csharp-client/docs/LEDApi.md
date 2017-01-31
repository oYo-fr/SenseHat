# IO.Swagger.Api.LEDApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**LEDMatrixClearPut**](LEDApi.md#ledmatrixclearput) | **PUT** /LED_Matrix/clear | Sets the entire LED matrix to a single colour, defaults to blank / off. 
[**LEDMatrixFlipHPut**](LEDApi.md#ledmatrixfliphput) | **PUT** /LED_Matrix/flip_h | Flips the image on the LED matrix horizontally. 
[**LEDMatrixFlipVPut**](LEDApi.md#ledmatrixflipvput) | **PUT** /LED_Matrix/flip_v | Flips the image on the LED matrix vertically. 
[**LEDMatrixGetPixelGet**](LEDApi.md#ledmatrixgetpixelget) | **GET** /LED_Matrix/get_pixel | Gets an individual LED matrix pixel at the specified X-Y coordinate. 
[**LEDMatrixGetPixelsGet**](LEDApi.md#ledmatrixgetpixelsget) | **GET** /LED_Matrix/get_pixels | Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they&#39;re passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you&#39;ve called set_pixels. 
[**LEDMatrixLowLightPut**](LEDApi.md#ledmatrixlowlightput) | **PUT** /LED_Matrix/low_light | Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 
[**LEDMatrixSetPixelPut**](LEDApi.md#ledmatrixsetpixelput) | **PUT** /LED_Matrix/set_pixel | Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 
[**LEDMatrixSetPixelsPut**](LEDApi.md#ledmatrixsetpixelsput) | **PUT** /LED_Matrix/set_pixels | Updates the entire LED matrix based on a 64 length list of pixel values. 
[**LEDMatrixSetRotationPut**](LEDApi.md#ledmatrixsetrotationput) | **PUT** /LED_Matrix/set_rotation | If you&#39;re using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 
[**LEDMatrixShowLetterPut**](LEDApi.md#ledmatrixshowletterput) | **PUT** /LED_Matrix/show_letter | Displays a single text character on the LED matrix. 
[**LEDMatrixShowMessagePut**](LEDApi.md#ledmatrixshowmessageput) | **PUT** /LED_Matrix/show_message | Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 


<a name="ledmatrixclearput"></a>
# **LEDMatrixClearPut**
> void LEDMatrixClearPut (Colour colour = null)

Sets the entire LED matrix to a single colour, defaults to blank / off. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixClearPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var colour = new Colour(); // Colour | An object containing the RGB (red, green, blue) values of the colour. Each element must be an integer between 0 and 255. Defaults to (0, 0, 0). (optional) 

            try
            {
                // Sets the entire LED matrix to a single colour, defaults to blank / off. 
                apiInstance.LEDMatrixClearPut(colour);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixClearPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **colour** | [**Colour**](Colour.md)| An object containing the RGB (red, green, blue) values of the colour. Each element must be an integer between 0 and 255. Defaults to (0, 0, 0). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixfliphput"></a>
# **LEDMatrixFlipHPut**
> List<Colour> LEDMatrixFlipHPut (bool? redraw = null)

Flips the image on the LED matrix horizontally. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixFlipHPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var redraw = true;  // bool? | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)  (default to true)

            try
            {
                // Flips the image on the LED matrix horizontally. 
                List&lt;Colour&gt; result = apiInstance.LEDMatrixFlipHPut(redraw);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixFlipHPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redraw** | **bool?**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

[**List<Colour>**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixflipvput"></a>
# **LEDMatrixFlipVPut**
> List<Colour> LEDMatrixFlipVPut (bool? redraw = null)

Flips the image on the LED matrix vertically. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixFlipVPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var redraw = true;  // bool? | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)  (default to true)

            try
            {
                // Flips the image on the LED matrix vertically. 
                List&lt;Colour&gt; result = apiInstance.LEDMatrixFlipVPut(redraw);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixFlipVPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redraw** | **bool?**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

[**List<Colour>**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixgetpixelget"></a>
# **LEDMatrixGetPixelGet**
> Colour LEDMatrixGetPixelGet (int? x, int? y)

Gets an individual LED matrix pixel at the specified X-Y coordinate. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixGetPixelGetExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var x = 56;  // int? | 0 is on the left, 7 on the right.
            var y = 56;  // int? | 0 is at the top, 7 at the bottom.

            try
            {
                // Gets an individual LED matrix pixel at the specified X-Y coordinate. 
                Colour result = apiInstance.LEDMatrixGetPixelGet(x, y);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixGetPixelGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x** | **int?**| 0 is on the left, 7 on the right. | 
 **y** | **int?**| 0 is at the top, 7 at the bottom. | 

### Return type

[**Colour**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixgetpixelsget"></a>
# **LEDMatrixGetPixelsGet**
> List<Colour> LEDMatrixGetPixelsGet ()

Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they're passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you've called set_pixels. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixGetPixelsGetExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();

            try
            {
                // Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they're passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you've called set_pixels. 
                List&lt;Colour&gt; result = apiInstance.LEDMatrixGetPixelsGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixGetPixelsGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Colour>**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixlowlightput"></a>
# **LEDMatrixLowLightPut**
> void LEDMatrixLowLightPut (bool? value)

Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixLowLightPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var value = true;  // bool? | Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment.

            try
            {
                // Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 
                apiInstance.LEDMatrixLowLightPut(value);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixLowLightPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **bool?**| Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixsetpixelput"></a>
# **LEDMatrixSetPixelPut**
> void LEDMatrixSetPixelPut (Pixel pixel)

Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixSetPixelPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var pixel = new Pixel(); // Pixel | A pixel.

            try
            {
                // Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 
                apiInstance.LEDMatrixSetPixelPut(pixel);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixSetPixelPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pixel** | [**Pixel**](Pixel.md)| A pixel. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixsetpixelsput"></a>
# **LEDMatrixSetPixelsPut**
> List<Pixel> LEDMatrixSetPixelsPut (List<Pixel> pixelList)

Updates the entire LED matrix based on a 64 length list of pixel values. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixSetPixelsPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var pixelList = new List<Pixel>(); // List<Pixel> | A list containing 64 pixels. Each R-G-B element must be an integer between 0 and 255.

            try
            {
                // Updates the entire LED matrix based on a 64 length list of pixel values. 
                List&lt;Pixel&gt; result = apiInstance.LEDMatrixSetPixelsPut(pixelList);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixSetPixelsPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pixelList** | [**List&lt;Pixel&gt;**](Pixel.md)| A list containing 64 pixels. Each R-G-B element must be an integer between 0 and 255. | 

### Return type

[**List<Pixel>**](Pixel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixsetrotationput"></a>
# **LEDMatrixSetRotationPut**
> void LEDMatrixSetRotationPut (decimal? r, bool? redraw = null)

If you're using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixSetRotationPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var r = 3.4;  // decimal? | The angle to rotate the LED matrix though. 0 is with the Raspberry Pi HDMI port facing downwards. (default to 90)
            var redraw = true;  // bool? | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)  (default to true)

            try
            {
                // If you're using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 
                apiInstance.LEDMatrixSetRotationPut(r, redraw);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixSetRotationPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **r** | **decimal?**| The angle to rotate the LED matrix though. 0 is with the Raspberry Pi HDMI port facing downwards. | [default to 90]
 **redraw** | **bool?**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixshowletterput"></a>
# **LEDMatrixShowLetterPut**
> void LEDMatrixShowLetterPut (string s, List<Colour> colours = null)

Displays a single text character on the LED matrix. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixShowLetterPutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var s = s_example;  // string | The letter to show.
            var colours = new List<Colour>(); // List<Colour> | An array of 2 colours (text colour and background colour). (optional) 

            try
            {
                // Displays a single text character on the LED matrix. 
                apiInstance.LEDMatrixShowLetterPut(s, colours);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixShowLetterPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **s** | **string**| The letter to show. | 
 **colours** | [**List&lt;Colour&gt;**](Colour.md)| An array of 2 colours (text colour and background colour). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ledmatrixshowmessageput"></a>
# **LEDMatrixShowMessagePut**
> void LEDMatrixShowMessagePut (string textString, float? scrollSpeed = null, List<Colour> colours = null)

Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LEDMatrixShowMessagePutExample
    {
        public void main()
        {
            
            var apiInstance = new LEDApi();
            var textString = textString_example;  // string | The message to scroll.
            var scrollSpeed = 3.4;  // float? | The speed at which the text should scroll. This value represents the time paused for between shifting the text to the left by one column of pixels. Defaults to 0.1 (optional)  (default to 0.1)
            var colours = new List<Colour>(); // List<Colour> | An array of 2 colours (text colour and background colour). (optional) 

            try
            {
                // Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 
                apiInstance.LEDMatrixShowMessagePut(textString, scrollSpeed, colours);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LEDApi.LEDMatrixShowMessagePut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textString** | **string**| The message to scroll. | 
 **scrollSpeed** | **float?**| The speed at which the text should scroll. This value represents the time paused for between shifting the text to the left by one column of pixels. Defaults to 0.1 | [optional] [default to 0.1]
 **colours** | [**List&lt;Colour&gt;**](Colour.md)| An array of 2 colours (text colour and background colour). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

