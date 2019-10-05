"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var imageSource = require("tns-core-modules/image-source");
var utils_1 = require("tns-core-modules/utils/utils");
var Blur = (function () {
    function Blur() {
        this.nsViewMap = {};
        // com.wonderkiln.blurkit.BlurKit.init(app.android.context);
        com.wonderkiln.blurkit.BlurKit.init(utils_1.ad.getApplicationContext());
    }
    Blur.prototype.on = function (nsView, viewName, radius, theme, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (radius < 1 || radius > 25) {
                reject("Radius should be between 1 - 25 (inclusive)");
            }
            else {
                if (!_this.nsViewMap[viewName]) {
                    _this.nsViewMap[viewName] = nsView.src;
                    console.log(_this.nsViewMap[viewName]);
                    resolve(imageSource.fromNativeSource(com.wonderkiln.blurkit.BlurKit
                        .getInstance()
                        .blur(nsView.android, radius)));
                }
                else {
                    reject("This view is already blurred");
                }
            }
        });
    };
    Blur.prototype.off = function (viewName, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.nsViewMap[viewName]) {
                console.log(_this.nsViewMap[viewName]);
                resolve(_this.nsViewMap[viewName]);
                delete _this.nsViewMap[viewName];
            }
            else {
                reject("View not found");
            }
        });
    };
    return Blur;
}());
exports.Blur = Blur;
//# sourceMappingURL=blur.android.js.map