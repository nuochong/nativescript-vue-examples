"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_system_1 = require("tns-core-modules/file-system");
var lib = require("./lib");
var TNSFontIcon = (function () {
    function TNSFontIcon() {
    }
    TNSFontIcon.loadCss = function () {
        var cnt = 0;
        var currentName;
        var fontIconCollections = Object.keys(TNSFontIcon.paths);
        if (TNSFontIcon.debug) {
            console.log("Collections to load: " + fontIconCollections);
        }
        var initCollection = function () {
            currentName = fontIconCollections[cnt];
            TNSFontIcon.css[currentName] = {};
        };
        var loadFile = function (path) {
            if (TNSFontIcon.debug) {
                console.log('----------');
                console.log("Loading collection '" + currentName + "' from file: " + path);
            }
            var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
            return new Promise(function (resolve, reject) {
                cssFile.readText().then(function (data) {
                    var map = lib.mapCss(data, TNSFontIcon.debug);
                    TNSFontIcon.css[currentName] = map;
                    resolve();
                }, function (err) {
                    reject(err);
                });
            });
        };
        var loadFiles = function () {
            return new Promise(function (resolve) {
                initCollection();
                if (cnt < fontIconCollections.length) {
                    loadFile(TNSFontIcon.paths[currentName]).then(function () {
                        cnt++;
                        return loadFiles().then(function () {
                            resolve();
                        });
                    });
                }
                else {
                    resolve();
                }
            });
        };
        return loadFiles();
    };
    TNSFontIcon.css = {};
    TNSFontIcon.paths = {};
    TNSFontIcon.debug = false;
    return TNSFontIcon;
}());
exports.TNSFontIcon = TNSFontIcon;
function fonticon(value) {
    if (value) {
        if (value.indexOf('-') > -1) {
            var prefix = value.split('-')[0];
            return TNSFontIcon.css[prefix][value];
        }
        else {
            console.log('Fonticon classname did not contain a prefix. i.e., \'fa-bluetooth\'');
        }
    }
    return value;
}
exports.fonticon = fonticon;
//# sourceMappingURL=nativescript-fonticon.js.map