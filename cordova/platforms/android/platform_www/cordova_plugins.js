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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});