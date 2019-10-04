"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_common_1 = require("./menu.common");
var Types = require("tns-core-modules/utils/types");
var application = require("tns-core-modules/application/application");
var view = require("tns-core-modules/ui/core/view");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.popup = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                var i = void 0;
                var alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle(options && options.title ? options.title : null, options && options.message ? options.message : null, 0);
                if (options.actions) {
                    for (i = 0; i < options.actions.length; i++) {
                        var action = options.actions[i];
                        if (Types.isString(action)) {
                            alertController.addAction(UIAlertAction.actionWithTitleStyleHandler(action, 0, function (arg) {
                                resolve({
                                    id: options.actions.indexOf(arg.title),
                                    title: arg.title
                                });
                            }));
                        }
                        else if (Types.isString(action.title)) {
                            alertController.addAction(UIAlertAction.actionWithTitleStyleHandler(action.title, 0, function (arg) {
                                resolve(Object.assign({
                                    id: options.actions.find(function (actionItem) { return actionItem.title === arg.title; }).id || options.actions.indexOf(options.actions.find(function (actionItem) { return actionItem.title === arg.title; }))
                                }, options.actions.find(function (actionItem) { return actionItem.title === arg.title; })));
                            }));
                        }
                    }
                }
                if (Types.isString(options.cancelButtonText)) {
                    alertController.addAction(UIAlertAction.actionWithTitleStyleHandler(options.cancelButtonText, 1, function (arg) {
                        resolve(false);
                    }));
                }
                showUIAlertController(alertController);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    return Menu;
}(menu_common_1.Common));
exports.Menu = Menu;
var frame, button, label;
function getCurrentPage() {
    if (!frame) {
        frame = require("tns-core-modules/ui/frame");
    }
    var topmostFrame = frame.topmost();
    if (topmostFrame) {
        return topmostFrame.currentPage;
    }
    return undefined;
}
function applySelectors(view, callback) {
    var currentPage = getCurrentPage();
    if (currentPage) {
        var styleScope = currentPage._styleScope;
        if (styleScope) {
            view._inheritStyleScope(styleScope);
            view.onLoaded();
            callback(view);
            view.onUnloaded();
        }
    }
}
function getButtonColors() {
    if (!button) {
        var Button = require("tns-core-modules/ui/button").Button;
        button = new Button;
    }
    var buttonColor;
    var buttonBackgroundColor;
    applySelectors(button, function (btn) {
        buttonColor = btn.color;
        buttonBackgroundColor = btn.backgroundColor;
    });
    return { color: buttonColor, backgroundColor: buttonBackgroundColor };
}
function getLabelColor() {
    if (!label) {
        var Label = require("tns-core-modules/ui/label").Label;
        label = new Label;
    }
    var labelColor;
    applySelectors(label, function (lbl) {
        labelColor = lbl.color;
    });
    return labelColor;
}
function showUIAlertController(alertController) {
    var _a, _b;
    var currentView = getCurrentPage() || application.getRootView();
    if (currentView) {
        currentView = currentView.modal || currentView;
        var viewController = currentView.ios;
        if (!(currentView.ios instanceof UIViewController)) {
            var parentWithController = view.ios.getParentWithViewController(currentView);
            viewController = parentWithController ? parentWithController.viewController : undefined;
        }
        if (viewController) {
            if (alertController.popoverPresentationController) {
                alertController.popoverPresentationController.sourceView = viewController.view;
                alertController.popoverPresentationController.sourceRect = CGRectMake(viewController.view.bounds.size.width / 2.0, viewController.view.bounds.size.height / 2.0, 1.0, 1.0);
                alertController.popoverPresentationController.permittedArrowDirections = 0;
            }
            var color = getButtonColors().color;
            if (color) {
                alertController.view.tintColor = color.ios;
            }
            var lblColor = getLabelColor();
            if (lblColor) {
                if (alertController.title) {
                    var title = NSAttributedString.alloc().initWithStringAttributes(alertController.title, (_a = {}, _a[NSForegroundColorAttributeName] = lblColor.ios, _a));
                    alertController.setValueForKey(title, "attributedTitle");
                }
                if (alertController.message) {
                    var message = NSAttributedString.alloc().initWithStringAttributes(alertController.message, (_b = {}, _b[NSForegroundColorAttributeName] = lblColor.ios, _b));
                    alertController.setValueForKey(message, "attributedMessage");
                }
            }
            viewController.presentModalViewControllerAnimated(alertController, true);
        }
    }
}
//# sourceMappingURL=menu.ios.js.map