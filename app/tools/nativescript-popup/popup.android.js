"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder = require("tns-core-modules/ui/builder");
var fs = require("tns-core-modules/file-system");
var utils = require("tns-core-modules/utils/utils");
var frame = require("tns-core-modules/ui/frame");
var popup_common_1 = require("./popup.common");
var view_1 = require("tns-core-modules/ui/core/view");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var color_1 = require("tns-core-modules/color");
var platform_1 = require("tns-core-modules/platform");
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup(options) {
        var _this = _super.call(this) || this;
        _this._options = new popup_common_1.PopupOptions();
        _this._popup = new android.widget.PopupWindow(utils.ad.getApplicationContext());
        _this._popup.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({
            onDismiss: function () {
                if (_this.resolve) {
                    _this.resolve(_this.resolveData);
                }
                _this.resolve = null;
                _this.reject = null;
                if (_this._view) {
                    frame.topmost()._removeView(_this._view);
                }
            }
        }));
        if (options) {
            Object.keys(options).forEach(function (key) {
                _this._options[key] = options[key];
            });
        }
        return _this;
    }
    Popup.prototype.showPopup = function (source, view) {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _this._popup.setOutsideTouchable(true);
            _this.reject = reject;
            _this.resolve = resolve;
            // console.log('kkkkk',source)
            // console.log('kkkkk',view)
            if (view instanceof android.view.View) {
              console.log('1111111')
                _this._popup.setContentView(view);
                
            }
            else if (view instanceof view_1.View) {
              console.log('22222')
                frame.topmost()._addView(view);
                _this._stylePopup();
                _this._view = view;
                _this._popup.setContentView(view.android);
                
            }
            else if (typeof view === 'string' || view instanceof String) {
              console.log('33333')
                _this._stylePopup();
                var stack = new stack_layout_1.StackLayout();
                frame.topmost()._addView(stack);
                stack.removeChildren();
                var path = void 0;
                var component = void 0;
                
                if (view.startsWith('~')) {
                  console.log('44444')
                    view = view.replace('~', '');
                    path = fs.knownFolders.currentApp().path;
                    console.log(fs.path.join(path, view));
                    component = builder.load(fs.path.join(path, view));
                    console.log(component);
                   
                }
                else {
                    component = builder.load(view);
                    console.log('55555')
                }
                stack.addChild(component);
                _this._view = stack;
                _this._popup.setContentView(stack.android);
            }
            if (source instanceof android.view.View) {
              console.log('66666')
                _this._popup.showAsDropDown(source);
                
            }
            else if (source instanceof view_1.View) {
              console.log('77777')
                // _this._popup.showAsDropDown(source.android);
                _this._popup.showAtLocation(source.android);
                
            }
        });
    };
    Popup.prototype.hidePopup = function (data) {
        this.resolveData = data;
        this._popup.dismiss();
    };
    Popup.prototype._stylePopup = function () {
        var height;
        var width;
        switch (this._options.unit) {
            case 'px':
                if (this._options.height && !this._options.width) {
                    height = this._options.height;
                    width =
                        this._options.height *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                }
                else if (this._options.width && !this._options.height) {
                    height =
                        this._options.width *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                    width = this._options.width;
                }
                else {
                    width = this._options.width;
                    height = this._options.height;
                }
                break;
            case '%':
                if (this._options.height && !this._options.width) {
                    height = platform_1.screen.mainScreen.heightDIPs * (this._options.height / 100);
                    width =
                        height *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                }
                else if (this._options.width && !this._options.height) {
                    width = platform_1.screen.mainScreen.widthDIPs * (this._options.width / 100);
                    height =
                        width *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                }
                else {
                    width = platform_1.screen.mainScreen.widthDIPs * (this._options.width / 100);
                    height = platform_1.screen.mainScreen.heightDIPs * (this._options.height / 100);
                }
                break;
            default:
                if (this._options.height && !this._options.width) {
                    height = this._options.height;
                    width =
                        this._options.height *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                }
                else if (this._options.width && !this._options.height) {
                    height =
                        this._options.width *
                            (platform_1.screen.mainScreen.widthPixels / platform_1.screen.mainScreen.heightPixels);
                    width = this._options.width;
                }
                else {
                    width = this._options.width ? this._options.width : 400;
                    height = this._options.height ? this._options.height : 320;
                }
                break;
        }
        var shape = new android.graphics.drawable.GradientDrawable();
        shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
        if (this._options && this._options.borderRadius) {
            shape.setCornerRadius(this._options.borderRadius);
        }
        if (this._options && this._options.backgroundColor) {
            shape.setColor(new color_1.Color(this._options.backgroundColor).android);
        }
        this._popup.setBackgroundDrawable(shape);
        if (parseInt(platform_1.device.sdkVersion, 10) >= 21) {
            if (this._options.elevation) {
                this._popup.setElevation(this._options.elevation);
            }
        }
        this._popup.setWidth(utils.layout.toDevicePixels(width));
        this._popup.setHeight(utils.layout.toDevicePixels(height));
    };
    return Popup;
}(popup_common_1.Common));
exports.Popup = Popup;
//# sourceMappingURL=popup.android.js.map