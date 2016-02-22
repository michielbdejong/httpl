cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-sslcertificatechecker/www/SSLCertificateChecker.js",
        "id": "cordova-plugin-sslcertificatechecker.SSLCertificateChecker",
        "clobbers": [
            "window.plugins.sslCertificateChecker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-certificates/www/certificate.js",
        "id": "cordova-plugin-certificates.Certificates",
        "clobbers": [
            "cordova.plugins.certificates"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});