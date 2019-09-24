"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super.call(this) || this;
    }
    Common.prototype.vibrate = function (time, repeat) { };
    Common.prototype.cancel = function () { };
    Common.prototype.hasVibrator = function () {
        return true;
    };
    return Common;
}(observable_1.Observable));
exports.Common = Common;
//# sourceMappingURL=vibrate.common.js.map