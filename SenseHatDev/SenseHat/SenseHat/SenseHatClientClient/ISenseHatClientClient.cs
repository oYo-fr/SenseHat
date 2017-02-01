﻿// Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace SenseHatClient
{
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    using Microsoft.Rest;

    /// <summary>
    /// Set sense hat API from swagger Rest Service.
    /// </summary>
    public partial interface ISenseHatClientClient : IDisposable
    {
        /// <summary>
        /// The base URI of the service.
        /// </summary>
        Uri BaseUri { get; set; }

        /// <summary>
        /// Gets or sets json serialization settings.
        /// </summary>
        JsonSerializerSettings SerializationSettings { get; }

        /// <summary>
        /// Gets or sets json deserialization settings.
        /// </summary>
        JsonSerializerSettings DeserializationSettings { get; }

        /// <summary>
        /// Subscription credentials which uniquely identify client
        /// subscription.
        /// </summary>
        ServiceClientCredentials Credentials { get; }


            /// <summary>
        /// Defines a message to display.
        /// </summary>
        /// Sets a message to display
        /// <param name='text'>
        /// The text to display.
        /// </param>
        /// <param name='scrollSpeed'>
        /// The text to display.
        /// </param>
        /// <param name='textColourR'>
        /// The text color (red).
        /// </param>
        /// <param name='textColourG'>
        /// The text color (green).
        /// </param>
        /// <param name='textColourB'>
        /// The text color (blue).
        /// </param>
        /// <param name='backColourR'>
        /// The text color (red).
        /// </param>
        /// <param name='backColourG'>
        /// The text color (green).
        /// </param>
        /// <param name='backColourB'>
        /// The text color (blue).
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> LedPOSTWithHttpMessagesAsync(string text, double scrollSpeed, double textColourR, double textColourG, double textColourB, double backColourR, double backColourG, double backColourB, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Defines one led pixel color
        /// </summary>
        /// Sets one led color
        /// <param name='x'>
        /// x position for the led.
        /// </param>
        /// <param name='y'>
        /// y position for the led.
        /// </param>
        /// <param name='r'>
        /// Red value for the led.
        /// </param>
        /// <param name='g'>
        /// Green value for the led.
        /// </param>
        /// <param name='b'>
        /// Blue value for the led.
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> LedPUTWithHttpMessagesAsync(int x, int y, int r, int g, int b, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

    }
}
