var exec = require('cordova/src');
var PLUGIN_NAME = 'CordovaPluginList';

var CordovaPluginList = {
    echo: function(phrase, cb){
        exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
    },
    getDate: function(cb){
        exec(cb, null, PLUGIN_NAME, 'getDate', []);
    }
};

module.exports = CordovaPluginList;
