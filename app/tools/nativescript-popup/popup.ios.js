"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder = require("tns-core-modules/ui/builder");
var fs = require("tns-core-modules/file-system");
var popup_common_1 = require("./popup.common");
var view_1 = require("tns-core-modules/ui/core/view");
var frame_1 = require("tns-core-modules/ui/frame");
var utils_1 = require("tns-core-modules/ui/utils");
var platform_1 = require("tns-core-modules/platform");
var utils_2 = require("tns-core-modules/utils/utils");
var color_1 = require("tns-core-modules/color");
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup(options) {
        var _this = _super.call(this) || this;
        _this.didDismiss = function () {
            if (_this.resolve) {
                _this.resolve(_this.resolveData);
            }
            _this.resolve = null;
            _this.reject = null;
        };
        _this._options = new popup_common_1.PopupOptions();
        if (options) {
            Object.keys(options).forEach(function (key) {
                _this._options[key] = options[key];
            });
        }
        _this._popupController = UIViewController.new();
        _this._popupController.modalPresentationStyle =
            7;
        return _this;
    }
    Popup.prototype.showPopup = function (source, view) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.reject = reject;
            _this.resolve = resolve;
            var isTablet = platform_1.device.deviceType === 'Tablet';
            var nativeView;
            if (!_this._popupController.popoverPresentationController.delegate) {
                _this._popupController.popoverPresentationController.delegate = UIPopoverPresentationControllerDelegateImpl.initWithOwner(new WeakRef(_this));
            }
            if (_this._options.backgroundColor) {
                _this._popupController.view.backgroundColor = new color_1.Color(_this._options.backgroundColor).ios;
            }
            if (_this._options.hideArrow) {
                _this._popupController.popoverPresentationController.permittedArrowDirections = 0;
            }
            if (view instanceof view_1.View) {
                frame_1.topmost()._addView(view);
                _this._stylePopup(view, isTablet);
                _this._popupController.preferredContentSize =
                    view.nativeView.bounds.size;
                nativeView = view.nativeView;
            }
            else if (view instanceof UIView) {
                nativeView = view;
            }
            else if (typeof view === 'string' || view instanceof String) {
                var path = void 0;
                var component = void 0;
                if (view.startsWith('~')) {
                    view = view.replace('~', '');
                    path = fs.knownFolders.currentApp().path;
                    component = builder.load(fs.path.join(path, view));
                }
                else {
                    component = builder.load(view);
                }
                frame_1.topmost()._addView(component);
                _this._stylePopup(component, isTablet);
                _this._popupController.preferredContentSize =
                    component.nativeView.bounds.size;
                nativeView = component.ios;
            }
            if (source instanceof view_1.View) {
                _this._popupController.popoverPresentationController.sourceView =
                    source.nativeView;
                _this._popupController.popoverPresentationController.sourceRect = CGRectMake(0, 0, source.nativeView.frame.size.width, source.nativeView.frame.size.height);
                _this._popupController.view.addSubview(nativeView);
                frame_1.topmost().ios
                    .controller.presentModalViewControllerAnimated(_this._popupController, true);
            }
            else if (source instanceof UIView) {
                _this._popupController.popoverPresentationController.sourceView = source;
                _this._popupController.popoverPresentationController.sourceRect = CGRectMake(0, 0, source.frame.size.width, source.frame.size.height);
                _this._popupController.view.addSubview(nativeView);
                frame_1.topmost().ios
                    .controller.presentModalViewControllerAnimated(_this._popupController, true);
            }
        });
    };
    Popup.prototype.hidePopup = function (data) {
        this.resolveData = data;
        this._popupController.dismissModalViewControllerAnimated(true);
    };
    Popup.prototype._stylePopup = function (view, isTablet) {
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
                utils_1.ios._layoutRootView(view, CGRectMake(0, 0, utils_2.layout.toDeviceIndependentPixels(width), utils_2.layout.toDeviceIndependentPixels(height)));
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
                utils_1.ios._layoutRootView(view, CGRectMake(0, 0, width, height));
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
                    width = this._options.width
                        ? this._options.width
                        : isTablet ? 400 : 300;
                    height = this._options.height
                        ? this._options.height
                        : isTablet ? 320 : 100;
                }
                utils_1.ios._layoutRootView(view, CGRectMake(0, 0, width, height));
                break;
        }
    };
    return Popup;
}(popup_common_1.Common));
exports.Popup = Popup;
var UIPopoverPresentationControllerDelegateImpl = (function (_super) {
    __extends(UIPopoverPresentationControllerDelegateImpl, _super);
    function UIPopoverPresentationControllerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIPopoverPresentationControllerDelegateImpl.initWithOwner = function (owner) {
        var delegate = new UIPopoverPresentationControllerDelegateImpl();
        delegate._owner = owner;
        return delegate;
    };
    UIPopoverPresentationControllerDelegateImpl.prototype.adaptivePresentationStyleForPresentationController = function (controller) {
        return -1;
    };
    UIPopoverPresentationControllerDelegateImpl.prototype.popoverPresentationControllerDidDismissPopover = function (popoverPresentationController) {
        if (this._owner.get()) {
            this._owner.get().didDismiss();
        }
    };
    return UIPopoverPresentationControllerDelegateImpl;
}(NSObject));
UIPopoverPresentationControllerDelegateImpl.ObjCProtocols = [UIPopoverPresentationControllerDelegate];
exports.UIPopoverPresentationControllerDelegateImpl = UIPopoverPresentationControllerDelegateImpl;
//# sourceMappingURL=popup.ios.js.map