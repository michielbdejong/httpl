/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        runCode(function(result) {
          console.log('result', result);
          document.getElementById("1").innerHTML = result;
        });
        console.log('Received Event: ' + id);
    }
};

app.initialize();

var fingerprint = "17 C0 B5 AB C3 27 B4 86 94 06 E8 76 88 46 AC 77 8A C4 12 47";

function checkFingerprint(callback) {
  var server = "https://build.phonegap.com";
  window.plugins.sslCertificateChecker.check(
      successCallback,
      errorCallback,
      server,
      fingerprint);

  function successCallback(message) {
    callback('success ' + message);
    // Message is always: CONNECTION_SECURE.
    // Now do something with the trusted server.
  }

  function errorCallback(message) {
    console.log("updating fingerprint", fingerprint, message);
    fingerprint = message;
    checkFingerprint(callback);
  }
}
function runCode(callback) {
  document.getElementById("1").innerHTML = 'enabling unsecure certs';
  //cordova.plugins.certificates.trustUnsecureCerts(true);
  document.getElementById("1").innerHTML = 'enabled unsecure certs';

  checkFingerprint(callback);

  //
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', server);
  // xhr.onload = function() {
  //   document.getElementById("1").innerHTML = 'xhr onload';
  //   document.getElementById("1").innerHTML = xhr.status;
  //   console.log(xhr);
  // }
  // xhr.send();
  // document.getElementById("1").innerHTML = 'xhr sent';

}
