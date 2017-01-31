# SenseHatApi.LEDApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lEDMatrixClearPut**](LEDApi.md#lEDMatrixClearPut) | **PUT** /LED_Matrix/clear | Sets the entire LED matrix to a single colour, defaults to blank / off. 
[**lEDMatrixFlipHPut**](LEDApi.md#lEDMatrixFlipHPut) | **PUT** /LED_Matrix/flip_h | Flips the image on the LED matrix horizontally. 
[**lEDMatrixFlipVPut**](LEDApi.md#lEDMatrixFlipVPut) | **PUT** /LED_Matrix/flip_v | Flips the image on the LED matrix vertically. 
[**lEDMatrixGetPixelGet**](LEDApi.md#lEDMatrixGetPixelGet) | **GET** /LED_Matrix/get_pixel | Gets an individual LED matrix pixel at the specified X-Y coordinate. 
[**lEDMatrixGetPixelsGet**](LEDApi.md#lEDMatrixGetPixelsGet) | **GET** /LED_Matrix/get_pixels | Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they&#39;re passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you&#39;ve called set_pixels. 
[**lEDMatrixLowLightPut**](LEDApi.md#lEDMatrixLowLightPut) | **PUT** /LED_Matrix/low_light | Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 
[**lEDMatrixSetPixelPut**](LEDApi.md#lEDMatrixSetPixelPut) | **PUT** /LED_Matrix/set_pixel | Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 
[**lEDMatrixSetPixelsPut**](LEDApi.md#lEDMatrixSetPixelsPut) | **PUT** /LED_Matrix/set_pixels | Updates the entire LED matrix based on a 64 length list of pixel values. 
[**lEDMatrixSetRotationPut**](LEDApi.md#lEDMatrixSetRotationPut) | **PUT** /LED_Matrix/set_rotation | If you&#39;re using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 
[**lEDMatrixShowLetterPut**](LEDApi.md#lEDMatrixShowLetterPut) | **PUT** /LED_Matrix/show_letter | Displays a single text character on the LED matrix. 
[**lEDMatrixShowMessagePut**](LEDApi.md#lEDMatrixShowMessagePut) | **PUT** /LED_Matrix/show_message | Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 


<a name="lEDMatrixClearPut"></a>
# **lEDMatrixClearPut**
> lEDMatrixClearPut(opts)

Sets the entire LED matrix to a single colour, defaults to blank / off. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var opts = { 
  'colour': new SenseHatApi.Colour() // Colour | An object containing the RGB (red, green, blue) values of the colour. Each element must be an integer between 0 and 255. Defaults to (0, 0, 0).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixClearPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **colour** | [**Colour**](Colour.md)| An object containing the RGB (red, green, blue) values of the colour. Each element must be an integer between 0 and 255. Defaults to (0, 0, 0). | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixFlipHPut"></a>
# **lEDMatrixFlipHPut**
> [Colour] lEDMatrixFlipHPut(opts)

Flips the image on the LED matrix horizontally. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var opts = { 
  'redraw': true // Boolean | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lEDMatrixFlipHPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redraw** | **Boolean**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

[**[Colour]**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixFlipVPut"></a>
# **lEDMatrixFlipVPut**
> [Colour] lEDMatrixFlipVPut(opts)

Flips the image on the LED matrix vertically. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var opts = { 
  'redraw': true // Boolean | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lEDMatrixFlipVPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redraw** | **Boolean**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

[**[Colour]**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixGetPixelGet"></a>
# **lEDMatrixGetPixelGet**
> Colour lEDMatrixGetPixelGet(x, y)

Gets an individual LED matrix pixel at the specified X-Y coordinate. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var x = 56; // Number | 0 is on the left, 7 on the right.

var y = 56; // Number | 0 is at the top, 7 at the bottom.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lEDMatrixGetPixelGet(x, y, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x** | **Number**| 0 is on the left, 7 on the right. | 
 **y** | **Number**| 0 is at the top, 7 at the bottom. | 

### Return type

[**Colour**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixGetPixelsGet"></a>
# **lEDMatrixGetPixelsGet**
> [Colour] lEDMatrixGetPixelsGet()

Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they&#39;re passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you&#39;ve called set_pixels. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lEDMatrixGetPixelsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Colour]**](Colour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixLowLightPut"></a>
# **lEDMatrixLowLightPut**
> lEDMatrixLowLightPut(value)

Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var value = true; // Boolean | Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixLowLightPut(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **Boolean**| Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixSetPixelPut"></a>
# **lEDMatrixSetPixelPut**
> lEDMatrixSetPixelPut(pixel)

Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var pixel = new SenseHatApi.Pixel(); // Pixel | A pixel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixSetPixelPut(pixel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pixel** | [**Pixel**](Pixel.md)| A pixel. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixSetPixelsPut"></a>
# **lEDMatrixSetPixelsPut**
> [Pixel] lEDMatrixSetPixelsPut(pixelList)

Updates the entire LED matrix based on a 64 length list of pixel values. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var pixelList = [new SenseHatApi.Pixel()]; // [Pixel] | A list containing 64 pixels. Each R-G-B element must be an integer between 0 and 255.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lEDMatrixSetPixelsPut(pixelList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pixelList** | [**[Pixel]**](Pixel.md)| A list containing 64 pixels. Each R-G-B element must be an integer between 0 and 255. | 

### Return type

[**[Pixel]**](Pixel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixSetRotationPut"></a>
# **lEDMatrixSetRotationPut**
> lEDMatrixSetRotationPut(r, opts)

If you&#39;re using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var r = 90; // Number | The angle to rotate the LED matrix though. 0 is with the Raspberry Pi HDMI port facing downwards.

var opts = { 
  'redraw': true // Boolean | Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixSetRotationPut(r, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **r** | **Number**| The angle to rotate the LED matrix though. 0 is with the Raspberry Pi HDMI port facing downwards. | [default to 90]
 **redraw** | **Boolean**| Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixShowLetterPut"></a>
# **lEDMatrixShowLetterPut**
> lEDMatrixShowLetterPut(s, opts)

Displays a single text character on the LED matrix. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var s = "s_example"; // String | The letter to show.

var opts = { 
  'colours': [new SenseHatApi.Colour()] // [Colour] | An array of 2 colours (text colour and background colour).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixShowLetterPut(s, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **s** | **String**| The letter to show. | 
 **colours** | [**[Colour]**](Colour.md)| An array of 2 colours (text colour and background colour). | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lEDMatrixShowMessagePut"></a>
# **lEDMatrixShowMessagePut**
> lEDMatrixShowMessagePut(textString, opts)

Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 

### Example
```javascript
var SenseHatApi = require('sense_hat_api');

var apiInstance = new SenseHatApi.LEDApi();

var textString = "textString_example"; // String | The message to scroll.

var opts = { 
  'scrollSpeed': 0.1, // Number | The speed at which the text should scroll. This value represents the time paused for between shifting the text to the left by one column of pixels. Defaults to 0.1
  'colours': [new SenseHatApi.Colour()] // [Colour] | An array of 2 colours (text colour and background colour).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lEDMatrixShowMessagePut(textString, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textString** | **String**| The message to scroll. | 
 **scrollSpeed** | **Number**| The speed at which the text should scroll. This value represents the time paused for between shifting the text to the left by one column of pixels. Defaults to 0.1 | [optional] [default to 0.1]
 **colours** | [**[Colour]**](Colour.md)| An array of 2 colours (text colour and background colour). | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

