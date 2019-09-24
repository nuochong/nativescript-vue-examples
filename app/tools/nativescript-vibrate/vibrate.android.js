"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vibrate_common_1 = require("./vibrate.common");
var app = require("tns-core-modules/application");
var utils_1 = require("tns-core-modules/utils/utils");
var Vibrate = (function (_super) {
    __extends(Vibrate, _super);
    function Vibrate() {
        var _this = _super.call(this) || this;
        _this.service = utils_1.ad
        .getApplicationContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);
        return _this;
    }
    Vibrate.prototype.hasVibrator = function () {
        return this.service.hasVibrator();
    };
    Vibrate.prototype.vibrate = function (param, repeat) {
        if (param === void 0) { param = 300; }
        if (repeat === void 0) { repeat = -1; }
        if (this.hasVibrator()) {
            if (typeof param === "number") {
                this.service.vibrate(param);
            }
            else {
                var patternLength = param.length;
                var pattern_1 = Array.create('long', patternLength);
                param.forEach(function (value, index) { pattern_1[index] = value; });
                this.service.vibrate(pattern_1, repeat);
            }
        }
    };
    Vibrate.prototype.cancel = function () {
        this.service.cancel();
    };
    return Vibrate;
}(vibrate_common_1.Common));
exports.Vibrate = Vibrate;
//# sourceMappingURL=vibrate.android.js.map