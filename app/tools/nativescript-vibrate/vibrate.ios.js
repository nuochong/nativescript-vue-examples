"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vibrate_common_1 = require("./vibrate.common");
var Vibrate = (function (_super) {
    __extends(Vibrate, _super);
    function Vibrate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibrate.prototype.hasVibrator = function () {
        return true;
    };
    Vibrate.prototype.vibrate = function (time, repeat) {
        AudioServicesPlaySystemSoundWithCompletion(1352, null);
    };
    Vibrate.prototype.cancel = function () {
        return;
    };
    return Vibrate;
}(vibrate_common_1.Common));
exports.Vibrate = Vibrate;
//# sourceMappingURL=vibrate.ios.js.map