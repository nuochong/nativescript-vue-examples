"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_tour_common_1 = require("./app-tour.common");
var color_1 = require("tns-core-modules/color");
var AppTour = (function (_super) {
    __extends(AppTour, _super);
    function AppTour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentIndex = 0;
        _this.delegate = AppTourDelegate.initWithOwner(new WeakRef(_this));
        return _this;
    }
    AppTour.prototype.buildNativeTour = function (stops) {
        var _this = this;
        this.currentIndex = 0;
        var nativeStops = stops.map(function (stop) {
            var nativeStop = MaterialShowcase.alloc().init();
            nativeStop.setTargetViewWithView(stop.view.ios);
            nativeStop.isTapRecognizerForTargetView = !stop.dismissable;
            nativeStop.delegate = _this.delegate;
            nativeStop.primaryText = stop.title;
            nativeStop.primaryTextColor = new color_1.Color(stop.titleTextColor || _this.defaults.titleTextColor).ios;
            nativeStop.primaryTextSize = stop.titleTextSize || _this.defaults.titleTextSize;
            nativeStop.secondaryText = stop.description || _this.defaults.description;
            nativeStop.secondaryTextColor = new color_1.Color(stop.descriptionTextColor || _this.defaults.descriptionTextColor).ios;
            nativeStop.secondaryTextSize = stop.descriptionTextSize || _this.defaults.descriptionTextSize;
            nativeStop.backgroundPromptColor = new color_1.Color(stop.outerCircleColor || _this.defaults.outerCircleColor).ios;
            nativeStop.backgroundPromptColorAlpha = stop.outerCircleOpacity || _this.defaults.outerCircleOpacity;
            nativeStop.targetHolderColor = new color_1.Color(stop.innerCircleColor || _this.defaults.innerCircleColor).ios;
            nativeStop.targetHolderRadius = stop.innerCircleRadius || _this.defaults.innerCircleRadius;
            nativeStop.aniRippleColor = new color_1.Color(stop.rippleColor || _this.defaults.rippleColor).ios;
            return nativeStop;
        });
        this.nativeTour = new MaterialShowcaseSequence();
        nativeStops.forEach(function (stop) {
            _this.nativeTour.temp(stop);
        });
    };
    AppTour.prototype.show = function () {
        this.nativeTour.start();
    };
    AppTour.prototype.next = function () {
        this.nativeTour.showCaseWillDismis();
    };
    AppTour.prototype.reset = function () {
        this.buildNativeTour(this.stops);
    };
    return AppTour;
}(app_tour_common_1.AppTour));
exports.AppTour = AppTour;
var AppTourDelegate = (function (_super) {
    __extends(AppTourDelegate, _super);
    function AppTourDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AppTourDelegate.prototype, "owner", {
        get: function () {
            return this._owner.get();
        },
        enumerable: true,
        configurable: true
    });
    AppTourDelegate.initWithOwner = function (owner) {
        var delegate = new AppTourDelegate();
        delegate._owner = owner;
        return delegate;
    };
    AppTourDelegate.showCaseWillDismissWithShowcaseDidTapTarget = function (showcase, didTapTarget) {
     };
    AppTourDelegate.showCaseDidDismissWithShowcaseDidTapTarget = function (showcase, didTapTarget) {
        if (this.owner.currentIndex + 1 === this.owner.stops.length) {
            this.owner.handlers.onStep(this.owner.currentIndex);
            this.owner.handlers.finish();
        }
        else if (didTapTarget) {
            this.owner.next();
            this.owner.handlers.onStep(this.owner.currentIndex++);
        }
        else if (this.owner.stops[this.owner.currentIndex].dismissable) {
            this.owner.handlers.onCancel(this.owner.currentIndex++);
        }
    };
    return AppTourDelegate;
}(NSObject));
AppTourDelegate.ObjCProtocols = [MaterialShowcaseDelegate];
exports.AppTourDelegate = AppTourDelegate;
//# sourceMappingURL=app-tour.ios.js.map