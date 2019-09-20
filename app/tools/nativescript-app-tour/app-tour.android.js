"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_tour_common_1 = require("./app-tour.common");
var color_1 = require("tns-core-modules/color");
var application_1 = require("tns-core-modules/application");
var TapTarget = com.getkeepsafe.taptargetview.TapTarget;
var TapTargetSequence = com.getkeepsafe.taptargetview.TapTargetSequence;
var AppTour = (function (_super) {
    __extends(AppTour, _super);
    function AppTour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStop = 0;
        return _this;
    }
    AppTour.prototype.buildNativeTour = function (stops, handlers) {
        var _this = this;
        
        var targets = stops.map(function (stop) {
            _this.currentStop = 0;
            return TapTarget.forView(stop.view.android, stop.title, stop.description || _this.defaults.description)
                .outerCircleColorInt(new color_1.Color(stop.outerCircleColor || _this.defaults.outerCircleColor).android)
                .outerCircleAlpha(float(stop.outerCircleOpacity || _this.defaults.outerCircleOpacity))
                .targetCircleColorInt(new color_1.Color(stop.innerCircleColor || _this.defaults.innerCircleColor).android)
                .titleTextSize(stop.titleTextSize || _this.defaults.titleTextSize)
                .titleTextColorInt(new color_1.Color(stop.titleTextColor || _this.defaults.titleTextColor).android)
                .descriptionTextSize(stop.descriptionTextSize || _this.defaults.descriptionTextSize)
                .descriptionTextColorInt(new color_1.Color(stop.descriptionTextColor || _this.defaults.descriptionTextColor).android)
                .cancelable(stop.dismissable)
                .drawShadow(true)
                .tintTarget(false)
                .targetRadius(stop.innerCircleRadius || _this.defaults.innerCircleRadius);
        });
        this.nativeTour = new TapTargetSequence(application_1.android.foregroundActivity);
        this.nativeTour.targets(java.util.Arrays.asList(targets));
        this.nativeTour.listener(new TapTargetSequence.Listener({
        
            onSequenceFinish: function () {
                handlers.finish();
            }.bind(this),
            onSequenceStep: function () {
                handlers.onStep(this.currentStop++);
            }.bind(this),
            onSequenceCanceled: function () {
                handlers.onCancel(this.currentStop++);
            }.bind(this)
        }));
    };
    AppTour.prototype.show = function () {
        this.nativeTour.start();
    };
    AppTour.prototype.reset = function () {
        this.buildNativeTour(this.stops, this.handlers);
    };
    return AppTour;
}(app_tour_common_1.AppTour));
exports.AppTour = AppTour;
//# sourceMappingURL=app-tour.android.js.map