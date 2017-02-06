'use strict';
const sense = require("sense-hat-led").sync;

exports.lED_MatrixClearPUT = function(args, res, next) {
  /**
   * Sets the entire LED matrix to a single colour, defaults to blank / off. 
   *
   * colour Colour An object containing the RGB (red, green, blue) values of the colour. Each element must be an integer between 0 and 255. Defaults to (0, 0, 0). (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.lED_MatrixFlip_hPUT = function(args, res, next) {
  /**
   * Flips the image on the LED matrix horizontally. 
   *
   * redraw Boolean Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "red" : 123,
  "green" : 123,
  "blue" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.lED_MatrixFlip_vPUT = function(args, res, next) {
  /**
   * Flips the image on the LED matrix vertically. 
   *
   * redraw Boolean Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "red" : 123,
  "green" : 123,
  "blue" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.lED_MatrixGet_pixelGET = function(args, res, next) {
  /**
   * Gets an individual LED matrix pixel at the specified X-Y coordinate. 
   *
   * x Integer 0 is on the left, 7 on the right.
   * y Integer 0 is at the top, 7 at the bottom.
   * returns Colour
   **/
  var examples = {};
  examples['application/json'] = {
  "red" : 123,
  "green" : 123,
  "blue" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.lED_MatrixGet_pixelsGET = function(args, res, next) {
  /**
   * Gets a list containing 64 smaller lists of [R, G, B] pixels (red, green, blue) representing the currently displayed image. Note: You will notice that the pixel values you pass into set_pixels sometimes change when you read them back with  get_pixels. This is because we specify each pixel element as 8 bit numbers (0 to 255) but when they're passed into the Linux frame buffer for the LED matrix the numbers are bit shifted down to fit into RGB 565. 5 bits for red, 6 bits for green and 5 bits for blue. The loss of binary precision when performing this conversion (3 bits lost for red, 2 for green and 3 for blue) accounts for the discrepancies you see. The get_pixels function provides a correct representation of how the pixels end up in frame buffer memory after you've called set_pixels. 
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "red" : 123,
  "green" : 123,
  "blue" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.lED_MatrixLow_lightPUT = function(args, res, next) {
  /**
   * Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment. 
   *
   * value Boolean Toggles the LED matrix low light mode, useful if the Sense HAT is being used in a dark environment.
   * no response value expected for this operation
   **/
  res.end();
}

exports.lED_MatrixSet_pixelPUT = function(args, res, next) {
  /**
   * Sets an individual LED matrix pixel at the specified X-Y coordinate to the specified colour. 
   *
   * pixel Pixel A pixel.
   * no response value expected for this operation
   **/
   sense.setPixel(args.x.value, args.y.value, [args.r.value, args.g.value, args.b.value]);
  res.end();
}

exports.lED_MatrixSet_pixelsPUT = function(args, res, next) {
  /**
   * Updates the entire LED matrix based on a 64 length list of pixel values. 
   *
   * pixel_list List A list containing 64 pixels. Each R-G-B element must be an integer between 0 and 255.
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "colour" : {
    "red" : 123,
    "green" : 123,
    "blue" : 123
  },
  "x" : 123,
  "y" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.lED_MatrixSet_rotationPUT = function(args, res, next) {
  /**
   * If you're using the Pi upside down or sideways you can use this function to correct the orientation of the image being shown. 
   *
   * r BigDecimal The angle to rotate the LED matrix though. 0 is with the Raspberry Pi HDMI port facing downwards.
   * redraw Boolean Whether or not to redraw what is already being displayed on the LED matrix. Defaults to True (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.lED_MatrixShow_letterPUT = function(args, res, next) {
  /**
   * Displays a single text character on the LED matrix. 
   *
   * s String The letter to show.
   * colours List An array of 2 colours (text colour and background colour). (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.lED_MatrixShow_messagePUT = function(args, res, next) {
  /**
   * Scrolls a text message from right to left across the LED matrix and at the specified speed, in the specified colour and background colour. 
   *
   * text_string String The message to scroll.
   * scroll_speed Float The speed at which the text should scroll. This value represents the time paused for between shifting the text to the left by one column of pixels. Defaults to 0.1 (optional)
   * colours List An array of 2 colours (text colour and background colour). (optional)
   * no response value expected for this operation
   **/
  res.end();
}

