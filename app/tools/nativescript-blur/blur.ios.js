"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blur = (function () {
    function Blur() {
        this.effectViewMap = {};
    }
    Blur.prototype.on = function (nsView, viewName, radius, theme, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var iosView = nsView.ios;
            if (iosView && iosView.addSubview) {
                if (!theme || theme == "dark") {
                    theme = 2;
                }
                else if (theme == "extraDark") {
                    theme = 3;
                }
                else if (theme == "light") {
                    theme = 1;
                }
                else if (theme == "extraLight") {
                    theme = 0;
                }
                else if (theme == "regular") {
                    theme = 4;
                }
                else if (theme == "prominent") {
                    theme = 5;
                }
                else {
                    theme = 2;
                }
                if (!duration)
                    duration = 0.3;
                if (!_this.effectViewMap[viewName]) {
                    var iosView_1 = nsView.ios;
                    var effectView_1 = UIVisualEffectView.alloc().init();
                    effectView_1.frame = CGRectMake(0, 0, iosView_1.bounds.size.width, iosView_1.bounds.size.height);
                    effectView_1.autoresizingMask =
                        2 |
                            16;
                    _this.effectViewMap[viewName] = effectView_1;
                    iosView_1.addSubview(effectView_1);
                    iosView_1.bringSubviewToFront(effectView_1);
                    UIView.animateWithDurationAnimationsCompletion(duration, function () {
                        effectView_1.effect = UIBlurEffect.effectWithStyle(theme);
                    }, function () {
                        resolve();
                    });
                }
            }
            else {
                reject("Sorry, this view cannot be made blurry.");
            }
        });
    };
    Blur.prototype.off = function (viewName, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!duration)
                duration = 0.3;
            if (_this.effectViewMap[viewName]) {
                var effectView_2 = _this.effectViewMap[viewName];
                delete _this.effectViewMap[viewName];
                UIView.animateWithDurationAnimationsCompletion(duration, function () {
                    effectView_2.effect = null;
                }, function () {
                    effectView_2.removeFromSuperview();
                    resolve();
                });
            }
            else {
                reject("It's not blurry!");
            }
        });
    };
    return Blur;
}());
exports.Blur = Blur;
//# sourceMappingURL=blur.ios.js.map